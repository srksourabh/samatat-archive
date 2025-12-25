# Logo Upload Guide

## Where to Place Logo Files

Upload your logo files to:
```
public/public/images/branding/
```

## Required Logo Files

Please provide the following versions:

1. **logo.png** - Main color logo (transparent background)
   - Size: 400x100px recommended
   - Format: PNG with transparency

2. **logo-white.png** - White version for dark backgrounds
   - Size: 400x100px recommended
   - Format: PNG with transparency

3. **icon.png** - Square icon/favicon
   - Size: 512x512px
   - Format: PNG with transparency

4. **favicon.ico** - Browser favicon
   - Size: 32x32px
   - Format: ICO

## How to Upload

### Option 1: Via Git (Current Development)
1. Place files in: `/public/public/images/branding/`
2. Run: `git add public/public/images/branding/`
3. Run: `git commit -m "Add Samatat logos"`
4. Run: `git push origin main`
5. Rebuild and deploy

### Option 2: Via Firebase Storage
1. Go to Firebase Console: https://console.firebase.google.com/project/samatat-archive/storage
2. Create folder: `branding/`
3. Upload logo files
4. Get public URLs and update code

## After Upload

The logos will automatically appear in:
- Navigation header
- Footer
- Favicon (browser tab icon)
- Social media sharing cards

Once you upload the files, I'll integrate them throughout the site!
