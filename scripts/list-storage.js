const admin = require('firebase-admin');
const path = require('path');

const BUCKET_NAME = 'samatat-archive.firebasestorage.app';
const SERVICE_ACCOUNT_PATH = path.join(__dirname, 'service-account.json');

const serviceAccount = require(SERVICE_ACCOUNT_PATH);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: BUCKET_NAME
});

const bucket = admin.storage().bucket();

async function listFiles() {
  const [files] = await bucket.getFiles({ prefix: 'images/thumbnails/' });
  const results = files.map(file => ({
    name: file.name,
    url: `https://storage.googleapis.com/${BUCKET_NAME}/${file.name}`
  }));
  console.log(JSON.stringify(results, null, 2));
}

listFiles().catch(console.error);
