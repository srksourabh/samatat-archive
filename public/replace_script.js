const fs = require('fs');
const file = 'c:/Users/soura/Dropbox/AI/Projects/samatat-archive/public/app/workshops/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace standard literal usages
content = content.replace(/`\$\{WORKSHOP_BASE\}\/([^`]+)`/g, "getWorkshopImageUrl('$1')");
// Replace JSX curly brace usages if any
content = content.replace(/\{\`\$\{WORKSHOP_BASE\}\/([^`]+)\`\}/g, "{getWorkshopImageUrl('$1')}");

fs.writeFileSync(file, content);
console.log('Done');
