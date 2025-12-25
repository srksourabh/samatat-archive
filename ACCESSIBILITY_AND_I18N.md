# Accessibility (a11y) & Localization (i18n) Plan

## 1. Remediation & Implementation Plan

### A. WCAG 2.1 AA Compliance

#### 1. Structure & Navigation
*   **Semantic HTML**: Enforce usage of `<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`, and `<aside>` in `MainLayout` and page templates.
*   **Skip-to-Content**: Implement a hidden link at the top of the body that becomes visible on focus, jumping to `<main id="content">`.
    *   *Task*: Create `SkipLink.tsx` component.
*   **Focus Order**: Ensure logical tab order. Custom modals (like the "Team Bio" modal) must trap focus within the modal when open and return focus to the trigger element on close.

#### 2. Interactive Elements
*   **Keyboard Navigation**:
    *   **VideoSlider**: Must support Arrow Left/Right to change slides.
    *   **TimelineView**: Ensure timeline entries are focusable.
    *   **Dropdowns/Menus**: Support `Escape` to close.
*   **ARIA Labels**:
    *   Add `aria-label="Search"` to the magnifying glass icon.
    *   Add `aria-label="Open Menu"` to the mobile hamburger button.
    *   Add `aria-label="Book tickets for {production_name}"` to "Book Now" buttons.
*   **Forms**:
    *   Associate labels with inputs using `htmlFor` / `id`.
    *   Use `aria-describedby` for error messages (e.g., "Email is required").

#### 3. Visual Design
*   **Color Contrast**:
    *   Verify primary brand colors against white backgrounds. Ensure ratio >= 4.5:1 for normal text.
    *   *Action*: Check Tailwind colors. If `blue-500` is too light on white, use `blue-600` or `blue-700`.
*   **Resizable Text**: Use relative units (`rem`, `em`) for all font sizes and container widths. Avoid fixed `px` heights for text containers.

### B. Localization (Bengali & English)

#### 1. Technical Setup (Next.js)
*   **Library**: Use `next-intl` for App Router support.
*   **Routing**: `/en/...` and `/bn/...`.
*   **Font**: Load `Noto Sans Bengali` via `next/font/google` for the Bengali locale.

#### 2. Content & Formatting
*   **Translations**: Store strings in `messages/en.json` and `messages/bn.json`.
*   **Dates**: Use `Intl.DateTimeFormat` with `timeZone: 'Asia/Kolkata'`.
    *   *Example*: `new Intl.DateTimeFormat('bn-BD', { dateStyle: 'long', timeZone: 'Asia/Kolkata' }).format(date)`
*   **Numbers**: Localize digit display for Bengali (e.g., 123 -> ddd).

### C. Mobile-First Booking Flow (< 3 Taps)

To ensure the fastest path to conversion:
1.  **Tap 1 (Home)**: "Book Now" sticky FAB (Floating Action Button) or prominent Hero button for the *current* active production.
2.  **Tap 2 (Production/Seat)**: Opens directly to the **Seat Selection** modal/drawer (skip full synopsis page if coming from "Book Now" intent).
3.  **Tap 3 (Checkout)**: "Pay with GPay/Card" button.

*Optimization*: Guest Checkout (no forced login) for Ticket purchase.

## 2. Implementation Tasks

### 1. Install & Config
```bash
npm install next-intl aria-query
```
*   Config `next.config.js` for i18n routing.
*   Config `tailwind.config.ts` for semantic colors (e.g., `text-primary`, `bg-surface`).

### 2. Components
*   **`LanguageSwitcher.tsx`**: Dropdown to toggle path prefix (`/en` <-> `/bn`).
*   **`A11yAnnouncer.tsx`**: A generic `aria-live` region component for routing changes or dynamic updates (e.g., "Filter applied").

### 3. Date Helper
```typescript
// lib/formatDate.ts
export const formatDate = (date: Date, locale: string = 'en') => {
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'Asia/Kolkata'
  }).format(date);
};
```

## 3. Accessibility Test Script

### A. Automated Audit (Lighthouse CI)
Run this as part of the GitHub Actions workflow.

```yaml
# .github/workflows/accessibility.yml
name: A11y Check
on: [pull_request]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Audit URLs using Lighthouse
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:3000/
            http://localhost:3000/shows
          budgetPath: ./lighthouse-budget.json
          uploadArtifacts: true
```

### B. Manual Test Matrix

| Component | Test Action | Expected Outcome | Pass/Fail |
| :--- | :--- | :--- | :---: |
| **Global** | Press `Tab` immediately after load | "Skip to Content" link appears and is focused. | |
| **Navigation** | Use `Tab` key through menu | Focus moves logically left-to-right. Dropdowns open on `Enter`. | |
| **Images** | Inspect `img` tags in DevTools | All relevant images have `alt` text. Decorative icons have `aria-hidden="true"`. | |
| **Zoom** | Browser Zoom to 200% | No horizontal scrollbar. Text does not overlap. | |
| **Screen Reader** | Navigate "Upcoming Shows" with VoiceOver/NVDA | Production titles are headings (H2/H3). "Book" buttons announce context ("Book tickets for X"). | |
| **Booking** | Submit empty form | Focus moves to first error field. Error is announced. | |
| **Language** | Switch to Bengali | Text updates. Date format changes (e.g., "12 March" -> "१२ মার্চ"). | |
| **Contrast** | Test primary button color | Ratio is at least 4.5:1 against background. | |

### C. Developer Checklist (Pre-Commit)
- [ ] Used semantic HTML tags?
- [ ] Added `alt` text to images?
- [ ] Interactive elements are keyboard accessible?
- [ ] Color contrast passes AA?
- [ ] Text strings are wrapped in `t()` translation function?
