#!/usr/bin/env node
/**
 * Bulk Upload Script for Firebase Storage
 * ========================================
 *
 * This script uploads an entire folder (with all subfolders) to Firebase Storage.
 *
 * SETUP:
 *   1. Download your service account key from Firebase Console:
 *      - Go to Project Settings > Service Accounts
 *      - Click "Generate new private key"
 *      - Save as: scripts/service-account.json
 *
 *   2. Run the script:
 *      node scripts/upload-to-storage.js <local-folder> [storage-prefix]
 *
 * EXAMPLES:
 *   node scripts/upload-to-storage.js ./my-photos images
 *   node scripts/upload-to-storage.js ./productions images/productions
 *   node scripts/upload-to-storage.js ./all-media images
 *
 * The folder structure will be preserved in Firebase Storage.
 */

const admin = require('firebase-admin');
const fs = require('fs');
const path = require('path');

// Configuration
const BUCKET_NAME = 'samatat-archive.firebasestorage.app';
const SERVICE_ACCOUNT_PATH = path.join(__dirname, 'service-account.json');

// Supported file extensions (IMAGES ONLY - videos are skipped)
const SUPPORTED_EXTENSIONS = [
  '.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'  // Images only
];

// Get command line arguments
const args = process.argv.slice(2);

function showHelp() {
  console.log(`
╔═══════════════════════════════════════════════════════════════════════╗
║              Firebase Storage Bulk Upload Script                      ║
╠═══════════════════════════════════════════════════════════════════════╣
║                                                                       ║
║  SETUP (one-time):                                                    ║
║    1. Go to Firebase Console > Project Settings > Service Accounts   ║
║    2. Click "Generate new private key"                                ║
║    3. Save the file as: scripts/service-account.json                  ║
║                                                                       ║
║  USAGE:                                                               ║
║    node scripts/upload-to-storage.js <folder> [storage-prefix]        ║
║                                                                       ║
║  EXAMPLES:                                                            ║
║    node scripts/upload-to-storage.js ./photos images                  ║
║    node scripts/upload-to-storage.js ./media/productions images/productions ║
║    node scripts/upload-to-storage.js ./festivals images/festivals     ║
║                                                                       ║
║  FOLDER STRUCTURE EXAMPLE:                                            ║
║    ./photos/                                                          ║
║    ├── 2024/                                                          ║
║    │   ├── play1.jpg  → images/2024/play1.jpg                        ║
║    │   └── play2.jpg  → images/2024/play2.jpg                        ║
║    └── 2023/                                                          ║
║        └── show.jpg   → images/2023/show.jpg                         ║
║                                                                       ║
╚═══════════════════════════════════════════════════════════════════════╝
`);
}

if (args.length < 1 || args[0] === '--help' || args[0] === '-h') {
  showHelp();
  process.exit(args.length < 1 ? 1 : 0);
}

const localFolder = path.resolve(args[0]);
const storagePrefix = args[1] || 'images';

// Check for service account file
if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error(`
❌ Error: Service account file not found!

Please download your service account key:
  1. Go to Firebase Console: https://console.firebase.google.com/project/samatat-archive/settings/serviceaccounts/adminsdk
  2. Click "Generate new private key"
  3. Save the file as: ${SERVICE_ACCOUNT_PATH}
`);
  process.exit(1);
}

// Check if local folder exists
if (!fs.existsSync(localFolder)) {
  console.error(`❌ Error: Folder "${localFolder}" does not exist.`);
  process.exit(1);
}

// Initialize Firebase Admin
const serviceAccount = require(SERVICE_ACCOUNT_PATH);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET_NAME
});

const bucket = admin.storage().bucket();

// Get all files recursively
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);

    // Skip hidden files and folders
    if (file.startsWith('.')) return;

    if (fs.statSync(fullPath).isDirectory()) {
      getAllFiles(fullPath, arrayOfFiles);
    } else {
      const ext = path.extname(file).toLowerCase();
      if (SUPPORTED_EXTENSIONS.includes(ext)) {
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

// Get content type from extension
function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const types = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4',
    '.mov': 'video/quicktime',
    '.avi': 'video/x-msvideo',
    '.mkv': 'video/x-matroska',
    '.webm': 'video/webm',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  };
  return types[ext] || 'application/octet-stream';
}

// Upload a single file
async function uploadFile(localPath, storagePath) {
  try {
    await bucket.upload(localPath, {
      destination: storagePath,
      metadata: {
        contentType: getContentType(localPath),
        cacheControl: 'public, max-age=31536000', // Cache for 1 year
      },
    });

    // Make file publicly accessible
    await bucket.file(storagePath).makePublic();

    return {
      success: true,
      url: `https://storage.googleapis.com/${BUCKET_NAME}/${storagePath}`
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
}

// Main function
async function main() {
  console.log(`\n🔍 Scanning folder: ${localFolder}`);
  console.log(`📦 Storage prefix: ${storagePrefix}\n`);

  const files = getAllFiles(localFolder);

  if (files.length === 0) {
    console.log('⚠️  No supported files found.');
    console.log(`   Supported: ${SUPPORTED_EXTENSIONS.join(', ')}`);
    process.exit(0);
  }

  console.log(`📁 Found ${files.length} files to upload\n`);
  console.log('─'.repeat(60));

  let uploaded = 0;
  let failed = 0;
  const results = [];

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const relativePath = path.relative(localFolder, file);
    const storagePath = `${storagePrefix}/${relativePath}`.replace(/\\/g, '/');

    process.stdout.write(`[${i + 1}/${files.length}] ${relativePath}... `);

    const result = await uploadFile(file, storagePath);

    if (result.success) {
      console.log('✅');
      uploaded++;
      results.push({
        local: relativePath,
        storage: storagePath,
        url: result.url
      });
    } else {
      console.log(`❌ ${result.error}`);
      failed++;
    }
  }

  console.log('─'.repeat(60));
  console.log(`\n📊 Upload Summary:`);
  console.log(`   ✅ Uploaded: ${uploaded}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`   📁 Total: ${files.length}\n`);

  // Save results to JSON
  if (results.length > 0) {
    const outputFile = path.join(__dirname, 'uploaded-files.json');
    fs.writeFileSync(outputFile, JSON.stringify(results, null, 2));
    console.log(`📝 Results saved to: scripts/uploaded-files.json`);

    // Generate HeroCollage array
    const imageUrls = results
      .filter(r => /\.(jpg|jpeg|png|webp)$/i.test(r.storage))
      .slice(0, 24); // Take first 24 images for hero collage

    if (imageUrls.length > 0) {
      console.log(`\n${'═'.repeat(60)}`);
      console.log(`🎨 HERO COLLAGE URLS (copy to HeroCollage.tsx):`);
      console.log(`${'═'.repeat(60)}\n`);

      console.log(`const productionPhotos: string[] = [`);
      imageUrls.forEach((img, i) => {
        const comma = i < imageUrls.length - 1 ? ',' : '';
        console.log(`  '${img.url}'${comma}`);
      });
      console.log(`];`);
      console.log('');
    }
  }

  process.exit(failed > 0 ? 1 : 0);
}

main().catch(error => {
  console.error('❌ Fatal error:', error.message);
  process.exit(1);
});
