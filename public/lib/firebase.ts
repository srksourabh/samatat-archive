// Firebase Configuration for Samatat Theatre Archive
// This file initializes Firebase services for the frontend

import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Firebase configuration
// These are public keys and safe to expose in client-side code
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyExample", // Replace with actual key
  authDomain: "samatat-archive.firebaseapp.com",
  projectId: "samatat-archive",
  storageBucket: "samatat-archive.appspot.com",
  messagingSenderId: "123456789", // Replace with actual
  appId: "1:123456789:web:abcdef123456", // Replace with actual
};

// Cloud Functions base URL
export const FUNCTIONS_URL = 'https://us-central1-samatat-archive.cloudfunctions.net';

// Initialize Firebase (prevent re-initialization)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Export services
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;

// =============================================================================
// API FUNCTIONS
// =============================================================================

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  inquiryType: string;
  message: string;
}

interface DonationFormData {
  name: string;
  email: string;
  phone?: string;
  amount: number;
  paymentMethod?: string;
  transactionId?: string;
  message?: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  id?: string;
  error?: string;
}

/**
 * Submit contact form to Firebase Functions
 */
export async function submitContactForm(data: ContactFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${FUNCTIONS_URL}/submitContactForm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit form');
    }

    return result;
  } catch (error) {
    console.error('Contact form submission error:', error);
    throw error;
  }
}

/**
 * Submit donation information to Firebase Functions
 */
export async function submitDonation(data: DonationFormData): Promise<ApiResponse> {
  try {
    const response = await fetch(`${FUNCTIONS_URL}/submitDonation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit donation');
    }

    return result;
  } catch (error) {
    console.error('Donation submission error:', error);
    throw error;
  }
}
