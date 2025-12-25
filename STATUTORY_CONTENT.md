# Statutory Compliance & Legal Area

This document provides the page structures and legal copy required for Indian NGO compliance, covering public transparency and secure document handling.

## 1. Page Templates (Next.js)

### A. Public Statutory Page (`app/statutory/page.tsx`)
**Route**: `/statutory`
**Access**: Public

```tsx
import React from 'react';
import { DownloadIcon } from '@/components/icons';

export default function StatutoryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Statutory & Compliance</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Organization Details */}
        <div className="md:col-span-2 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Governing Body (2023-2025)</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-gray-100 text-left">
                    <th className="p-3 border">Name</th>
                    <th className="p-3 border">Role</th>
                    <th className="p-3 border">Occupation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border">Mr. Rahim Khan</td>
                    <td className="p-3 border">President</td>
                    <td className="p-3 border">Teacher</td>
                  </tr>
                  {/* Map through committee members */}
                </tbody>
              </table>
            </div>
            <div className="mt-4">
               <a href="/statutory/past-committees" className="text-blue-600 underline">View Previous Committees</a>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Legal Status</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Registration No:</strong> S-12345/1998 (Societies Registration Act, 1860)</li>
              <li><strong>NGO Darpan ID:</strong> WB/2020/000000</li>
              <li><strong>12A Registration:</strong> AAATS1234GE20214</li>
              <li><strong>80G Registration:</strong> AAATS1234GE20214 (Donations are tax-exempt)</li>
              <li><strong>FCRA Registration:</strong> 123456789 (If applicable)</li>
            </ul>
          </section>

          <section>
             <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Public Disclosures</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Downloadable Public Docs */}
                <DocCard title="Annual Report 2023-24" size="2.4 MB" link="/files/report-24.pdf" />
                <DocCard title="Audited Accounts 2023-24" size="1.1 MB" link="/files/audit-24.pdf" />
                <DocCard title="Constitution & Bylaws" size="500 KB" link="/files/constitution.pdf" />
             </div>
          </section>
        </div>

        {/* Right Column: Policies */}
        <aside className="bg-gray-50 p-6 rounded-lg h-fit">
          <h3 className="font-bold text-lg mb-4">Policies</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#privacy" className="text-blue-600 hover:underline">Privacy Policy</a></li>
            <li><a href="#terms" className="text-blue-600 hover:underline">Donation Terms</a></li>
            <li><a href="#child-protection" className="text-blue-600 hover:underline">Child Protection Policy</a></li>
            <li><a href="#sexual-harassment" className="text-blue-600 hover:underline">POSH Policy</a></li>
          </ul>
          
          <div className="mt-8 border-t pt-4">
             <h4 className="font-bold">Grievance Officer</h4>
             <p className="text-sm mt-1">Mr. S. Das</p>
             <p className="text-sm">compliance@samatat.org</p>
          </div>
        </aside>
      </div>
    </div>
  );
}

const DocCard = ({ title, size, link }) => (
  <a href={link} className="block border p-4 rounded hover:shadow-md transition bg-white flex justify-between items-center">
    <div>
      <div className="font-semibold text-gray-800">{title}</div>
      <div className="text-xs text-gray-500">PDF • {size}</div>
    </div>
    <DownloadIcon className="w-5 h-5 text-gray-400" />
  </a>
);
```

### B. Secure Documents Area (Admin Only)
**Access**: Gated by `AuthGuard` + `RoleGuard` (Admin)
**Storage Path**: `/minutes`, `/contracts` (See `storage.rules`)

*Implementation Note*: Do not expose these URLs directly. Use a Cloud Function to generate a short-lived Signed URL (e.g., valid for 15 mins) when an admin requests a download.

---

## 2. Legal Policy Text (Templates)

### A. Privacy Policy (India Context)
*Aligned with IT Act 2000 and DPDP Act principles.*

> **Privacy Policy**
> *Last Updated: [Date]*
>
> **1. Data Collection**
> Samatat Theatre ("we", "us") collects personal information (Name, Phone, Email, PAN, Address) only when you voluntarily provide it for:
> *   Ticket bookings.
> *   Donations (PAN is mandatory for 80G tax exemption certificates).
> *   Membership registration.
> *   Newsletter subscriptions.
>
> **2. Use of Information**
> We use your data to:
> *   Process transactions and issue receipts.
> *   Send event updates and newsletters (you may opt-out anytime).
> *   Comply with statutory authorities (Income Tax Dept, Ministry of Home Affairs).
>
> **3. Data Sharing**
> We **never** sell or rent your personal data. We share data only with:
> *   Payment Gateways (Razorpay/Stripe) for processing.
> *   Government authorities if legally required (e.g., filing Form 10BD for donations).
>
> **4. Data Security**
> Data is stored on secure cloud servers (Google Cloud Platform) with encryption. Access is restricted to authorized personnel only.
>
> **5. Contact**
> For data updates or deletion requests, contact our Grievance Officer at compliance@samatat.org.

### B. Donation Terms & Conditions
*Essential for preventing chargeback disputes and clarifying tax status.*

> **Donation Terms & Conditions**
>
> 1.  **Voluntary Contribution**: All donations are voluntary and non-refundable.
> 2.  **Tax Exemption**: Donations to Samatat Theatre are eligible for 50% tax exemption under Section 80G of the Income Tax Act, 1961.
> 3.  **Receipts**: A valid 80G receipt will be emailed within 10 days of successful payment. Please ensure your PAN and Address are entered correctly; receipts cannot be modified once generated.
> 4.  **Usage of Funds**: Donations are used for the charitable objectives of the organization, including archival preservation, education, and cultural performances.
> 5.  **Foreign Donors**: Currently, we [Accept/Do Not Accept] foreign currency donations. (Note: FCRA registration is required for foreign funds).

### C. Data Retention Note
*To be displayed in the Admin Panel or Data Policy.*

> **Data Retention Policy**
>
> *   **Financial Records**: Retained for 8 years as per the Income Tax Act.
> *   **Donation Records**: Permanently archived for historical donor tracking.
> *   **User Accounts**: Retained until the user requests deletion, subject to pending transaction requirements.
> *   **Inactive Accounts**: Accounts inactive for >5 years may be anonymized.
