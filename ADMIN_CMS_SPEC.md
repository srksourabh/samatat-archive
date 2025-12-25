# Admin CMS Specification (React + Firebase)

This document outlines the architecture, component structure, and key implementation details for the Samatat Theatre Archive Admin CMS.

## 1. Component List

### Core & Layout
*   **`App`**: Main entry point, handles global auth state and routing.
*   **`AuthGuard`**: Protected route wrapper (redirects to login if unauthenticated).
*   **`RoleGuard`**: Checks specific roles (e.g., `admin` only for users/billing).
*   **`DashboardLayout`**: Sidebar navigation, top bar with user profile, main content area.
*   **`LoginPage`**: Firebase Auth container (Email/Password + Google Sign-In).

### Content Management
*   **`CollectionList`**: Reusable data table with sort, filter, and search. (Used for Pages, Productions, etc.)
*   **`CollectionForm`**: Dynamic form handling based on schema.
*   **`MarkdownEditor`**: WYSIWYG editor (e.g., using `react-mde` or `tiptap`) for content fields.
*   **`SlugGenerator`**: Input component that auto-generates URL-friendly slugs from titles.
*   **`PreviewModal`**: Renders the current content in a "frontend-like" view.

### Media & Tools
*   **`MediaLibrary`**: Grid view of the `media` collection.
    *   **`MediaPicker`**: Modal version of MediaLibrary for selecting images in forms.
*   **`MediaUploader`**: Drag-and-drop component for uploading files.
*   **`BulkImport`**: Wizard UI for CSV mapping and ZIP uploads.
*   **`RoleManager`**: UI to list users and toggle `admin`/`editor` claims (Admin only).

## 2. Route Mapping

| Path | Component | Access | Description |
| :--- | :--- | :--- | :--- |
| `/login` | `LoginPage` | Public | Sign in. |
| `/` | `DashboardHome` | Auth | Overview stats (recent edits, storage usage). |
| `/pages` | `PageList` | Editor+ | List all website pages. |
| `/pages/new` | `PageEditor` | Editor+ | Create a new page. |
| `/pages/:id` | `PageEditor` | Editor+ | Edit existing page. |
| `/productions` | `ProductionList`| Editor+ | List productions. |
| `/productions/:id`| `ProductionEditor`| Editor+ | Edit production details. |
| ... | ... | ... | *Repeat for Festivals, Workshops, Team, etc.* |
| `/media` | `MediaLibrary` | Editor+ | Manage assets. |
| `/import` | `BulkImport` | Editor+ | Batch upload tools. |
| `/users` | `RoleManager` | Admin | Manage staff roles. |

## 3. Implementation Snippets

### A. Media Upload Component (Drag-and-Drop)
Targeting the Cloud Function trigger path: `/uploads/raw/`.

```jsx
import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage';

const MediaUploader = ({ productionSlug = 'uncategorized' }) => {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const onDrop = useCallback(async (acceptedFiles) => {
    setUploading(true);
    const storage = getStorage();

    // specific target path for the Cloud Function trigger
    // Pattern: uploads/raw/{filename}
    // Metadata is attached to help the function organize it later
    
    const uploadPromises = acceptedFiles.map((file) => {
      // Create a unique name to prevent collisions if needed, or keep original
      const storageRef = ref(storage, `uploads/raw/${Date.now()}_${file.name}`);
      
      const metadata = {
        customMetadata: {
          productionSlug: productionSlug,
          originalName: file.name
        }
      };

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      return new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
          (snapshot) => {
             const p = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
             setProgress(Math.round(p));
          },
          (error) => reject(error),
          () => resolve(uploadTask.snapshot.ref)
        );
      });
    });

    try {
      await Promise.all(uploadPromises);
      alert('Uploads complete! Processing started in background.');
    } catch (error) {
      console.error("Upload failed", error);
      alert('One or more uploads failed.');
    } finally {
      setUploading(false);
      setProgress(0);
    }
  }, [productionSlug]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={styles.dropzone}>
      <input {...getInputProps()} />
      {uploading ? (
        <p>Uploading... {progress}%</p>
      ) : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop media files here, or click to select files</p>
      )}
    </div>
  );
};

const styles = {
  dropzone: {
    border: '2px dashed #cccccc',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: '#f9f9f9'
  }
};

export default MediaUploader;
```

### B. Bulk Import Logic (CSV + ZIP)
Requires `papaparse` (CSV) and `jszip` (ZIP) libraries.

```jsx
import React, { useState } from 'react';
import Papa from 'papaparse';
import JSZip from 'jszip';
import { getFirestore, collection, addDoc, writeBatch, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const BulkImport = () => {
  const [csvFile, setCsvFile] = useState(null);
  const [zipFile, setZipFile] = useState(null);
  const [status, setStatus] = useState('');

  const handleImport = async () => {
    if (!csvFile) return;
    setStatus('Parsing CSV...');
    
    Papa.parse(csvFile, {
      header: true,
      skipEmptyLines: true,
      complete: async (results) => {
        try {
          await processData(results.data);
          if (zipFile) await processZip(zipFile);
          setStatus('Import Complete!');
        } catch (e) {
          console.error(e);
          setStatus(`Error: ${e.message}`);
        }
      }
    });
  };

  const processData = async (rows) => {
    const db = getFirestore();
    const batch = writeBatch(db);
    let count = 0;
    
    // Example: Importing 'productions'
    // CSV columns should match schema: title, year, synopsis, etc.
    rows.forEach((row) => {
      // Simple transformation or validation logic here
      const docRef = doc(collection(db, 'productions')); 
      batch.set(docRef, {
        ...row,
        year: parseInt(row.year) || 0,
        createdAt: new Date()
      });
      count++;
    });

    setStatus(`Committing ${count} records to Firestore...`);
    await batch.commit();
  };

  const processZip = async (file) => {
    setStatus('Unzipping and uploading media...');
    const storage = getStorage();
    const zip = new JSZip();
    const loadedZip = await zip.loadAsync(file);
    
    const uploadPromises = [];
    
    loadedZip.forEach((relativePath, zipEntry) => {
      if (!zipEntry.dir) {
        uploadPromises.push(async () => {
          const blob = await zipEntry.async('blob');
          // Upload to raw folder for the Cloud Function to pick up
          const storageRef = ref(storage, `uploads/raw/${zipEntry.name}`);
          await uploadBytes(storageRef, blob, {
             customMetadata: { importBatch: 'true' }
          });
        });
      }
    });

    await Promise.all(uploadPromises);
  };

  return (
    <div className="p-4 border rounded">
      <h3>Bulk Import</h3>
      <div className="mb-4">
        <label>Metadata CSV:</label>
        <input type="file" accept=".csv" onChange={e => setCsvFile(e.target.files[0])} />
      </div>
      <div className="mb-4">
        <label>Media ZIP (Optional):</label>
        <input type="file" accept=".zip" onChange={e => setZipFile(e.target.files[0])} />
      </div>
      <button onClick={handleImport} disabled={!csvFile}>Start Import</button>
      <pre>{status}</pre>
    </div>
  );
};

export default BulkImport;
```
