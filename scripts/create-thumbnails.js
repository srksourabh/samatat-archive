#!/usr/bin/env node
/**
 * Thumbnail Generator for Hero Collage
 * =====================================
 *
 * This script downloads production photos from Firebase Storage,
 * creates optimized thumbnails (400x400, compressed JPEG),
 * and uploads them back to a 'thumbnails' folder.
 *
 * USAGE:
 *   node scripts/create-thumbnails.js
 *
 * REQUIREMENTS:
 *   npm install sharp
 */

const admin = require('firebase-admin');
const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

// Configuration
const BUCKET_NAME = 'samatat-archive.firebasestorage.app';
const SERVICE_ACCOUNT_PATH = path.join(__dirname, 'service-account.json');
const THUMBNAIL_SIZE = 400; // 400x400 pixels
const JPEG_QUALITY = 75; // Good balance of quality and size
const SOURCE_PREFIX = 'images/productions/';
const THUMB_PREFIX = 'images/thumbnails/';

// Check for service account
if (!fs.existsSync(SERVICE_ACCOUNT_PATH)) {
  console.error('❌ Error: Service account file not found at', SERVICE_ACCOUNT_PATH);
  process.exit(1);
}

// Initialize Firebase Admin
const serviceAccount = require(SERVICE_ACCOUNT_PATH);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET_NAME
});

const bucket = admin.storage().bucket();

async function createThumbnail(file) {
  const fileName = file.name;

  // Skip non-image files
  if (!fileName.match(/\.(jpg|jpeg|png|webp)$/i)) {
    return null;
  }

  // Create thumbnail path
  const relativePath = fileName.replace(SOURCE_PREFIX, '');
  const thumbPath = THUMB_PREFIX + relativePath.replace(/\.(jpg|jpeg|png|webp)$/i, '.jpg');

  try {
    // Check if thumbnail already exists
    const [exists] = await bucket.file(thumbPath).exists();
    if (exists) {
      console.log(`⏭️  Skip (exists): ${relativePath}`);
      return { path: thumbPath, skipped: true };
    }

    // Download original
    const [buffer] = await file.download();

    // Create thumbnail with sharp
    const thumbnail = await sharp(buffer)
      .resize(THUMBNAIL_SIZE, THUMBNAIL_SIZE, {
        fit: 'cover',
        position: 'center'
      })
      .jpeg({
        quality: JPEG_QUALITY,
        progressive: true
      })
      .toBuffer();

    // Upload thumbnail
    await bucket.file(thumbPath).save(thumbnail, {
      metadata: {
        contentType: 'image/jpeg',
        cacheControl: 'public, max-age=31536000',
      },
    });

    // Make public
    await bucket.file(thumbPath).makePublic();

    const originalSize = (buffer.length / 1024).toFixed(1);
    const thumbSize = (thumbnail.length / 1024).toFixed(1);
    const reduction = ((1 - thumbnail.length / buffer.length) * 100).toFixed(0);

    console.log(`✅ Created: ${relativePath} (${originalSize}KB → ${thumbSize}KB, -${reduction}%)`);

    return {
      original: fileName,
      thumbnail: thumbPath,
      url: `https://storage.googleapis.com/${BUCKET_NAME}/${thumbPath}`,
      originalSize: buffer.length,
      thumbSize: thumbnail.length
    };
  } catch (error) {
    console.error(`❌ Error processing ${fileName}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('\n🖼️  Thumbnail Generator for Hero Collage\n');
  console.log(`📁 Source: ${SOURCE_PREFIX}`);
  console.log(`📁 Output: ${THUMB_PREFIX}`);
  console.log(`📐 Size: ${THUMBNAIL_SIZE}x${THUMBNAIL_SIZE}px`);
  console.log(`📊 Quality: ${JPEG_QUALITY}%\n`);
  console.log('─'.repeat(60) + '\n');

  // Get all files from productions folder
  const [files] = await bucket.getFiles({ prefix: SOURCE_PREFIX });

  const imageFiles = files.filter(f => f.name.match(/\.(jpg|jpeg|png|webp)$/i));
  console.log(`Found ${imageFiles.length} images to process\n`);

  const results = [];
  let created = 0;
  let skipped = 0;
  let failed = 0;

  // Process in batches of 5 to avoid overwhelming the API
  const batchSize = 5;
  for (let i = 0; i < imageFiles.length; i += batchSize) {
    const batch = imageFiles.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(createThumbnail));

    for (const result of batchResults) {
      if (result) {
        results.push(result);
        if (result.skipped) {
          skipped++;
        } else {
          created++;
        }
      } else {
        failed++;
      }
    }

    // Progress
    const progress = Math.min(i + batchSize, imageFiles.length);
    process.stdout.write(`\rProgress: ${progress}/${imageFiles.length}`);
  }

  console.log('\n\n' + '─'.repeat(60));
  console.log('\n📊 Summary:');
  console.log(`   ✅ Created: ${created}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`   📁 Total: ${imageFiles.length}\n`);

  // Calculate total size savings
  const successfulResults = results.filter(r => r && !r.skipped);
  if (successfulResults.length > 0) {
    const totalOriginal = successfulResults.reduce((sum, r) => sum + r.originalSize, 0);
    const totalThumb = successfulResults.reduce((sum, r) => sum + r.thumbSize, 0);
    const savings = ((1 - totalThumb / totalOriginal) * 100).toFixed(1);

    console.log(`💾 Size Reduction: ${(totalOriginal / 1024 / 1024).toFixed(1)}MB → ${(totalThumb / 1024 / 1024).toFixed(1)}MB (-${savings}%)\n`);
  }

  // Output URLs for HeroCollage component
  if (results.length > 0) {
    console.log('═'.repeat(60));
    console.log('\n🎨 THUMBNAIL URLs (for HeroCollage.tsx):\n');

    const urls = results
      .filter(r => r && r.url)
      .map(r => r.url);

    console.log('const productionThumbnails: string[] = [');
    urls.forEach((url, i) => {
      const comma = i < urls.length - 1 ? ',' : '';
      console.log(`  '${url}'${comma}`);
    });
    console.log('];');
    console.log('');
  }
}

main().catch(error => {
  console.error('❌ Fatal error:', error.message);
  process.exit(1);
});
