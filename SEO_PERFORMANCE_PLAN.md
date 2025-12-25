# SEO & Performance Plan

This document outlines the strategy for maximizing search visibility and performance for the Samatat Theatre Archive.

## 1. SEO Strategy

### Meta Templates (Next.js App Router)
We will utilize the Next.js `generateMetadata` API to dynamically populate tags based on Firestore content.

**Standard Template:**
*   **Title:** `{Content Title} | Samatat Theatre Archive`
*   **Description:** `{Summary/Synopsis} (truncated to 160 chars)`
*   **OG Image:** `{Hero Image URL}` (Fallback to site logo)
*   **Twitter Card:** `summary_large_image`

### Schema.org JSON-LD
Structured data helps search engines understand the content context.

*   **Global (Organization):** On Homepage.
*   **Production (CreativeWork + Event):** On Production pages (`/shows/[slug]`).
*   **BreadcrumbList:** On all nested pages.

### Sitemap & Robots
*   **`sitemap.xml`**: Generated dynamically via a Cloud Function to ensure new content is indexed immediately without rebuilding the site.
*   **`robots.txt`**: Static file allowing all agents but disallowing `/admin` and API routes.

## 2. Performance Strategy

### Images
*   **Cloud Processing**: The existing `processMediaUpload` function already generates `WebP` variants and resized thumbnails.
*   **Frontend**: Use Next.js `<Image>` component with `loader` pointing to Firebase Storage or the generated `media` document URLs.
    *   *Lazy Loading*: Enabled by default.
    *   *Sizes*: `<Image sizes="(max-width: 768px) 100vw, 50vw" ... />`

### Caching (`firebase.json`)
Configure Firebase Hosting to cache static assets aggressively and dynamic content appropriately.

```json
"hosting": {
  "headers": [
    {
      "source": "**/*.@(jpg|jpeg|gif|png|webp|css|js)",
      "headers": [{ "key": "Cache-Control", "value": "max-age=31536000, immutable" }]
    },
    {
      "source": "**",
      "headers": [{ "key": "Cache-Control", "value": "public, max-age=3600, s-maxage=7200" }]
    }
  ]
}
```

## 3. Implementation Snippets

### A. Next.js Metadata & JSON-LD (Production Page)
Place in `public/app/shows/[slug]/page.tsx`.

```tsx
import { Metadata } from 'next';
import { getProductionBySlug } from '@/lib/firestore'; // Helper function

// 1. Dynamic Metadata
export async function generateMetadata({ params }): Promise<Metadata> {
  const production = await getProductionBySlug(params.slug);
  if (!production) return { title: 'Not Found' };

  const images = production.mediaRefs?.[0] ? [production.mediaRefs[0]] : [];

  return {
    title: `${production.title} | Samatat Theatre Archive`,
    description: production.synopsis.substring(0, 160),
    openGraph: {
      title: production.title,
      description: production.synopsis,
      url: `https://samatat.org/shows/${params.slug}`,
      siteName: 'Samatat Theatre Archive',
      images: images,
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: production.title,
      description: production.synopsis.substring(0, 160),
      images: images,
    },
  };
}

// 2. Page Component with JSON-LD
export default async function ProductionPage({ params }) {
  const production = await getProductionBySlug(params.slug);
  
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TheaterEvent',
    name: production.title,
    startDate: `${production.year}-01-01`, // Fallback if no specific date
    location: {
      '@type': 'Place',
      name: 'Samatat Theatre Hall', // Default or specific
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dhaka',
        addressCountry: 'BD'
      }
    },
    image: production.mediaRefs,
    description: production.synopsis,
    performer: {
      '@type': 'PerformingGroup',
      name: 'Samatat Theatre'
    },
    offers: {
      '@type': 'Offer',
      url: `https://samatat.org/shows/${params.slug}`,
      availability: 'https://schema.org/InStock'
    }
  };

  return (
    <section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>{production.title}</h1>
      {/* ... rest of the UI ... */}
    </section>
  );
}
```

### B. Sitemap Generator (Cloud Function)
Add to `functions/index.js`. Maps to `/sitemap.xml`.

```javascript
const { onRequest } = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
// admin.initializeApp() is already called in index.js

exports.sitemap = onRequest({ timeoutSeconds: 60 }, async (req, res) => {
    const db = admin.firestore();
    const baseUrl = 'https://samatat-theatre-archive.web.app'; // or custom domain
    
    // Define priority pages
    const staticRoutes = [
        { url: '/', changefreq: 'daily', priority: 1.0 },
        { url: '/about', changefreq: 'monthly', priority: 0.8 },
        { url: '/contact', changefreq: 'yearly', priority: 0.5 },
        { url: '/archive', changefreq: 'weekly', priority: 0.9 },
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // 1. Add Static Routes
    staticRoutes.forEach(route => {
        xml += `
        <url>
            <loc>${baseUrl}${route.url}</loc>
            <changefreq>${route.changefreq}</changefreq>
            <priority>${route.priority}</priority>
        </url>`;
    });

    // 2. Add Dynamic Routes (Productions)
    const productionsSnap = await db.collection('productions').where('published', '==', true).get();
    productionsSnap.forEach(doc => {
        const data = doc.data();
        const slug = data.slug || doc.id; // Fallback to ID if no slug
        xml += `
        <url>
            <loc>${baseUrl}/shows/${slug}</loc>
            <lastmod>${data.updatedAt ? data.updatedAt.toDate().toISOString() : new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.8</priority>
        </url>`;
    });

    // 3. Add Dynamic Routes (Festivals)
    const festivalsSnap = await db.collection('festivals').where('published', '==', true).get();
    festivalsSnap.forEach(doc => {
        const data = doc.data();
        // Assuming festivals are routed by Year
        xml += `
        <url>
            <loc>${baseUrl}/festivals/${data.year}</loc>
            <changefreq>yearly</changefreq>
            <priority>0.7</priority>
        </url>`;
    });

    // 4. Add Dynamic Routes (Pages - Dynamic Content)
    const pagesSnap = await db.collection('pages').where('published', '==', true).get();
    pagesSnap.forEach(doc => {
        const data = doc.data();
        xml += `
        <url>
            <loc>${baseUrl}/${data.slug}</loc>
            <lastmod>${data.updatedAt ? data.updatedAt.toDate().toISOString() : new Date().toISOString()}</lastmod>
            <changefreq>monthly</changefreq>
            <priority>0.6</priority>
        </url>`;
    });

    xml += '</urlset>';

    res.set('Content-Type', 'application/xml');
    res.set('Cache-Control', 'public, max-age=3600, s-maxage=7200'); // Cache for 1-2 hours
    res.status(200).send(xml);
});
```

### Configuration (firebase.json)
Map the function to the URL.

```json
{
  "hosting": {
    "rewrites": [
      {
        "source": "/sitemap.xml",
        "function": "sitemap"
      },
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```
