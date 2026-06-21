const admin = require('firebase-admin');
const serviceAccount = require('C:\\Users\\soura\\Downloads\\samatat-archive-firebase-adminsdk-fbsvc-819ae8082b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function checkFile() {
  try {
    const bucket = admin.storage().bucket('samatat-archive.firebasestorage.app');
    
    // Check if the file exists
    const file = bucket.file('images/thumbnails/Swapnomoy/IMG_1111.jpg');
    const [exists] = await file.exists();
    
    if (exists) {
      console.log("File exists!");
      const [metadata] = await file.getMetadata();
      console.log("Metadata:", metadata.mediaLink);
      
      // Get a signed url to see if we can download it
      const [signedUrl] = await file.getSignedUrl({
        action: 'read',
        expires: '03-09-2491'
      });
      console.log("Signed URL:", signedUrl);
      
      // See if firebaseStorageDownloadTokens exists
      console.log("Tokens:", metadata.metadata?.firebaseStorageDownloadTokens);
    } else {
      console.log("File DOES NOT exist!");
      
      // Let's list a few files with prefix 'images/thumbnails'
      const [files] = await bucket.getFiles({ prefix: 'images/thumbnails', maxResults: 5 });
      console.log(`Found ${files.length} files with prefix 'images/thumbnails':`);
      files.forEach(f => console.log(f.name));
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

checkFile();
