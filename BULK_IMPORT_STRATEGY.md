# Bulk Import Specification & Script

## 1. Specification

### Input Formats
- **Metadata**: CSV files (e.g., `productions.csv`, `festivals.csv`).
- **Media**: ZIP archives containing files referenced in the CSV (e.g., column `media_filenames` contains `img1.jpg, img2.jpg`).

### Validation & Normalization Rules
1.  **Dates**: Convert "DD/MM/YYYY", "YYYY-MM-DD", or "Year Only" to ISO 8601 timestamps.
2.  **Deduplication**: Check Firestore for existing documents matching `title` + `year`. Skip or Update based on flag.
3.  **Media Linking**: Match filenames in CSV columns to files found in the ZIP. Unmatched files are logged.
4.  **Schema Enforcement**: Ensure required fields (e.g., `title`, `slug`) exist. Auto-generate `slug` if missing.

### Process Flow
1.  **Validation Phase (Dry Run)**:
    - Parse CSV.
    - Validate rows against schema.
    - Check for duplicates in Firestore.
    - Scan ZIP structure (without uploading) to verify file existence.
    - Output: Validation Report (Valid Rows, Invalid Rows, Missing Media).
2.  **Execution Phase**:
    - Upload media to `gs://{bucket}/imports/{batchId}/{filename}`.
    - Create/Update Firestore documents with references to uploaded media.
    - Write `import_log` document for audit trail.

## 2. Node.js Script Outline

This script uses `firebase-admin` for privileged access. It can be run locally (CLI) or adapted into a Cloud Function (triggered by storage upload).

**Dependencies**: `firebase-admin`, `csv-parse`, `yauzl` (efficient ZIP streaming), `moment`.

```javascript
const admin = require('firebase-admin');
const fs = require('fs');
const { parse } = require('csv-parse');
const path = require('path');
// const yauzl = require('yauzl'); // For zip handling

// Initialize (Run locally with Service Account)
const serviceAccount = require('./service-account-key.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'samatat-theatre-archive.appspot.com'
});

const db = admin.firestore();
const bucket = admin.storage().bucket();

// Configuration
const CONFIG = {
  dryRun: true, // Set to false to execute
  batchSize: 500,
  collectionName: 'productions', // Target collection
  dedupeFields: ['title', 'year']
};

/**
 * Main Import Function
 */
async function runImport(csvPath, zipPath) {
  console.log(`Starting Import... DryRun: ${CONFIG.dryRun}`);
  const importId = `import_${Date.now()}`;
  
  // 1. Progress Tracker
  const stats = { total: 0, valid: 0, skipped: 0, errors: [], mediaFound: 0, mediaMissing: 0 };
  
  // 2. Parse CSV
  const rows = await parseCSV(csvPath);
  stats.total = rows.length;
  console.log(`Parsed ${stats.total} rows.`);

  // 3. Validation & Deduplication Loop
  const validOperations = [];

  for (const row of rows) {
    // Check Cancellation
    if (await isCancelled(importId)) {
      console.log('Import Cancelled by Admin.');
      return;
    }

    try {
      // Normalize Data
      const docData = normalizeRow(row);
      
      // Dedupe Check
      const isDuplicate = await checkDuplicate(CONFIG.collectionName, docData);
      if (isDuplicate) {
        stats.skipped++;
        stats.errors.push({ row: row.title, error: 'Duplicate detected' });
        continue;
      }

      // Media Validation (if ZIP provided)
      if (zipPath) {
        // Logic to check if docData.mediaFiles exist in zip entries
        // stats.mediaFound++ or stats.mediaMissing++
      }

      validOperations.push(docData);
      stats.valid++;

    } catch (e) {
      stats.errors.push({ row: row.title, error: e.message });
    }
    
    // Progress Report
    if (stats.total % 50 === 0) console.log(`Processed ${stats.total}...`);
  }

  // 4. Report (Dry Run)
  if (CONFIG.dryRun) {
    console.log('--- DRY RUN REPORT ---');
    console.log(stats);
    console.log('Operations ready:', validOperations.length);
    return;
  }

  // 5. Execution (Write to Firestore + Upload Media)
  console.log('--- EXECUTING IMPORT ---');
  
  const batchArray = [];
  let batch = db.batch();
  let opCount = 0;

  for (const data of validOperations) {
    const docRef = db.collection(CONFIG.collectionName).doc(); // or use specific ID
    
    // Upload Media Logic Here (Stream from ZIP to Storage)
    // const uploadedRefs = await uploadMediaFromZip(zipPath, data.mediaFilenames);
    // data.mediaRefs = uploadedRefs;

    batch.set(docRef, {
      ...data,
      importedAt: admin.firestore.FieldValue.serverTimestamp(),
      importId: importId
    });
    
    opCount++;
    if (opCount >= CONFIG.batchSize) {
      batchArray.push(batch.commit());
      batch = db.batch();
      opCount = 0;
    }
  }
  
  if (opCount > 0) batchArray.push(batch.commit());

  await Promise.all(batchArray);
  console.log('Import Complete.');
}

// Helpers

async function parseCSV(filePath) {
  const fileContent = fs.readFileSync(filePath);
  return new Promise((resolve, reject) => {
    parse(fileContent, { columns: true, trim: true }, (err, records) => {
      if (err) reject(err);
      else resolve(records);
    });
  });
}

function normalizeRow(row) {
  // Example normalization
  if (!row.title) throw new Error('Missing Title');
  return {
    title: row.title,
    year: parseInt(row.year),
    slug: row.slug || row.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, ''),
    synopsis: row.synopsis || '',
    mediaFilenames: row.media ? row.media.split(',').map(s => s.trim()) : []
  };
}

async function checkDuplicate(collectionName, data) {
  // Simple query based on dedupe fields
  let query = db.collection(collectionName);
  for (const field of CONFIG.dedupeFields) {
    query = query.where(field, '==', data[field]);
  }
  const snapshot = await query.get();
  return !snapshot.empty;
}

async function isCancelled(importId) {
  // Optional: Check a config doc in Firestore
  // const doc = await db.collection('admin_commands').doc('import_status').get();
  // return doc.data()?.status === 'cancelled';
  return false;
}

// Start
// runImport('./data/productions.csv', './data/media.zip');
```
