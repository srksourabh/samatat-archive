const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      // Skip node_modules and .next
      if (file === 'node_modules' || file === '.next' || file === 'out') continue;
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      
      const regex = /https:\/\/storage\.googleapis\.com\/samatat-archive\.firebasestorage\.app\/([^'"\s\`\?]+)/g;
      
      let modified = false;
      content = content.replace(regex, (match, p1) => {
        modified = true;
        // p1 is the path, e.g., images/thumbnails/Adharmoni/IMG_8382.jpg
        // If it's already encoded, we might double encode, but let's assume it's raw or partially encoded.
        // It's safer to decode first then encodeURIComponent
        let decodedP1;
        try {
            decodedP1 = decodeURIComponent(p1);
        } catch(e) {
            decodedP1 = p1;
        }
        return `https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/${encodeURIComponent(decodedP1)}?alt=media`;
      });

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated URLs in ${fullPath}`);
      }
    }
  }
}

processDirectory(publicDir);
console.log('Done.');
