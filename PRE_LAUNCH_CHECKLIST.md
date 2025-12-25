# Pre-Launch Checklist & Automated Testing Strategy

## 1. Launch Criteria Checklist

### Performance & Core Vitals
- [ ] **Lighthouse Score**: >= 90 on Performance, Accessibility, Best Practices, and SEO (Mobile & Desktop).
- [ ] **First Contentful Paint (FCP)**: < 1.8s.
- [ ] **Largest Contentful Paint (LCP)**: < 2.5s.
- [ ] **Cumulative Layout Shift (CLS)**: < 0.1.
- [ ] **Image Optimization**: All images use `next/image` or have `webp` variants with explicit dimensions.

### Functional Testing
- [ ] **Booking Flow**: Complete a purchase from Home -> Seat Selection -> Mock Payment -> Confirmation Page.
- [ ] **Forms**: Contact form and Newsletter signup handle errors (empty fields, invalid email) gracefully.
- [ ] **Search**: Global search returns relevant results for "production", "year", and "people".
- [ ] **Responsiveness**: Verified on:
    - [ ] Mobile (iPhone SE/12, Pixel 5)
    - [ ] Tablet (iPad Air)
    - [ ] Desktop (13" and 24" screens)

### Accessibility & Compatibility
- [ ] **Automated Audit**: `axe-core` finds 0 critical/serious issues.
- [ ] **Keyboard Nav**: Full site navigability using `Tab`, `Enter`, `Space`, `Esc` (especially Modals).
- [ ] **Screen Reader**: "Book Now" buttons and Images have descriptive text/alt tags.
- [ ] **Browsers**: Chrome, Firefox, Safari (macOS/iOS), Edge.

### SEO & Analytics
- [ ] **Metadata**: Unique `title` and `description` for every page.
- [ ] **Social**: OpenGraph and Twitter Cards render correctly (test with [Meta Sharing Debugger](https://developers.facebook.com/tools/debug/)).
- [ ] **Sitemap**: `/sitemap.xml` exists and lists all productions/pages.
- [ ] **Robots**: `robots.txt` allows indexing of public pages.
- [ ] **Events**: GA4 DebugView shows `purchase`, `view_item`, and `sign_up` events firing.

### Operational
- [ ] **Backups**: Verified Firestore Managed Export is scheduled.
- [ ] **Security**: Firestore/Storage rules enabled (no `allow read/write: if true` in production).

---

## 2. GitHub Actions Workflow (`.github/workflows/quality-check.yml`)

This workflow runs on every Pull Request to `main`.

```yaml
name: Quality & Testing
on:
  pull_request:
    branches: [ main ]

jobs:
  test_and_audit:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./public  # Assumes Next.js app is here

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: 'npm'
          cache-dependency-path: ./public/package-lock.json

      - name: Install Dependencies
        run: npm ci

      - name: Build App
        run: npm run build

      # 1. End-to-End Testing (Cypress)
      - name: Run Cypress E2E Tests
        uses: cypress-io/github-action@v6
        with:
          working-directory: ./public
          start: npm start
          wait-on: 'http://localhost:3000'
          browser: chrome
          # Record to Cypress Cloud (Optional, requires ID)
          # record: true 
        env:
          # Use Firebase Emulator or Mock Auth
          NEXT_PUBLIC_FIREBASE_API_KEY: "mock-key" 

      # 2. Lighthouse Performance & SEO Check
      - name: Lighthouse CI Audit
        uses: treosh/lighthouse-ci-action@v10
        with:
          urls: |
            http://localhost:3000/
            http://localhost:3000/about
          budgetPath: ./.github/lighthouse-budget.json
          uploadArtifacts: true
          temporaryPublicStorage: true

      # 3. Accessibility Check (Axe)
      # Note: Often covered by Lighthouse, but dedicated scan is clearer
      - name: Install & Run Axe CLI
        run: |
          npm install -g @axe-core/cli
          # Wait for server if not using Cypress action's server
          npx axe http://localhost:3000 --tags wcag2a,wcag2aa
```

---

## 3. Cypress Test Snippet (`cypress/e2e/booking.cy.js`)

Place this in your `public/cypress/e2e` folder.

```javascript
describe('Ticket Booking Flow', () => {
  beforeEach(() => {
    // Visit home or specific production page
    cy.visit('/shows/the-first-dawn');
  });

  it('allows a user to select seats and checkout', () => {
    // 1. Click Book Now
    cy.contains('button', 'Book Now').click();

    // 2. Interact with Seat Map (Mocked)
    cy.get('[data-testid="seat-A1"]').click();
    cy.get('[data-testid="seat-A2"]').click();
    cy.contains('Confirm Selection').click();

    // 3. Verify Cart/Checkout Modal
    cy.contains('2 Tickets selected');
    cy.contains('Proceed to Pay').click();

    // 4. Fill Guest Details (if implemented)
    cy.get('input[name="email"]').type('test@example.com');
    cy.contains('Continue').click();

    // 5. Mock Payment Success (Intercept Stripe/API)
    // Assuming backend returns success URL or state update
    cy.intercept('POST', '/api/create-checkout-session', {
      statusCode: 200,
      body: { url: '/success?orderId=123' }
    }).as('checkout');
    
    // 6. Verify Redirect
    cy.url().should('include', '/success');
    cy.contains('Booking Confirmed');
  });
});
```

## 4. Lighthouse Budget (`.github/lighthouse-budget.json`)

```json
[
  {
    "path": "/*",
    "timings": [
      {
        "metric": "interactive",
        "budget": 3000
      },
      {
        "metric": "first-contentful-paint",
        "budget": 2000
      }
    ],
    "resourceSizes": [
      {
        "resourceType": "script",
        "budget": 300
      },
      {
        "resourceType": "total",
        "budget": 1000
      }
    ],
    "resourceCounts": [
      {
        "resourceType": "third-party",
        "budget": 10
      }
    ]
  }
]
```
