const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  const inputPath = path.join(__dirname, '../public/logo1.png');
  const appDir = path.join(__dirname, '../app');
  const publicDir = path.join(__dirname, '../public');

  // Read the original image
  const image = sharp(inputPath);
  const metadata = await image.metadata();

  console.log('Original image:', metadata.width, 'x', metadata.height);

  // The logo has masks on the left and text on the right
  // We want to extract just the square mask portion
  // Looking at the image, the left part is roughly square
  const squareSize = metadata.height;

  // Extract the left square portion (the masks)
  const croppedImage = image.extract({
    left: 0,
    top: 0,
    width: squareSize,
    height: squareSize
  });

  // Generate favicon sizes
  const sizes = [16, 32, 48, 64, 128, 180, 192, 512];

  for (const size of sizes) {
    const outputPath = path.join(publicDir, `icon-${size}.png`);
    await croppedImage
      .clone()
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(outputPath);
    console.log(`Generated: icon-${size}.png`);
  }

  // Generate apple-touch-icon
  await croppedImage
    .clone()
    .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, 'apple-icon.png'));
  console.log('Generated: apple-icon.png');

  // Generate favicon.ico (32x32 PNG as .ico alternative)
  await croppedImage
    .clone()
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(appDir, 'icon.png'));
  console.log('Generated: icon.png (for favicon)');

  // Copy 32x32 to favicon location
  await croppedImage
    .clone()
    .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toFile(path.join(publicDir, 'favicon.png'));
  console.log('Generated: public/favicon.png');

  console.log('\nFavicon generation complete!');
}

generateFavicon().catch(console.error);
