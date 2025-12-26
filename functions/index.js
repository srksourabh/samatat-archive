/**
 * Firebase Cloud Functions for Samatat Theatre Archive
 *
 * Functions:
 * - submitContactForm: Handle contact form submissions
 * - submitDonation: Handle donation form submissions
 */

const { onRequest } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

// =============================================================================
// CONTACT FORM SUBMISSION
// =============================================================================

/**
 * Cloud Function: submitContactForm
 * Handles contact form submissions from the website
 * Stores in Firestore and optionally sends email notification
 */
exports.submitContactForm = onRequest({
    cors: true,
    maxInstances: 10,
}, async (req, res) => {
    // Only allow POST
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    try {
        const { name, email, phone, inquiryType, message } = req.body;

        // Validation
        if (!name || !email || !inquiryType || !message) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            res.status(400).json({ error: "Invalid email format" });
            return;
        }

        // Store in Firestore
        const submission = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone ? phone.trim() : null,
            inquiryType,
            message: message.trim(),
            submittedAt: admin.firestore.FieldValue.serverTimestamp(),
            status: "new",
            read: false,
        };

        const docRef = await db.collection("contactSubmissions").add(submission);
        logger.info(`Contact form submitted: ${docRef.id} from ${email}`);

        // Success response
        res.status(200).json({
            success: true,
            message: "Thank you for contacting us. We will respond within 2-3 business days.",
            id: docRef.id,
        });

    } catch (error) {
        logger.error("Contact form error:", error);
        res.status(500).json({ error: "Failed to submit form. Please try again." });
    }
});

// =============================================================================
// DONATION SUBMISSION
// =============================================================================

/**
 * Cloud Function: submitDonation
 * Handles donation form submissions (for tracking, not payment processing)
 */
exports.submitDonation = onRequest({
    cors: true,
    maxInstances: 10,
}, async (req, res) => {
    if (req.method !== "POST") {
        res.status(405).json({ error: "Method not allowed" });
        return;
    }

    try {
        const { name, email, phone, amount, paymentMethod, transactionId, message } = req.body;

        if (!name || !email || !amount) {
            res.status(400).json({ error: "Missing required fields" });
            return;
        }

        const donation = {
            name: name.trim(),
            email: email.trim().toLowerCase(),
            phone: phone ? phone.trim() : null,
            amount: parseFloat(amount),
            paymentMethod: paymentMethod || "bank_transfer",
            transactionId: transactionId ? transactionId.trim() : null,
            message: message ? message.trim() : null,
            submittedAt: admin.firestore.FieldValue.serverTimestamp(),
            status: "pending_verification",
            verified: false,
        };

        const docRef = await db.collection("donations").add(donation);
        logger.info(`Donation submitted: ${docRef.id} - ₹${amount} from ${email}`);

        res.status(200).json({
            success: true,
            message: "Thank you for your donation! We will send a receipt once verified.",
            id: docRef.id,
        });

    } catch (error) {
        logger.error("Donation submission error:", error);
        res.status(500).json({ error: "Failed to submit. Please try again." });
    }
});
