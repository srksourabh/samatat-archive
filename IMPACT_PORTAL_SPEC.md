# Impact Portal & Grant Pack Generator Specification

## 1. Data Model (`impact_programs`)

This collection tracks social work initiatives to populate the Impact Portal and generate reports.

**Fields:**
- `title` (string): Program name (e.g., "Street Children Theatre Workshop").
- `year` (number): Execution year.
- `description` (string): Detailed narrative.
- `beneficiaries` (number): Direct count of people impacted.
- `volunteers_hours` (number): Total hours contributed by staff/volunteers.
- `outcomes` (array of strings): Key qualitative results (e.g., "Improved literacy", "Conflict resolution").
- `photos` (array of objects): `[{ url, caption, credit }]`.
- `reportsRef` (string): Storage path to the full internal report PDF.
- `financials` (object): `{ cost: number, funding_source: string }` (Private, for admin export only).
- `featured` (boolean): Highlight as a success story.

## 2. Admin UI: Grant Pack Generator

A specialized view in the Admin CMS for fundraising staff.

### UI Components
1.  **Program Selector Table**:
    *   List of `impact_programs` sorted by year.
    *   Checkboxes to select specific programs (Limit: 3 for "Success Stories").
    *   Columns: Title, Year, Beneficiaries, Featured?
2.  **Configuration Panel**:
    *   **Title Input**: Name of the grant application (e.g., "Arts Council 2024").
    *   **Include Financials**: Toggle switch to append financial summary table.
    *   **Include Images**: Toggle to append an image gallery page.
3.  **Action Area**:
    *   Button: "Generate PDF Pack".
    *   Status Indicator: "Generating..." -> "Download PDF" (Link).

### Admin Workflow
1.  User checks 3 high-impact programs.
2.  User toggles "Include Financials".
3.  User clicks "Generate".
4.  System calls `generateGrantPack` Cloud Function.
5.  System returns a URL to the generated PDF stored in a temporary bucket location.

## 3. Public Dashboard Widgets

Components for `/impact` page:

*   **`ImpactMetricsGrid`**:
    *   Fetches aggregate stats (calculated via aggregation query or stored in a `stats/impact` doc).
    *   Displays: "Lives Touched", "Workshops Held", "Districts Covered".
*   **`ProgramCard`**:
    *   Displays photo, title, beneficiary count, and a brief outcome summary.
*   **`GrantPackDownload`** (Optional/Protected):
    *   Public version of the "Annual Impact Report" (pre-generated).

## 4. Cloud Function: `generateGrantPack`

**Dependencies**: `puppeteer`, `handlebars` (for HTML templating).

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const puppeteer = require('puppeteer');
const handlebars = require('handlebars');
const path = require('path');
const os = require('os');
const fs = require('fs');

const db = admin.firestore();
const bucket = admin.storage().bucket();

// HTML Template (Simplified)
const htmlTemplate = `
<html>
<head>
  <style>
    body { font-family: 'Helvetica', sans-serif; padding: 40px; }
    h1 { color: #333; }
    .header { text-align: center; margin-bottom: 40px; }
    .metric-box { border: 1px solid #ddd; padding: 10px; display: inline-block; width: 30%; text-align: center; }
    .story { margin-bottom: 30px; page-break-inside: avoid; }
    .financials { margin-top: 50px; border-collapse: collapse; width: 100%; }
    .financials th, .financials td { border: 1px solid #ccc; padding: 8px; text-align: left; }
    .gallery img { width: 45%; margin: 2%; height: auto; }
  </style>
</head>
<body>
  <div class="header">
    <h1>Samatat Theatre Archive</h1>
    <h2>Impact Report: {{customTitle}}</h2>
    <p>Generated on {{date}}</p>
  </div>

  <div class="metrics">
    <h3>Overview</h3>
    <div class="metric-box">
      <strong>{{totalBeneficiaries}}</strong><br/>Beneficiaries
    </div>
    <div class="metric-box">
      <strong>{{totalHours}}</strong><br/>Volunteer Hours
    </div>
  </div>

  <h3>Success Stories</h3>
  {{#each programs}}
    <div class="story">
      <h4>{{title}} ({{year}})</h4>
      <p><strong>Impact:</strong> {{beneficiaries}} people reached.</p>
      <p>{{description}}</p>
      <ul>
        {{#each outcomes}}
          <li>{{this}}</li>
        {{/each}}
      </ul>
    </div>
  {{/each}}

  {{#if includeFinancials}}
    <h3>Financial Summary</h3>
    <table class="financials">
      <tr><th>Program</th><th>Cost</th><th>Source</th></tr>
      {{#each programs}}
      <tr>
        <td>{{title}}</td>
        <td>{{financials.cost}}</td>
        <td>{{financials.funding_source}}</td>
      </tr>
      {{/each}}
    </table>
  {{/if}}
</body>
</html>
`;

exports.generateGrantPack = functions.runWith({ memory: '2GB' }).https.onCall(async (data, context) => {
    // 1. Auth Check
    if (!context.auth || !context.auth.token.role) {
        throw new functions.https.HttpsError('permission-denied', 'Admins only.');
    }

    const { programIds, customTitle, includeFinancials } = data;

    // 2. Fetch Data
    const programs = [];
    let totalBeneficiaries = 0;
    let totalHours = 0;

    for (const id of programIds) {
        const doc = await db.collection('impact_programs').doc(id).get();
        if (doc.exists) {
            const p = doc.data();
            programs.push(p);
            totalBeneficiaries += (p.beneficiaries || 0);
            totalHours += (p.volunteers_hours || 0);
        }
    }

    // 3. Compile Template
    const template = handlebars.compile(htmlTemplate);
    const html = template({
        customTitle,
        date: new Date().toLocaleDateString(),
        programs,
        totalBeneficiaries,
        totalHours,
        includeFinancials
    });

    // 4. Generate PDF with Puppeteer
    const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setContent(html);
    const pdfBuffer = await page.pdf({ format: 'A4' });
    await browser.close();

    // 5. Upload to Storage
    const fileName = `grant_packs/Pack_${Date.now()}.pdf`;
    const file = bucket.file(fileName);
    await file.save(pdfBuffer, { contentType: 'application/pdf' });

    // 6. Get Signed URL (valid for 1 hour)
    const [url] = await file.getSignedUrl({
        action: 'read',
        expires: Date.now() + 1000 * 60 * 60
    });

    return { url };
});
```
