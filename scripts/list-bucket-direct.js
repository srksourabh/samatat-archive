const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\soura\\Downloads\\samatat-archive-firebase-adminsdk-fbsvc-819ae8082b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function checkBuckets() {
  try {
    const bucketNames = ['samatat-archive.appspot.com', 'samatat-archive.firebasestorage.app'];
    for (const name of bucketNames) {
      console.log(`Checking bucket: ${name}`);
      const bucket = admin.storage().bucket(name);
      try {
        const [files] = await bucket.getFiles({ maxResults: 1 });
        console.log(`  SUCCESS! Bucket exists. Found ${files.length} files.`);
        if (files.length > 0) {
          console.log(`  Example file: ${files[0].name}`);
        }
      } catch (e) {
        console.log(`  ERROR: ${e.message}`);
      }
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

checkBuckets();
