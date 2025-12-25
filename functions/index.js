/**
 * Import function triggers from their respective submodules
 * and export them to the entry point.
 *
 * See: https://firebase.google.com/docs/functions/organize-functions
 */

const { onObjectFinalized } = require("firebase-functions/v2/storage");
const { logger } = require("firebase-functions");
const admin = require("firebase-admin");
const path = require("path");
const os = require("os");
const fs = require("fs-extra");
const sharp = require("sharp");
const ffmpeg = require("fluent-ffmpeg");
const ffmpegInstaller = require("@ffmpeg-installer/ffmpeg");

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

// Set ffmpeg path
ffmpeg.setFfmpegPath(ffmpegInstaller.path);

/**
 * Cloud Function: processMediaUpload
 * Trigger: Storage Object Finalized (upload)
 * Filter: /uploads/raw/{file}
 */
exports.processMediaUpload = onObjectFinalized({
    cpu: 2,
    memory: "2GiB",
    timeoutSeconds: 300 // 5 minutes for video processing
}, async (event) => {
    const fileBucket = event.data.bucket;
    const filePath = event.data.name;
    const contentType = event.data.contentType;
    const fileName = path.basename(filePath);

    // 0. Validation & Filtering
    // Only process files in /uploads/raw/
    if (!filePath.startsWith("uploads/raw/")) {
        logger.info(`Skipping file ${filePath} - not in uploads/raw/`);
        return;
    }

    // Prevent infinite loops if we were to write back to the same folder (we won't, but good practice)
    if (fileName.startsWith("thumb_") || fileName.includes("_optimized")) {
        logger.info(`Skipping derivative file ${filePath}`);
        return;
    }

    logger.info(`Processing upload: ${filePath} (${contentType})`);

    const bucket = admin.storage().bucket(fileBucket);
    const workingDir = path.join(os.tmpdir(), "media_proc_" + Date.now());
    const tempFilePath = path.join(workingDir, fileName);

    // Metadata to be saved to Firestore
    let mediaMetadata = {
        originalPath: filePath,
        originalName: fileName,
        uploadedAt: admin.firestore.FieldValue.serverTimestamp(),
        processed: false,
        variants: {},
        type: "unknown"
    };

    try {
        await fs.ensureDir(workingDir);
        await bucket.file(filePath).download({ destination: tempFilePath });
        logger.info(`Downloaded ${fileName} to ${tempFilePath}`);

        // 1. Detect File Type & Setup Destination Paths
        // We'll parse the file name or metadata to try and find {year} and {productionSlug}
        // For this skeleton, we assume a structured naming convention or metadata was attached.
        // Fallback: Use current year and "uncategorized"
        const currentYear = new Date().getFullYear();
        const productionSlug = event.data.metadata?.productionSlug || "uncategorized";
        const targetDir = `media/${currentYear}/${productionSlug}`;
        
        // Helper to upload a file
        const uploadFile = async (localPath, destName, metadata = {}) => {
            const destPath = path.join(targetDir, destName);
            await bucket.upload(localPath, {
                destination: destPath,
                metadata: { metadata }
            });
            return destPath;
        };

        if (contentType.startsWith("image/")) {
            mediaMetadata.type = "image";
            await processImage(tempFilePath, fileName, uploadFile, mediaMetadata);
        } else if (contentType.startsWith("video/")) {
            mediaMetadata.type = "video";
            await processVideo(tempFilePath, fileName, uploadFile, mediaMetadata);
        } else {
            logger.warn(`Unsupported file type: ${contentType}`);
            mediaMetadata.type = "other";
            // Simply move/copy the file for "other" types if needed, or leave it.
            mediaMetadata.storageRef = filePath; // Keep original reference
        }

        // 4. Write Metadata to Firestore
        mediaMetadata.processed = true;
        // Use a clean ID or the filename as ID
        const docId = path.parse(fileName).name.replace(/[^a-zA-Z0-9]/g, "_");
        await db.collection("media").doc(docId).set(mediaMetadata);

        logger.info(`Successfully processed ${filePath}. Metadata written to media/${docId}`);

    } catch (error) {
        logger.error(`Error processing ${filePath}:`, error);
        // Optional: Write an error document or update status
    } finally {
        // Cleanup temp directory
        await fs.remove(workingDir);
    }
});

/**
 * Image Processing Logic
 * - Generate WebP/JPEG variants (360, 720, 1440 width)
 * - Generate Thumbnail
 * - Extract Dimensions
 */
async function processImage(localPath, fileName, uploader, metadata) {
    const sizes = [360, 720, 1440];
    const baseName = path.parse(fileName).name;
    const image = sharp(localPath);
    
    const meta = await image.metadata();
    metadata.width = meta.width;
    metadata.height = meta.height;
    
    // Thumbnail
    const thumbName = `${baseName}_thumb.webp`;
    const thumbPath = path.join(path.dirname(localPath), thumbName);
    await image.clone().resize(200).webp().toFile(thumbPath);
    metadata.thumbnailRef = await uploader(thumbPath, thumbName, { type: "thumbnail" });

    // Responsive Variants
    metadata.variants = {};
    for (const width of sizes) {
        if (meta.width && meta.width >= width) {
            // WebP
            const webpName = `${baseName}_${width}w.webp`;
            const webpPath = path.join(path.dirname(localPath), webpName);
            await image.clone().resize(width).webp().toFile(webpPath);
            const webpRef = await uploader(webpPath, webpName, { width });
            
            // JPEG Fallback
            const jpgName = `${baseName}_${width}w.jpg`;
            const jpgPath = path.join(path.dirname(localPath), jpgName);
            await image.clone().resize(width).jpeg().toFile(jpgPath);
            const jpgRef = await uploader(jpgPath, jpgName, { width });

            metadata.variants[`${width}w`] = { webp: webpRef, jpg: jpgRef };
        }
    }
    
    // Alt text placeholder
    metadata.alt_text = `Image of ${baseName}`;
}

/**
 * Video Processing Logic
 * - Extract Duration
 * - Generate Poster/Thumbnail
 * - Transcode to MP4 (720p/480p) - Simplified vs HLS for this skeleton
 */
async function processVideo(localPath, fileName, uploader, metadata) {
    return new Promise((resolve, reject) => {
        const baseName = path.parse(fileName).name;
        const outDir = path.dirname(localPath);
        
        // 1. Get Metadata (Duration)
        ffmpeg.ffprobe(localPath, (err, data) => {
            if (err) { logger.warn("ffprobe error", err); }
            else {
                metadata.duration = data.format.duration;
                metadata.format = data.format.format_name;
            }
        });

        // 2. Generate Poster (Thumbnail)
        const posterName = `${baseName}_poster.jpg`;
        
        ffmpeg(localPath)
            .on('end', async () => {
                logger.info("Video poster generated");
                metadata.posterRef = await uploader(path.join(outDir, posterName), posterName, { type: "poster" });
                
                // 3. Simple Transcode to 720p MP4 (Adaptive HLS is complex for a single function skeleton)
                const mp4Name = `${baseName}_720p.mp4`;
                const mp4Path = path.join(outDir, mp4Name);
                
                ffmpeg(localPath)
                    .size('?x720') // Resize height to 720, auto width
                    .videoCodec('libx264')
                    .audioCodec('aac')
                    .format('mp4')
                    .on('error', (err) => {
                         logger.error("Transcode error", err);
                         reject(err);
                    })
                    .on('end', async () => {
                        logger.info("Transcoding complete");
                        const mp4Ref = await uploader(mp4Path, mp4Name, { quality: "720p" });
                        metadata.variants = { "720p": mp4Ref };
                        resolve();
                    })
                    .save(mp4Path);
            })
            .on('error', (err) => reject(err))
            .screenshots({
                count: 1,
                folder: outDir,
                filename: posterName,
                size: '640x?'
            });
    });
}
