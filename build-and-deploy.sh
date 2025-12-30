#!/bin/bash
set -e # Exit on error

echo "🚀 Starting Build & Deploy Process..."

# 1. Navigate to the Next.js app directory
cd public

# 2. Clean install dependencies
echo "📦 Installing dependencies in public/..."
npm install --legacy-peer-deps

# 3. Build the static site
echo "🏗️ Building Next.js project..."
npm run build

# 4. Return to root
cd ..

# 5. Deploy to Firebase
echo "🔥 Deploying to Firebase Hosting..."
# Check if firebase-tools is installed globally, otherwise use npx
if command -v firebase &> /dev/null; then
    firebase deploy --only hosting
else
    echo "⚠️ 'firebase' command not found. Using 'npx firebase-tools'..."
    npx firebase-tools deploy --only hosting
fi

echo "✅ Deployment Complete!"
