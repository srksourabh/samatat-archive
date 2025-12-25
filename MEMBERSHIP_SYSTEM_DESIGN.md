# Membership System Design

## 1. Membership Tiers
*   **Friend**: 500 INR/yr. Perks: Newsletter, 24h early access to tickets.
*   **Supporter**: 2000 INR/yr. Perks: Above + 10% discount, exclusive behind-the-scenes content.
*   **Patron**: 5000+ INR/yr. Perks: Above + Meet & Greet, name in brochure, free gala invite.

## 2. Firestore Schema

### `members/{userId}`
*   `uid`: String (Firebase Auth ID)
*   `tier`: "friend" | "supporter" | "patron"
*   `status`: "active" | "expired" | "past_due"
*   `subscriptionId`: String (Razorpay/Stripe Sub ID)
*   `currentPeriodEnd`: Timestamp
*   `cancelAtPeriodEnd`: Boolean
*   `giftedBy`: String (Optional, Name/Email of sender)
*   `createdAt`: Timestamp

### `promo_codes/{code}`
*   `code`: String (ID)
*   `discountPercent`: Number
*   `validUntil`: Timestamp
*   `maxUses`: Number
*   `usedCount`: Number

## 3. Cloud Functions (Razorpay Integration)

### A. Create Subscription (Backend)

```javascript
const Razorpay = require('razorpay');
const instance = new Razorpay({ key_id: 'KEY_ID', key_secret: 'KEY_SECRET' });

exports.createMembershipSubscription = functions.https.onCall(async (data, context) => {
    if (!context.auth) throw new functions.https.HttpsError('unauthenticated', 'Login required');
    
    const { planId, promoCode } = data; // planId maps to Tier
    const userId = context.auth.uid;

    // 1. Validate Promo Code (Optional)
    let finalOfferId = null; 
    // Logic to look up promoCode in Firestore and get Razorpay Offer ID if applicable

    // 2. Create Razorpay Subscription
    const subscription = await instance.subscriptions.create({
        plan_id: planId, // e.g., plan_Jks...
        customer_notify: 1,
        total_count: 120, // 10 years (indefinite-ish)
        notes: { userId: userId, promo: promoCode || 'none' }
    });

    return { subscriptionId: subscription.id, short_url: subscription.short_url };
});
```

### B. Webhook Handler (Sync Status)

```javascript
exports.handlePaymentWebhook = functions.https.onRequest(async (req, res) => {
    const secret = 'YOUR_WEBHOOK_SECRET'; 
    // Verify signature logic here...

    const event = req.body;
    
    if (event.event === 'subscription.charged') {
        const sub = event.payload.subscription.entity;
        const userId = sub.notes.userId;

        // 1. Determine Tier from Plan ID
        const tierMap = { 'plan_FriendID': 'friend', 'plan_SupporterID': 'supporter', 'plan_PatronID': 'patron' };
        const tier = tierMap[sub.plan_id] || 'friend';

        // 2. Update Firestore
        const endDate = new Date(sub.current_end * 1000); // Unix to JS Date
        await admin.firestore().collection('members').doc(userId).set({
            status: 'active',
            tier: tier,
            subscriptionId: sub.id,
            currentPeriodEnd: admin.firestore.Timestamp.fromDate(endDate),
            updatedAt: admin.firestore.FieldValue.serverTimestamp()
        }, { merge: true });

        // 3. Update Custom Claims (for fast auth checks)
        await admin.auth().setCustomUserClaims(userId, { tier: tier, member: true });
    }
    
    // Handle 'subscription.cancelled', 'subscription.halted' etc.
    
    res.json({status: 'ok'});
});
```

### C. Gift Membership Logic
*   **Purchase**: User buys a "Gift" product (one-time payment).
*   **Generation**: Cloud function generates a unique `redemptionCode` stored in `gift_codes` collection.
*   **Redemption**: Recipient enters code. Function verifies code, creates a 1-year 'active' membership record for them without a recurring subscription ID, and marks code as used.

## 4. Member Dashboard Wireframe (React)

```jsx
// components/MemberDashboard.jsx
import React from 'react';
import { useAuth, useMemberData } from './hooks';

const MemberDashboard = () => {
  const { user } = useAuth();
  const { memberData, loading } = useMemberData(user.uid);

  if (loading) return <div>Loading...</div>;

  const isMember = memberData?.status === 'active';

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Hello, {user.displayName}</h1>
      
      {/* Status Card */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">Membership Status</h2>
        {isMember ? (
           <div>
             <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 font-bold uppercase text-sm mb-2">
               {memberData.tier}
             </span>
             <p>Valid until: {memberData.currentPeriodEnd.toDate().toLocaleDateString()}</p>
             <button className="text-red-500 text-sm mt-4 underline">Cancel Renewal</button>
           </div>
        ) : (
           <div>
             <p className="text-gray-600 mb-4">You are not currently a member.</p>
             <a href="/join" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Become a Member</a>
           </div>
        )}
      </div>

      {/* Perks Section (Conditional) */}
      {isMember && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           <div className="border p-4 rounded">
              <h3 className="font-bold">Exclusive Content</h3>
              <p className="text-sm text-gray-500 mb-2">Watch behind-the-scenes footage.</p>
              <button className="text-blue-600 font-semibold">Browse Library &rarr;</button>
           </div>
           <div className="border p-4 rounded">
              <h3 className="font-bold">Member Ticket Pre-sale</h3>
              <p className="text-sm text-gray-500 mb-2">Upcoming shows available for booking.</p>
              <button className="text-blue-600 font-semibold">Book Now &rarr;</button>
           </div>
        </div>
      )}
      
      {/* Gift Redemption */}
      {!isMember && (
        <div className="mt-8 border-t pt-6">
           <h3 className="text-lg font-bold">Have a Gift Code?</h3>
           <div className="flex gap-2 mt-2">
             <input type="text" placeholder="ENTER CODE" className="border p-2 rounded flex-1" />
             <button className="bg-gray-800 text-white px-4 py-2 rounded">Redeem</button>
           </div>
        </div>
      )}
    </div>
  );
};
```
