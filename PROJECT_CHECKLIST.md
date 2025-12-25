# Samatat Theatre Archive - Project Checklist

## Enabled Services
- [ ] Firestore (Native Mode)
- [ ] Firebase Storage
- [ ] Firebase Hosting
- [ ] Cloud Functions
- [ ] Firebase Authentication
- [ ] Google Analytics
- [ ] Cloud Scheduler

## Project Configuration
- **Recommended Project ID:** `samatat-theatre-archive`
- **Region:** `asia-south1` (Mumbai) or `asia-southeast1` (Singapore) [Recommended for latency if based in South Asia]

## Firebase CLI Init Command
Run this command in your local terminal to initialize the project with the selected features. Make sure you have the Firebase CLI installed (`npm install -g firebase-tools`) and are logged in (`firebase login`).

```bash
firebase init firestore functions hosting storage emulators
```

*Note: You will be prompted to select the project ID and configure specific details for each feature.*

## GitHub Actions Workflow
A sample GitHub Actions workflow has been created at `.github/workflows/firebase-hosting-merge.yml`. 

**Next Steps for CI/CD:**
1. Create a Firebase Service Account key in the Google Cloud Console.
2. Add the JSON key as a GitHub Secret named `FIREBASE_SERVICE_ACCOUNT_SAMATAT_THEATRE_ARCHIVE`.
3. (Optional) Uncomment the build step in the workflow file if/when you add a build process (e.g., for a React or Vue app).

## Data Model
A comprehensive Firestore data model with sample documents has been generated in `DATA_MODEL.md`.
