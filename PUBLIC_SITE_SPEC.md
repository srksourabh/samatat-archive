# Public Site Specification (Next.js + Firebase Hosting)

This document outlines the frontend architecture, route structure, and component breakdown for the public-facing "Samatat Theatre Archive" website.

**Recommended Stack:**
*   **Framework:** Next.js 14 (App Router) - Excellent for SEO (critical for an archive) and static generation.
*   **Styling:** Tailwind CSS - For rapid, responsive development.
*   **Data Fetching:** Firebase Client SDK (Firestore) + ISR (Incremental Static Regeneration) for performance.

## 1. Route Map (Next.js App Router)

| Route Path | Page Component | Description | Data Strategy |
| :--- | :--- | :--- | :--- |
| `/` | `app/page.tsx` | Homepage: Hero, Upcoming, CTAs. | ISR (Revalidate 1h) |
| `/about` | `app/about/page.tsx` | History, Vision, Team, Alumni. | Static |
| `/shows` | `app/shows/page.tsx` | Grid of all productions (Current & Past). | ISR (Revalidate 1h) |
| `/shows/[slug]` | `app/shows/[slug]/page.tsx` | Production details, gallery, reviews. | ISR (Revalidate 1h) |
| `/festivals` | `app/festivals/page.tsx` | List of festivals by year. | Static |
| `/festivals/[year]`| `app/festivals/[year]/page.tsx` | Festival specific details. | Static |
| `/archive` | `app/archive/page.tsx` | Searchable/Filterable timeline. | Client-side Fetching (Search) |
| `/workshops` | `app/workshops/page.tsx` | List of workshops & registration. | ISR (Revalidate 1d) |
| `/impact` | `app/impact/page.tsx` | Social metrics & reports. | Static |
| `/statutory` | `app/statutory/page.tsx` | Legal, Committees, AGM Minutes. | Static |
| `/contact` | `app/contact/page.tsx` | Form & Map. | Static |

## 2. Component List

### A. Layout & Core (Global)
*   **`MainLayout`**: Wrapper component containing Header and Footer.
*   **`Header`**: Persistent top navigation.
    *   **`NavMenu`**: Responsive menu (Hamburger on mobile).
    *   **`Logo`**: Samatat branding.
*   **`Footer`**: Site map, social links, copyright, newsletter signup.
*   **`SEOHead`**: Reusable component for `<meta>` tags (OpenGraph, Twitter Cards).

### B. Shared / UI Components
*   **`HeroSection`**: Configurable hero banner (Image/Video background, Title, Subtitle).
*   **`SectionTitle`**: Consistent typography for section headers.
*   **`Button`**: Primary (Donate/Buy Tickets), Secondary (Learn More), Ghost.
*   **`Card`**:
    *   **`ProductionCard`**: Image, Title, Year, "Book Now" badge if current.
    *   **`NewsCard`**: Thumbnail, Date, Headline, Summary.
*   **`MediaGallery`**: Masonry or Grid layout for images with Lightbox support.
*   **`VideoPlayer`**: Wrapper for standard video or embedded YouTube/Vimeo.
*   **`WhatsAppButton`**: Floating or inline button initiating WhatsApp chat.

### C. Feature-Specific Components

#### 1. Home Page
*   **`VideoSlider`**: Full-screen hero slider for featured productions.
*   **`UpcomingHighlights`**: Horizontal scroll or grid of nearest shows/festivals.
*   **`CTABlock`**: Modular component for "Donate" and "Become a Member" sections.
*   **`LatestNewsFeed`**: Top 3 recent news items.

#### 2. About Page
*   **`HistoryTimeline`**: Vertical timeline component showing 26 years of milestones.
*   **`MessageBlock`**: Layout for President/Secretary messages (Photo + Quote + Text).
*   **`TeamGrid`**: Grid of team member profiles (Headshot + Role + Bio modal).
*   **`AlumniSlider`**: Carousel of success stories.

#### 3. Shows / Productions
*   **`ProductionHeader`**: Large cover image, title, season, synopsis.
*   **`CreditsList`**: Two-column layout for Cast and Crew.
*   **`TicketWidget`**: Integration with ticketing system or simple external link.
*   **`ReviewsSection`**: List of press/audience testimonials.

#### 4. Archive Page
*   **`ArchiveSearch`**: Search bar with debounced input.
*   **`FilterSidebar`**: Checkboxes for Year, Type (Prod, Fest, Workshop), Tags.
*   **`TimelineView`**: Visualization of entries on a chronological axis.
*   **`CitationGenerator`**: Button that copies a formatted citation (APA/MLA) for the current view/entry.

#### 5. Impact & Statutory
*   **`MetricCounter`**: Animated number counter (e.g., "50+ Workshops").
*   **`DownloadList`**: List of PDFs (Annual Reports, Minutes) with download icons and file sizes.

#### 6. Contact
*   **`ContactForm`**: Formik/React Hook Form implementation sending data to Cloud Functions/Firestore.
*   **`MapEmbed`**: Google Maps integration for the theatre/office location.

## 3. Accessibility & Best Practices

*   **Semantic HTML**: Use `<article>`, `<section>`, `<aside>`, `<nav>` correctly.
*   **Images**: All `<img>` tags must have dynamic `alt` text from Firestore.
*   **Keyboard Nav**: Ensure all interactive elements (especially the custom VideoSlider and Timeline) are focusable and usable via keyboard.
*   **ARIA**: Use `aria-label` for icon-only buttons (like Social Links or Search).
*   **Responsive**: Mobile-first Tailwind classes (e.g., `grid-cols-1 md:grid-cols-3`).
