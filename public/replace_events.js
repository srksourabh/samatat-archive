const fs = require('fs');
const file = 'c:/Users/soura/Dropbox/AI/Projects/samatat-archive/public/app/activities/page.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  "const EVENTS_BASE = 'https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fevents?alt=media';",
  "const getEventImageUrl = (filename: string) => `https://firebasestorage.googleapis.com/v0/b/samatat-archive.firebasestorage.app/o/images%2Fevents%2F${encodeURIComponent(filename)}?alt=media`;"
);

content = content.replace(/`\$\{EVENTS_BASE\}\/([^`]+)`/g, "getEventImageUrl('$1')");
content = content.replace(/\{\`\$\{EVENTS_BASE\}\/([^`]+)\`\}/g, "{getEventImageUrl('$1')}");

fs.writeFileSync(file, content);
console.log('Done');
