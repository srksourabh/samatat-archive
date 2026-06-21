const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\soura\\Downloads\\samatat-archive-firebase-adminsdk-fbsvc-819ae8082b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function checkBuckets() {
  try {
    const storage = admin.storage();
    const buckets = await storage.getBuckets();
    console.log("Found buckets:");
    for (const bucket of buckets[0]) {
      console.log(`- ${bucket.name}`);
      try {
        const [files] = await bucket.getFiles({ maxResults: 1 });
        console.log(`  Successfully listed files. Found ${files.length} files.`);
        if (files.length > 0) {
          console.log(`  Example file: ${files[0].name}`);
        }
      } catch (e) {
        console.log(`  Error listing files: ${e.message}`);
      }
    }
  } catch (error) {
    console.error("Error fetching buckets:", error);
  }
}

checkBuckets();
