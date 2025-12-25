# Auto-Metadata Generation Strategy

This document outlines the templates and logic for automating accessibility text and media metadata when manual entry is missing.

## 1. Templates & Prompts

### A. Smart Alt Text
**Goal**: Descriptive, functional text for screen readers.
**Logic**: Combine specific metadata (if available) with generic analysis labels.

**Template:**
> "[View Type]: [Production Title] ([Year]). [Visual Description]. Featuring [Cast Names if detected]."

**Example Generation:**
*   **Input Metadata**: `Title: The First Dawn`, `Year: 1998`, `Type: Stage Shot`
*   **Vision API Labels**: `spotlight`, `man`, `white clothing`, `sitting`
*   **Result**: "Stage shot: The First Dawn (1998). A man in white clothing sitting under a spotlight."

### B. Standard Caption
**Goal**: Contextual information for visible display below images.

**Template:**
> [Year] — [Production Title] — Photo by [Photographer (default: 'Samatat Theatre Archive')]

**Fallback Logic:**
1.  If `photographer` is set: `1998 — The First Dawn — Photo by Rahim Khan`
2.  If missing: `1998 — The First Dawn — Photo by Samatat Theatre Archive`

### C. Video Accessibility
**1. Transcripts**:
*   **Strategy**: Auto-generate using Google Cloud Speech-to-Text.
*   **Storage**: Save as a text block in the `media` document field `transcript` and optionally as a `.vtt` file in Storage for captions.

**2. Automated Trailer (30s)**:
*   **Strategy**: Use `ffmpeg` to extract a highlight clip (e.g., from 00:05:00 to 00:05:30) or stitch random 5s segments.
*   **Naming**: `filename_trailer.mp4`

**3. HTML5 Fallback**:
```html
<video controls poster="{posterUrl}">
  <source src="{webmUrl}" type="video/webm">
  <source src="{mp4Url}" type="video/mp4">
  <track label="English" kind="subtitles" srclang="en" src="{vttUrl}" default>
  Your browser does not support the video tag.
</video>
```

## 2. Cloud Function Logic (Transcript Generation)

This function triggers when a `media` document is created or updated. If it's a video and lacks a transcript, it initiates the transcription process.

**File:** `functions/metadata.js` (Import this in your main `index.js`)

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const speech = require('@google-cloud/speech');

// Initialize Speech Client
const speechClient = new speech.SpeechClient();
const db = admin.firestore();

/**
 * Trigger: Firestore onUpdate (or onCreate)
 * Path: media/{mediaId}
 */
exports.generateVideoTranscript = functions.firestore
    .document('media/{mediaId}')
    .onWrite(async (change, context) => {
        const data = change.after.exists ? change.after.data() : null;
        
        // 1. Validation: valid data, is video, not already processed/processing
        if (!data || data.type !== 'video' || data.transcript || data.transcriptionStatus === 'PROCESSING') {
            return null;
        }

        const gcsUri = data.storageRef; // e.g., gs://bucket/path/to/video.mp4

        try {
            // 2. Mark as Processing to prevent loops
            await change.after.ref.update({ transcriptionStatus: 'PROCESSING' });

            // 3. Configure Request
            // Note: For long videos (> 1 min), use longRunningRecognize (async)
            // For this snippet, assuming we are handling the async operation setup
            const audio = { uri: gcsUri };
            const config = {
                encoding: 'LINEAR16', // Adjust based on input format (mp4 audio is usually AAC, might need transcoding via ffmpeg first)
                sampleRateHertz: 16000,
                languageCode: 'bn-BD', // Bengali (Bangladesh)
                alternativeLanguageCodes: ['en-US'],
                enableAutomaticPunctuation: true,
            };

            const request = {
                audio: audio,
                config: config,
            };

            // 4. Call Speech-to-Text (Long Running Operation)
            const [operation] = await speechClient.longRunningRecognize(request);
            
            // In a real generic function, we might not await the result here to avoid timeout.
            // We would rely on a separate Pub/Sub trigger or Cloud Task.
            // However, for simplicity in this snippet, we await the result (timeouts apply).
            const [response] = await operation.promise();

            const transcription = response.results
                .map(result => result.alternatives[0].transcript)
                .join('\n');

            // 5. Save Result
            await change.after.ref.update({
                transcript: transcription,
                transcriptionStatus: 'COMPLETED',
                updatedAt: admin.firestore.FieldValue.serverTimestamp()
            });

            console.log(`Transcript generated for ${context.params.mediaId}`);

        } catch (error) {
            console.error('Transcription failed:', error);
            await change.after.ref.update({ 
                transcriptionStatus: 'ERROR',
                transcriptionError: error.message 
            });
        }
    });
```

### Dependencies
Run the following in your `functions` folder:
```bash
npm install @google-cloud/speech
```

### Notes on Video Audio Encoding
Google Cloud Speech-to-Text strictly requires specific audio encodings (like LINEAR16 or FLAC). Raw uploads (MP4/AAC) often fail directly.

**Recommended Pipeline:**
1.  **Upload**: User uploads `video.mp4`.
2.  **Transcode (Existing `processMediaUpload`)**: 
    *   Extract audio track using `ffmpeg`.
    *   Convert to `.flac` or `.wav` (mono, 16000Hz).
    *   Upload `video_audio.flac` to a temporary bucket path.
3.  **Transcribe (This Function)**:
    *   Target `video_audio.flac`.
    *   Perform STT.
    *   Delete temp audio file.
