# Photo Upload Guide

## Directory Structure

Photos should be organized in the following structure:

```
public/public/images/
├── productions/
│   ├── 2024/
│   ├── 2023/
│   ├── 2022/
│   ├── 2021/
│   └── 2020/
└── festivals/
    ├── 2024/
    ├── 2023/
    ├── 2022/
    ├── 2021/
    └── 2020/
```

## How to Upload Photos

### Option 1: Via Firebase Storage (Recommended)
1. Go to Firebase Console: https://console.firebase.google.com/project/samatat-archive/storage
2. Navigate to the Storage section
3. Create folders: `productions/YEAR` and `festivals/YEAR`
4. Upload photos to respective year folders
5. Update the production/festival data in Firestore with image URLs

### Option 2: Via Git (For development)
1. Place photos in the appropriate year folder:
   - Productions: `public/public/images/productions/2024/`
   - Festivals: `public/public/images/festivals/2024/`
2. Commit and push to GitHub
3. Rebuild and deploy the site

## File Naming Convention

Use descriptive names:
- Productions: `production-name-scene-01.jpg`
- Festivals: `festival-2024-day1-performance-01.jpg`

## Recommended Image Specs

- Format: JPG or WebP
- Max size: 2MB per image
- Dimensions: 1920x1080px (or smaller)
- Optimize images before uploading for better performance

## Displaying Photos on Website

Photos will be automatically displayed on:
- `/shows` - Production photos organized by year
- `/festivals` - Festival photos organized by year
- `/archive` - All photos with search/filter capabilities
