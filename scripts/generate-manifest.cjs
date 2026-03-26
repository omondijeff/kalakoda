const fs = require('fs');
const path = require('path');

const galleryDir = path.join(__dirname, '../public/gallery');
const outputFile = path.join(__dirname, '../public/gallery/manifest.json');

// Make sure gallery directory exists
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

function generateManifest() {
  const targetSubDir = 'Photos-3-001';
  const fullPath = path.join(galleryDir, targetSubDir);
  
  if (!fs.existsSync(fullPath)) {
    console.error(`Directory not found: ${fullPath}`);
    return;
  }

  const files = fs.readdirSync(fullPath);
  const images = files
    .filter(file => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
    .map(file => ({
      src: `/gallery/${targetSubDir}/${file}`,
      id: file
    }));

  fs.writeFileSync(outputFile, JSON.stringify(images, null, 2));
  console.log(`Successfully generated manifest with ${images.length} images.`);
}

generateManifest();
