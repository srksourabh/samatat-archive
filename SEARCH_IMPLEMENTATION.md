# Search Implementation Plan (Algolia)

## 1. Index Schema & Configuration

We will use a single Algolia index named `samatat_archive` to allow global search across different content types. A `type` attribute will distinguish the records.

### Attributes
| Attribute | Description | Searchable | Facetable |
| :--- | :--- | :---: | :---: |
| `objectID` | Firestore Document ID | ❌ | ❌ |
| `type` | production, festival, workshop, media | ❌ | ✅ |
| `title` | Main title | ✅ (Priority 1) | ❌ |
| `year` | Year of event/release | ❌ | ✅ |
| `description` | Synopsis, bio, or summary | ✅ (Priority 2) | ❌ |
| `content` | Full markdown text (truncated) | ✅ (Priority 3) | ❌ |
| `tags` | Keywords | ✅ | ✅ |
| `credits` | Names of cast/crew | ✅ | ❌ |
| `language` | Bengali, English | ❌ | ✅ |
| `path` | URL slug/path for frontend routing | ❌ | ❌ |
| `thumbnail`| Image URL for search result | ❌ | ❌ |

### Settings (Algolia Dashboard or API)
*   **Searchable Attributes**: `title`, `tags`, `credits`, `description`, `content`.
*   **Attributes for Faceting**: `type`, `year`, `language`, `tags`.
*   **Ranking**: Default (Typo > Geo > Words > Filters > Proximity > Attribute > Exact).

## 2. Cloud Function for Syncing

Add this to your `functions/index.js` (or a separate `search.js` module).

```javascript
// functions/index.js (Additions)
const algoliasearch = require("algoliasearch");
const { onDocumentWritten } = require("firebase-functions/v2/firestore");

// Initialize Algolia
// Set these via: firebase functions:config:set algolia.app_id="YOUR_ID" algolia.api_key="YOUR_ADMIN_KEY"
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID; 
const ALGOLIA_API_KEY = process.env.ALGOLIA_API_KEY;
const algoliaClient = algoliasearch(ALGOLIA_APP_ID, ALGOLIA_API_KEY);
const index = algoliaClient.initIndex("samatat_archive");

/**
 * Sync Firestore writes to Algolia
 * Target collections: productions, festivals, workshops, pages
 */
exports.onEntityWrite = onDocumentWritten(
    "/{collection}/{docId}",
    async (event) => {
        const collection = event.params.collection;
        const docId = event.params.docId;
        const COLLECTIONS_TO_INDEX = ["productions", "festivals", "workshops", "pages"];

        if (!COLLECTIONS_TO_INDEX.includes(collection)) return;

        // Document Deleted
        if (!event.data.after.exists) {
            await index.deleteObject(docId);
            return;
        }

        const data = event.data.after.data();

        // Only index published content
        if (data.published === false) {
             await index.deleteObject(docId); // Remove if unpublished
             return;
        }

        // Transform Data for Indexing
        const record = {
            objectID: docId,
            type: collection.slice(0, -1), // "productions" -> "production"
            title: data.title,
            year: data.year, // Ensure this exists for sorting/filtering
            description: data.synopsis || data.summary || data.description || "",
            // Truncate long content to stay within record limits (10KB free)
            content: (data.content_markdown || "").substring(0, 5000), 
            tags: data.tags || [],
            credits: (data.credits || []).map(c => c.name),
            language: data.language,
            path: `/${collection}/${data.slug || docId}`,
            thumbnail: data.hero_media_ref || null // Ideally resolve this to a public URL
        };

        await index.saveObject(record);
    }
);
```

## 3. Frontend Search Component (React + React InstantSearch)

Install dependencies:
```bash
npm install algoliasearch react-instantsearch-core react-instantsearch-dom
```

### `components/GlobalSearch.jsx`

```jsx
import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  RefinementList,
  Highlight,
  Pagination,
  Configure
} from 'react-instantsearch-dom';

const searchClient = algoliasearch('YOUR_APP_ID', 'YOUR_SEARCH_API_KEY');

const Hit = ({ hit }) => {
  const getCitation = () => {
     // Simple MLA format generator
     const citation = `${hit.title}. (${hit.year || 'n.d.'}). Samatat Theatre Archive. Retrieved from https://samatat.org${hit.path}`;
     navigator.clipboard.writeText(citation);
     alert("Citation copied to clipboard!");
  };

  return (
    <article className="border p-4 mb-2 rounded shadow-sm hover:shadow-md transition">
      <div className="flex justify-between">
         <span className="text-xs font-bold uppercase text-gray-500 bg-gray-100 px-2 py-1 rounded">
            {hit.type}
         </span>
         <span className="text-sm text-gray-500">{hit.year}</span>
      </div>
      
      <a href={hit.path} className="block mt-2">
        <h3 className="text-lg font-bold text-blue-600">
            <Highlight attribute="title" hit={hit} />
        </h3>
        <p className="text-sm text-gray-700 mt-1 line-clamp-2">
            <Highlight attribute="description" hit={hit} />
        </p>
      </a>

      <div className="mt-3 flex gap-2">
        {hit.tags && hit.tags.map(tag => (
           <span key={tag} className="text-xs bg-blue-50 text-blue-800 px-2 py-0.5 rounded-full">#{tag}</span>
        ))}
      </div>
      
      <button 
        onClick={getCitation}
        className="text-xs mt-3 text-gray-400 hover:text-black underline"
      >
        Cite This
      </button>
    </article>
  );
};

const GlobalSearch = () => (
  <div className="container mx-auto p-4">
    <InstantSearch searchClient={searchClient} indexName="samatat_archive">
      <Configure hitsPerPage={8} />
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <aside className="md:col-span-1 space-y-6">
          <div>
            <h4 className="font-bold mb-2">Category</h4>
            <RefinementList attribute="type" />
          </div>
          <div>
            <h4 className="font-bold mb-2">Year</h4>
            <RefinementList attribute="year" limit={5} showMore />
          </div>
          <div>
            <h4 className="font-bold mb-2">Language</h4>
            <RefinementList attribute="language" />
          </div>
        </aside>

        {/* Main Results */}
        <main className="md:col-span-3">
          <SearchBox 
             className="mb-6"
             translations={{ placeholder: 'Search archive, productions, people...' }}
          />
          <Hits hitComponent={Hit} />
          <div className="mt-6 flex justify-center">
             <Pagination />
          </div>
        </main>
      </div>
    </InstantSearch>
  </div>
);

export default GlobalSearch;
```

### UI Integration Suggestions
1.  **Navbar**: Add a magnifying glass icon that opens a Modal containing the `SearchBox` and a simplified `Hits` list (top 5 results).
2.  **Archive Page**: Use the full `GlobalSearch` component with the sidebar filters enabled for deep research.
3.  **Date Faceting**: Since `year` is numerical, you can also use `<RangeInput attribute="year" />` for a slider UI if preferred.
