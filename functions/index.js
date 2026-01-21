/**
 * Firebase Cloud Functions for Samatat Theatre Archive
 *
 * Functions:
 * - submitContactForm: Handle contact form submissions
 * - submitDonation: Handle donation form submissions
 */

const { onRequest } = require("firebase-functions/v2/https");
const { defineSecret } = require("firebase-functions/params");
const { logger } = require("firebase-functions");
const admin = require("firebase-admin");
const { Resend } = require("resend");

// Define secrets
const resendApiKey = defineSecret("RESEND_API_KEY");

// Initialize Firebase Admin
admin.initializeApp();
const db = admin.firestore();

// Email recipient for contact form notifications
const CONTACT_EMAIL = "srksourabh@gmail.com";

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
    secrets: [resendApiKey],
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

        // Send email notification via Resend
        try {
            const resend = new Resend(resendApiKey.value());
            await resend.emails.send({
                from: "Samatat Contact Form <onboarding@resend.dev>",
                to: CONTACT_EMAIL,
                subject: `New Contact Form: ${inquiryType} from ${name}`,
                html: `
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                    <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
                    <p><strong>Message:</strong></p>
                    <p>${message.replace(/\n/g, "<br>")}</p>
                    <hr>
                    <p><small>Submission ID: ${docRef.id}</small></p>
                `,
            });
            logger.info(`Email notification sent to ${CONTACT_EMAIL}`);
        } catch (emailError) {
            logger.error("Failed to send email notification:", emailError);
            // Don't fail the request if email fails - form data is already saved
        }

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
    secrets: [resendApiKey],
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

        // Send email notification via Resend
        try {
            const resend = new Resend(resendApiKey.value());
            await resend.emails.send({
                from: "Samatat Donations <onboarding@resend.dev>",
                to: CONTACT_EMAIL,
                subject: `New Donation: ₹${amount} from ${name}`,
                html: `
                    <h2>New Donation Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
                    <p><strong>Amount:</strong> ₹${amount}</p>
                    <p><strong>Payment Method:</strong> ${paymentMethod || "bank_transfer"}</p>
                    <p><strong>Transaction ID:</strong> ${transactionId || "Not provided"}</p>
                    <p><strong>Message:</strong> ${message || "No message"}</p>
                    <hr>
                    <p><small>Submission ID: ${docRef.id}</small></p>
                `,
            });
            logger.info(`Donation email notification sent to ${CONTACT_EMAIL}`);
        } catch (emailError) {
            logger.error("Failed to send donation email notification:", emailError);
        }

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
