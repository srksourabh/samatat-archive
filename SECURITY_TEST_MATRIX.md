# Security Rules Test Matrix

This document summarizes the access control permissions for the Samatat Theatre Archive project, defined in `firestore.rules` and `storage.rules`.

**Roles:**
*   **Admin:** Full access (`role: 'admin'`).
*   **Editor:** Content management (`role: 'editor'`).
*   **Public:** Unauthenticated or standard authenticated users without special roles.

## Firestore Permissions

| Collection | Action | Admin | Editor | Public | Condition / Notes |
| :--- | :--- | :---: | :---: | :---: | :--- |
| **pages** | Read | ✅ | ✅ | ✅ | Public: Only if `published == true`. |
| | Write | ✅ | ✅ | ❌ | |
| **productions** | Read | ✅ | ✅ | ✅ | Public: Only if `published == true` (field to be added). |
| | Write | ✅ | ✅ | ❌ | |
| **festivals** | Read | ✅ | ✅ | ✅ | Public: Only if `published == true` (field to be added). |
| | Write | ✅ | ✅ | ❌ | |
| **workshops** | Read | ✅ | ✅ | ✅ | Assumed public listing. |
| | Write | ✅ | ✅ | ❌ | |
| **media** | Read | ✅ | ✅ | ✅ | Metadata is public. |
| | Write | ✅ | ✅ | ❌ | |
| **donations** | Read | ✅ | ❌ | ❌ | Sensitive financial data. |
| | Write | ✅ | ❌ | ❌ | |
| **tickets** | Read | ✅ | ❌ | ❌ | (Optional: Users can read own tickets). |
| | Write | ✅ | ❌ | ❌ | |
| **members** | Read | ✅ | ❌ | ❌ | PII / subscription data. |
| | Write | ✅ | ❌ | ❌ | |
| **committees** | Read | ✅ | ❌ | ❌ | Internal records. |
| | Write | ✅ | ❌ | ❌ | |

## Storage Permissions

| Path / Folder | Action | Admin | Editor | Public | Notes |
| :--- | :--- | :---: | :---: | :---: | :--- |
| `/images/**` | Read | ✅ | ✅ | ✅ | Public site assets. |
| | Write | ✅ | ✅ | ❌ | |
| `/videos/**` | Read | ✅ | ✅ | ✅ | Public site assets. |
| | Write | ✅ | ✅ | ❌ | |
| `/posters/**` | Read | ✅ | ✅ | ✅ | Public site assets. |
| | Write | ✅ | ✅ | ❌ | |
| `/public_docs/**`| Read | ✅ | ✅ | ✅ | Newsletters, etc. |
| | Write | ✅ | ✅ | ❌ | |
| `/receipts/**` | Read | ✅ | ❌ | ❌ | Donation receipts (Sensitive). |
| | Write | ✅ | ❌ | ❌ | |
| `/contracts/**` | Read | ✅ | ❌ | ❌ | Legal documents (Sensitive). |
| | Write | ✅ | ❌ | ❌ | |
| `/minutes/**` | Read | ✅ | ❌ | ❌ | Committee minutes (Internal). |
| | Write | ✅ | ❌ | ❌ | |
| *Other Paths* | Any | ❌ | ❌ | ❌ | Default deny. |

## Role Assignment (Custom Claims)
To assign roles, you will need to set Custom User Claims using the Firebase Admin SDK.

**Example (Node.js):**
```javascript
// Grant admin role
await admin.auth().setCustomUserClaims(uid, { role: 'admin' });

// Grant editor role
await admin.auth().setCustomUserClaims(uid, { role: 'editor' });
```
