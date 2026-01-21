# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Samatat Sanskriti is a theatre collective website built with Next.js and deployed on Firebase. The site supports three languages: English (en), Bengali (bn), and Hindi (hi).

## Build and Development Commands

```bash
# Frontend development (from public/ directory)
cd public && npm run dev      # Start Next.js dev server at localhost:3000
cd public && npm run build    # Build static export to public/out/
cd public && npm run lint     # Run ESLint

# Full build and deploy (from root)
./build-and-deploy.sh         # Install deps, build, deploy to Firebase Hosting

# Firebase
firebase deploy --only hosting           # Deploy hosting only
firebase deploy --only functions         # Deploy Cloud Functions
firebase emulators:start                 # Start all emulators

# Functions (from functions/ directory)
cd functions && npm run lint  # Lint Cloud Functions
cd functions && npm run serve # Start functions emulator
```

## Architecture

### Directory Structure
- `public/` - Next.js frontend application (static export)
  - `public/app/` - Next.js App Router pages and components
  - `public/app/components/` - Shared React components
  - `public/app/lib/` - Firebase client, data files, locales
  - `public/lib/` - Content data (productions, translations)
  - `public/out/` - Built static files (deployed to Firebase)
- `functions/` - Firebase Cloud Functions (Node.js)
- Root level: Firebase config, rules, and documentation specs

### Key Patterns

**Static Export**: The site uses `output: 'export'` in next.config.ts. All pages are statically generated and served from Firebase Hosting.

**Multilingual Content**: Content objects use a consistent pattern with `en`, `bn`, `hi` properties:
```typescript
{
  title: { en: "English Title", bn: "বাংলা শিরোনাম", hi: "हिंदी शीर्षक" }
}
```
Translation keys are defined in `public/app/lib/locales.ts`.

**Data Files**: Large content datasets are stored as TypeScript files in `public/lib/` and `public/app/lib/`:
- `content.ts` - Home page content
- `productionsData.ts` - Theatre production data
- `festivalData.ts` - Festival information

**Firebase Integration**:
- Client SDK configured in `public/app/lib/firebase.ts`
- CMS-style CRUD helpers for Firestore collections
- Cloud Functions handle form submissions (contact, donations)

### Firebase Services
- **Hosting**: Serves static files from `public/out/`
- **Firestore**: Database for dynamic content and form submissions
- **Cloud Functions**: `submitContactForm`, `submitDonation`
- **Storage**: Images organized by type (images/, videos/, posters/)

## Configuration Files
- `firebase.json` - Firebase project config with emulator ports
- `firestore.rules` - Firestore security rules
- `storage.rules` - Storage security rules (role-based: admin, editor)
- `.firebaserc` - Project alias (default: samatat-archive)

## CI/CD
GitHub Actions workflow deploys to Firebase Hosting on push to `main` branch, followed by Lighthouse audit.
