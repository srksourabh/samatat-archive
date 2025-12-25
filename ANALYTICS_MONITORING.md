# Analytics & Monitoring Strategy

## 1. Google Analytics 4 (GA4) Event Schema

Standardized event names to be sent via `gtag()` or `firebase.analytics().logEvent()`.

### Commerce Events
*   `purchase`: Triggered on successful ticket or donation payment.
    *   Parameters: `transaction_id`, `value`, `currency`, `items` (e.g., `[{item_name: 'Ticket', item_category: 'Production'}]`).
*   `add_to_cart`: Triggered when selecting seats.
*   `begin_checkout`: Triggered when clicking "Proceed to Pay".

### Engagement Events
*   `workshop_signup`: Triggered on successful workshop registration.
    *   Parameters: `workshop_title`, `workshop_id`.
*   `member_signup`: Triggered on new membership subscription.
    *   Parameters: `tier` ('friend', 'patron').
*   `file_download`: Triggered when downloading PDF Reports/Brochures.
    *   Parameters: `file_name`, `file_type`.
*   `search`: Triggered on Archive/Global search.
    *   Parameters: `search_term`.

## 2. Cloud Monitoring & Alerts

Set these up in the Google Cloud Console (Operations > Monitoring).

### Log-Based Alerts (Critical)
1.  **Media Pipeline Failure**:
    *   **Filter**: `resource.type="cloud_function" AND textPayload=~"Transcription failed" OR textPayload=~"Transcode error"`
    *   **Notification**: Email to Tech Admin.
2.  **Payment Webhook Failures**:
    *   **Filter**: `resource.type="cloud_function" AND function_name="handlePaymentWebhook" AND severity="ERROR"`
    *   **Notification**: SMS/Email (Immediate Action Required).
3.  **Global Function Errors**:
    *   **Filter**: `severity="ERROR"` (Threshold: > 5 errors per 5 mins).

## 3. Weekly Digest Email (Cloud Scheduler Job)

A scheduled Cloud Function that aggregates stats from the last 7 days and emails the admin team.

**Schedule**: Every Monday at 9:00 AM (`0 9 * * 1`)
**Timezone**: Asia/Kolkata

### Function Implementation (`functions/digest.js`)

Add this logic to your functions.

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

const db = admin.firestore();

exports.weeklyAdminDigest = functions.pubsub.schedule('0 9 * * 1')
    .timeZone('Asia/Kolkata')
    .onRun(async (context) => {
        const now = admin.firestore.Timestamp.now();
        const sevenDaysAgo = admin.firestore.Timestamp.fromMillis(now.toMillis() - (7 * 24 * 60 * 60 * 1000));

        // 1. Aggregate Stats (Tickets)
        const ticketsSnap = await db.collection('orders')
            .where('status', '==', 'paid')
            .where('createdAt', '>=', sevenDaysAgo)
            .get();
        
        let totalSales = 0;
        let ticketsSold = 0;
        ticketsSnap.forEach(doc => {
            const d = doc.data();
            totalSales += (d.amount || 0);
            ticketsSold += (d.seats ? d.seats.length : 0);
        });

        // 2. Aggregate Stats (Donations)
        const donationsSnap = await db.collection('donations')
            .where('createdAt', '>=', sevenDaysAgo)
            .get();
        
        let totalDonations = 0;
        donationsSnap.forEach(doc => totalDonations += (doc.data().amount || 0));

        // 3. Aggregate Stats (Signups)
        const usersSnap = await db.collection('users')
            .where('createdAt', '>=', sevenDaysAgo)
            .count() // Requires Firestore Count Aggregation Query
            .get();
        const newUsers = usersSnap.data().count;

        // 4. Construct Email
        const emailContent = `
            <h1>Samatat Weekly Digest</h1>
            <p><strong>Period:</strong> ${sevenDaysAgo.toDate().toDateString()} - ${now.toDate().toDateString()}</p>
            
            <table border="1" cellpadding="10" style="border-collapse: collapse;">
                <tr>
                    <th>Metric</th>
                    <th>Count / Value</th>
                </tr>
                <tr>
                    <td>Tickets Sold</td>
                    <td>${ticketsSold}</td>
                </tr>
                <tr>
                    <td>Ticket Revenue</td>
                    <td>₹${totalSales.toLocaleString('en-IN')}</td>
                </tr>
                <tr>
                    <td>Donations</td>
                    <td>₹${totalDonations.toLocaleString('en-IN')} (${donationsSnap.size} donors)</td>
                </tr>
                <tr>
                    <td>New Signups</td>
                    <td>${newUsers}</td>
                </tr>
            </table>

            <p><em>Check the <a href="https://console.firebase.google.com/">Firebase Console</a> for error logs and detailed analytics.</em></p>
        `;

        // 5. Send Email
        // Note: Configure 'gmail.email' and 'gmail.password' via config
        // or use SendGrid/Postmark for production reliability.
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: functions.config().gmail.email,
                pass: functions.config().gmail.password
            }
        });

        await transporter.sendMail({
            from: '"Samatat Bot" <no-reply@samatat.org>',
            to: 'admins@samatat.org',
            subject: `Weekly Report: ₹${(totalSales + totalDonations).toLocaleString('en-IN')} Revenue`,
            html: emailContent
        });

        console.log('Weekly digest sent.');
    });
```

### Deployment
1.  Set Config: `firebase functions:config:set gmail.email="your-email" gmail.password="app-password"`
2.  Deploy: `firebase deploy --only functions:weeklyAdminDigest`
