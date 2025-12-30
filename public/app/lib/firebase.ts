import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, Auth, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { getFirestore, Firestore, collection, doc, getDocs, getDoc, addDoc, updateDoc, deleteDoc, query, orderBy, where, Timestamp } from 'firebase/firestore';
import { getStorage, FirebaseStorage, ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || 'samatat-archive',
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || 'samatat-archive.appspot.com',
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;

if (typeof window !== 'undefined') {
  app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);
}

export { app, auth, db, storage };

// Auth helpers
export const loginWithEmail = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = async () => {
  return signOut(auth);
};

export const onAuthChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Firestore helpers for CMS content types
export type ContentType = 'productions' | 'festivals' | 'workshops' | 'news' | 'media' | 'team' | 'testimonials' | 'sponsors' | 'activities';

export interface CMSDocument {
  id?: string;
  title: { en: string; bn: string; hi: string };
  description?: { en: string; bn: string; hi: string };
  content?: { en: string; bn: string; hi: string };
  imageUrl?: string;
  videoUrl?: string;
  youtubeVideoId?: string;
  gallery?: string[];
  published: boolean;
  featured?: boolean;
  order?: number;
  date?: Timestamp;
  year?: number;
  category?: string;
  tags?: string[];
  createdAt: Timestamp;
  updatedAt: Timestamp;
}

export interface Production extends CMSDocument {
  playwright?: string;
  director?: string;
  cast?: string[];
  duration?: string;
  venue?: string;
  performances?: number;
}

export interface Festival extends CMSDocument {
  startDate?: Timestamp;
  endDate?: Timestamp;
  venue?: string;
  participatingGroups?: string[];
  schedule?: { time: string; event: string; group?: string }[];
}

export interface Activity extends CMSDocument {
  eventDate?: Timestamp;
  venue?: string;
  highlights?: { en: string; bn: string; hi: string }[];
}

// Get all documents from a collection
export const getDocuments = async (contentType: ContentType): Promise<CMSDocument[]> => {
  const q = query(collection(db, contentType), orderBy('createdAt', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CMSDocument));
};

// Get published documents only
export const getPublishedDocuments = async (contentType: ContentType): Promise<CMSDocument[]> => {
  const q = query(
    collection(db, contentType),
    where('published', '==', true),
    orderBy('createdAt', 'desc')
  );
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as CMSDocument));
};

// Get a single document
export const getDocument = async (contentType: ContentType, id: string): Promise<CMSDocument | null> => {
  const docRef = doc(db, contentType, id);
  const snapshot = await getDoc(docRef);
  if (snapshot.exists()) {
    return { id: snapshot.id, ...snapshot.data() } as CMSDocument;
  }
  return null;
};

// Create a document
export const createDocument = async (contentType: ContentType, data: Partial<CMSDocument>): Promise<string> => {
  const now = Timestamp.now();
  const docData = {
    ...data,
    published: data.published ?? false,
    createdAt: now,
    updatedAt: now,
  };
  const docRef = await addDoc(collection(db, contentType), docData);
  return docRef.id;
};

// Update a document
export const updateDocument = async (contentType: ContentType, id: string, data: Partial<CMSDocument>): Promise<void> => {
  const docRef = doc(db, contentType, id);
  await updateDoc(docRef, {
    ...data,
    updatedAt: Timestamp.now(),
  });
};

// Delete a document
export const deleteDocument = async (contentType: ContentType, id: string): Promise<void> => {
  const docRef = doc(db, contentType, id);
  await deleteDoc(docRef);
};

// Upload file to storage
export const uploadFile = async (path: string, file: File): Promise<string> => {
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

// Delete file from storage
export const deleteFile = async (path: string): Promise<void> => {
  const storageRef = ref(storage, path);
  await deleteObject(storageRef);
};

// Submit contact form (for Cloud Function)
export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  type: string;
}) => {
  const response = await fetch(`https://us-central1-samatat-archive.cloudfunctions.net/submitContactForm`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  if (!response.ok) throw new Error('Failed to submit form');
  return response.json();
};

// Submit donation (for Cloud Function)
export const submitDonation = async (donationData: {
  name: string;
  email: string;
  phone?: string;
  amount: number;
  transactionId?: string;
  message?: string;
}) => {
  const response = await fetch(`https://us-central1-samatat-archive.cloudfunctions.net/submitDonation`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(donationData),
  });
  if (!response.ok) throw new Error('Failed to submit donation');
  return response.json();
};
