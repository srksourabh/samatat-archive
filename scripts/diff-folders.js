const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const parentDir = path.resolve(__dirname, '..');
const innerDir = path.resolve(__dirname, '../samatat-archive');

function getHash(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash('md5').update(content).digest('hex');
}

function walk(dir, callback, baseDir) {
  if (!baseDir) baseDir = dir;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === 'node_modules' || file === '.git' || file === '.next' || file === 'out') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath, callback, baseDir);
    } else {
      callback(fullPath, path.relative(baseDir, fullPath));
    }
  }
}

console.log('Comparing inner folder against parent folder...');
const innerFiles = [];
walk(innerDir, (fullPath, relativePath) => {
  innerFiles.push(relativePath);
  const parentFile = path.join(parentDir, relativePath);
  if (!fs.existsSync(parentFile)) {
    console.log(`ONLY IN INNER: ${relativePath}`);
  } else {
    const innerHash = getHash(fullPath);
    const parentHash = getHash(parentFile);
    if (innerHash !== parentHash) {
      console.log(`DIFFERENT: ${relativePath}`);
    }
  }
});

// Also check what's in parent but not in inner
console.log('\nChecking parent folder for unique files...');
walk(parentDir, (fullPath, relativePath) => {
  // skip the inner folder itself
  if (relativePath.startsWith('samatat-archive')) return;
  
  const innerFile = path.join(innerDir, relativePath);
  if (!fs.existsSync(innerFile)) {
    console.log(`ONLY IN PARENT: ${relativePath}`);
  }
});

console.log('\nDiff complete.');
