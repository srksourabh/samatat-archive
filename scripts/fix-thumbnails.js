const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '../public/lib/productionsData.ts');
let content = fs.readFileSync(file, 'utf8');

const regex = /\`\$\{THUMBNAIL_BASE\}\/([^\`]+)\`/g;
content = content.replace(regex, "getFirebaseImageUrl(`${THUMBNAIL_BASE}/$1`)");

fs.writeFileSync(file, content, 'utf8');
console.log('Done updating THUMBNAIL_BASE lines.');
