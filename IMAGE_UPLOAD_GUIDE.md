# Image Upload Guide for Samatat Theatre Archive

This guide explains how to add photos to the website, particularly for the dynamic hero collage.

## Quick Start: Adding Photos to Hero Collage

### Step 1: Prepare Your Images
- **Format**: JPG or PNG (JPG recommended for photos)
- **Size**: Square images work best (e.g., 800x800px, 1000x1000px)
- **Optimization**: Compress images to under 200KB each for fast loading
- **Naming**: Use descriptive names like `ebong-indrajit-scene1.jpg`

### Step 2: Upload Images
Place your images in:
```
public/public/images/productions/
```

### Step 3: Register Images in Code
Edit the file `public/app/components/HeroCollage.tsx` and add your image paths:

```typescript
const productionPhotos: string[] = [
  '/images/productions/ebong-indrajit-1.jpg',
  '/images/productions/basanta-utsav-2024.jpg',
  '/images/productions/workshop-acting-1.jpg',
  '/images/productions/festival-2023-1.jpg',
  // Add more photos here...
];
```

### Step 4: Build and Deploy
```bash
cd public
npm run build
firebase deploy --only hosting
```

---

## Image Locations by Section

### Hero Collage
- **Location**: `/public/images/productions/`
- **Format**: Square JPG/PNG
- **Recommended**: 12-24 photos for variety
- **Size**: 800x800px to 1200x1200px

### Production Cards
- **Location**: `/public/images/productions/[year]/`
- **Format**: 16:10 aspect ratio
- **Size**: 1600x1000px recommended

### Festival Photos
- **Location**: `/public/images/festivals/[year]/`
- **Format**: Various aspect ratios
- **Size**: 1200px wide recommended

### Team/Alumni Photos
- **Location**: `/public/images/team/`
- **Format**: Square or 3:4 portrait
- **Size**: 400x400px or 400x533px

---

## Using Firebase Storage (Optional)

For larger media libraries, you can use Firebase Storage instead of static files.

### Setup Firebase Storage

1. Go to [Firebase Console](https://console.firebase.google.com/project/samatat-archive)
2. Navigate to **Build > Storage**
3. Click **Get Started** and follow setup
4. Set security rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    // Public read access for all images
    match /images/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Upload via Firebase Console

1. Go to Storage in Firebase Console
2. Create folders: `images/productions/`, `images/festivals/`, etc.
3. Upload images using the web interface
4. Copy the public URL for each image

### Upload via Command Line

```bash
# Install Firebase Tools if not installed
npm install -g firebase-tools

# Upload a folder
firebase storage:upload ./local-images --bucket gs://samatat-archive.appspot.com/images/
```

### Using Firebase Storage URLs in Code

Replace local paths with Firebase Storage URLs:

```typescript
const productionPhotos: string[] = [
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.appspot.com/o/images%2Fproductions%2Fphoto1.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/samatat-archive.appspot.com/o/images%2Fproductions%2Fphoto2.jpg?alt=media',
];
```

---

## Image Optimization Tips

### Online Tools
- [TinyPNG](https://tinypng.com/) - Compress PNG/JPG
- [Squoosh](https://squoosh.app/) - Advanced compression
- [Remove.bg](https://remove.bg/) - Remove backgrounds

### Recommended Sizes

| Location | Dimensions | Max File Size |
|----------|------------|---------------|
| Hero Collage | 800x800px | 150KB |
| Production Banner | 1600x1000px | 300KB |
| Card Thumbnails | 800x500px | 100KB |
| Team Photos | 400x400px | 50KB |
| Logo | 200x200px | 30KB |

### Batch Processing
Use ImageMagick to batch resize:

```bash
# Resize all images in folder to 800x800 square
mogrify -resize 800x800^ -gravity center -extent 800x800 *.jpg

# Compress JPGs to 80% quality
mogrify -quality 80 *.jpg
```

---

## Troubleshooting

### Images Not Showing
1. Check file path is correct (case-sensitive)
2. Ensure image is in `/public/public/images/` directory
3. Rebuild: `npm run build`
4. Clear browser cache

### Images Loading Slowly
1. Compress images using TinyPNG
2. Reduce dimensions
3. Convert PNG to JPG for photos
4. Use WebP format for modern browsers

### Build Errors
1. Check image paths don't have spaces
2. Use forward slashes `/` not backslashes
3. Don't include `/public` prefix in paths

---

## Sample Photo List

Here's a suggested list of photos to collect:

### Productions (12-20 photos)
- [ ] Ebong Indrajit - multiple scenes
- [ ] Arshi Desh - key moments
- [ ] Recent productions 2023-2024
- [ ] Rehearsal photos
- [ ] Backstage moments

### Festivals (8-12 photos)
- [ ] Festival stage setups
- [ ] Audience shots
- [ ] Award ceremonies
- [ ] Guest performances

### Workshops (6-10 photos)
- [ ] Acting workshops
- [ ] Voice training sessions
- [ ] Movement classes
- [ ] Group activities

### Cultural Events (6-10 photos)
- [ ] Basanta Utsav celebrations
- [ ] Rabindra Jayanti performances
- [ ] Bhasha Dibos events
- [ ] Film festival screenings

---

## Need Help?

For technical assistance with image uploads:
1. Check this guide first
2. Review Firebase documentation
3. Contact the development team
