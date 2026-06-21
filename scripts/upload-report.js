const admin = require('firebase-admin');
const path = require('path');
const serviceAccount = require('C:\\Users\\soura\\Downloads\\samatat-archive-firebase-adminsdk-fbsvc-819ae8082b.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function uploadFile() {
  try {
    const bucket = admin.storage().bucket('samatat-archive.firebasestorage.app');
    const localFilePath = 'C:\\Users\\soura\\Downloads\\barshik protibedan 2026.pdf';
    const destinationPath = 'documents/reports/barshik_protibedan_2026.pdf';
    
    console.log(`Uploading ${localFilePath} to ${destinationPath}...`);
    
    await bucket.upload(localFilePath, {
      destination: destinationPath,
      metadata: {
        contentType: 'application/pdf',
      }
    });
    
    console.log("Upload complete!");
  } catch (error) {
    console.error("Error uploading file:", error);
  }
}

uploadFile();
