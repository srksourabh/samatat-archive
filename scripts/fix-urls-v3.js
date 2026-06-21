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
        
        let decodedP1;
        try {
            decodedP1 = decodeURIComponent(p1);
        } catch(e) {
            decodedP1 = p1;
        }
        
        // Split by / and encode each segment individually, then join with %2F
        const encodedPath = decodedP1.split('/').map(segment => encodeURIComponent(segment)).join('%2F');
        
        return `https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/${encodedPath}?alt=media`;
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
