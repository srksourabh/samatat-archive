# On-Site Ticketing Flow Design & Pseudocode

This document outlines the architecture for the Samatat Theatre Archive ticketing system, using Firestore, Cloud Functions, and Stripe.

## 1. Data Model Strategy

### Firestore Structure
*   **`productions/{prodId}/shows/{showId}`**
    *   `startTime`: Timestamp
    *   `capacity`: Number
    *   `sold`: Number
    *   `price`: Number
*   **`productions/{prodId}/shows/{showId}/seats/{seatId}`** (Subcollection for Concurrency)
    *   `status`: "available" | "held" | "sold"
    *   `holdExpiresAt`: Timestamp (TTL for pending orders)
    *   `orderId`: String
*   **`orders/{orderId}`**
    *   `status`: "pending" | "paid" | "failed"
    *   `amount`: Number
    *   `seats`: Array of `{ seatId, showId }`
    *   `stripeSessionId`: String
    *   `ticketPdfRef`: String (Storage path)
    *   `createdAt`: Timestamp
*   **`leads/{leadId}`** (WhatsApp Fallback)
    *   `type`: "whatsapp"
    *   `contact`: String
    *   `message`: String
    *   `status`: "new"

### Concurrency Handling
We use **Firestore Transactions** to ensure atomic reservation. When a user selects seats, we run a transaction that:
1.  Reads the requested `seat` documents.
2.  Checks if `status == 'available'` (or `status == 'held'` but `holdExpiresAt` < now).
3.  If valid, writes `status = 'held'` and sets a 15-minute `holdExpiresAt`.
4.  Creates the `order` document.

## 2. Cloud Functions Pseudocode

### A. Dependencies
```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const stripe = require('stripe')(functions.config().stripe.secret);
const PDFDocument = require('pdfkit'); // or puppeteer
const nodemailer = require('nodemailer');

const db = admin.firestore();
const bucket = admin.storage().bucket();
```

### B. Create Checkout Session (Booking Start)
```javascript
exports.createCheckoutSession = functions.https.onCall(async (data, context) => {
    const { showPath, seatIds } = data;
    const userId = context.auth ? context.auth.uid : 'guest';
    
    // 1. Transaction: Reserve Seats
    const orderId = await db.runTransaction(async (t) => {
        const showRef = db.doc(showPath);
        const seatRefs = seatIds.map(id => showRef.collection('seats').doc(id));
        
        const seatDocs = await Promise.all(seatRefs.map(ref => t.get(ref)));
        
        // Validate availability
        seatDocs.forEach(doc => {
            const seat = doc.data();
            const now = admin.firestore.Timestamp.now();
            if (seat.status === 'sold') throw new Error('Seat sold');
            if (seat.status === 'held' && seat.holdExpiresAt > now) throw new Error('Seat held');
        });

        // Calculate Price (Simplified)
        const showDoc = await t.get(showRef);
        const price = showDoc.data().price * seatIds.length;
        
        // Create Order ID
        const newOrderRef = db.collection('orders').doc();
        
        // Write: Hold Seats
        const holdUntil = admin.firestore.Timestamp.fromMillis(Date.now() + 15 * 60000); // 15 mins
        seatRefs.forEach(ref => {
            t.set(ref, { 
                status: 'held', 
                holdExpiresAt: holdUntil,
                orderId: newOrderRef.id 
            }, { merge: true });
        });

        // Write: Create Pending Order
        t.set(newOrderRef, {
            status: 'pending',
            userId,
            showPath,
            seatIds,
            amount: price,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });
        
        return { id: newOrderRef.id, price };
    });

    // 2. Create Stripe Session
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'inr',
                product_data: { name: 'Theatre Ticket' },
                unit_amount: orderId.price * 100, // in paise
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: `https://your-site.com/success?orderId=${orderId.id}`,
        cancel_url: `https://your-site.com/cancel`,
        metadata: { orderId: orderId.id }
    });

    // 3. Update Order with Session ID (non-transactional is fine here)
    await db.collection('orders').doc(orderId.id).update({
        stripeSessionId: session.id
    });

    return { sessionId: session.id };
});
```

### C. Stripe Webhook Handler (Payment Confirmation)
```javascript
exports.handleStripeWebhook = functions.https.onRequest(async (req, res) => {
    const sig = req.headers['stripe-signature'];
    let event;

    try {
        event = stripe.webhooks.constructEvent(req.rawBody, sig, functions.config().stripe.webhook_secret);
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
        const session = event.data.object;
        const orderId = session.metadata.orderId;

        // 1. Transaction: Finalize Order & Seats
        await db.runTransaction(async (t) => {
            const orderRef = db.collection('orders').doc(orderId);
            const orderDoc = await t.get(orderRef);
            if (!orderDoc.exists) throw new Error("Order not found");
            
            const { showPath, seatIds } = orderDoc.data();
            
            // Mark Order Paid
            t.update(orderRef, { status: 'paid', paidAt: admin.firestore.FieldValue.serverTimestamp() });
            
            // Mark Seats Sold (Permanent)
            const showRef = db.doc(showPath);
            seatIds.forEach(seatId => {
                const seatRef = showRef.collection('seats').doc(seatId);
                t.update(seatRef, { status: 'sold', orderId: orderId });
            });
        });

        // 2. Trigger Fulfillment (Async)
        // We can call the generator function directly or let a Firestore trigger handle it.
        // Calling directly for speed in this example.
        await generateAndSendTicket(orderId);
    }

    res.json({received: true});
});
```

### D. PDF Ticket Generator & Email (Helper)
```javascript
async function generateAndSendTicket(orderId) {
    const orderSnap = await db.collection('orders').doc(orderId).get();
    const orderData = orderSnap.data();

    // 1. Generate PDF using PDFKit
    const doc = new PDFDocument();
    const fileName = `tickets/${orderId}.pdf`;
    const file = bucket.file(fileName);
    const writeStream = file.createWriteStream({
        metadata: { contentType: 'application/pdf' }
    });

    doc.pipe(writeStream);

    // Design Ticket
    doc.fontSize(25).text('Samatat Theatre Ticket', 100, 100);
    doc.fontSize(15).text(`Order ID: ${orderId}`, 100, 150);
    doc.text(`Seats: ${orderData.seatIds.join(', ')}`);
    doc.text('Show this at the entrance.');
    
    // Add QR Code (optional, requires 'qr-image' pkg)
    // doc.image(qrBuffer, ...);
    
    doc.end();

    await new Promise(resolve => writeStream.on('finish', resolve));

    // 2. Make Public or Signed URL
    const [url] = await file.getSignedUrl({ action: 'read', expires: '03-01-2500' });
    
    // 3. Update Order
    await db.collection('orders').doc(orderId).update({ ticketPdfUrl: url });

    // 4. Send Email
    const transporter = nodemailer.createTransport({ /* SMTP config */ });
    await transporter.sendMail({
        from: '"Samatat Ticket" <tickets@samatat.org>',
        to: 'user@example.com', // get from User doc or Stripe customer email
        subject: 'Your Ticket',
        text: `Download your ticket here: ${url}`,
        attachments: [{ filename: 'ticket.pdf', path: url }]
    });
}
```

### E. WhatsApp Fallback Logger
```javascript
exports.logWhatsAppLead = functions.https.onCall(async (data, context) => {
    // Frontend calls this before redirecting user to wa.me link
    const { productionName, userNote } = data;
    
    await db.collection('leads').add({
        type: 'whatsapp_click',
        productionName,
        userNote,
        createdAt: admin.firestore.FieldValue.serverTimestamp(),
        status: 'new'
    });
    
    // Notify Admin (Slack/Email/SMS webhook)
    // ... code to send notification ...
    
    return { success: true };
});
```

## 3. Implementation Steps
1.  **Stripe Setup**: Register account, get Secret Key, set in Firebase config (`firebase functions:config:set stripe.secret="sk_..."`).
2.  **Deploy Functions**: `firebase deploy --only functions`.
3.  **Frontend Integration**:
    *   Fetch seat map from Firestore `seats` subcollection.
    *   Call `createCheckoutSession` with selected seat IDs.
    *   Redirect to `sessionId` returned.
    *   Handle success/cancel pages.
4.  **Security Rules**: Ensure `orders` can only be read by the owner (userId) or Admins.
