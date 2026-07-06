// ─────────────────────────────────────────────────────────
//  Firebase Configuration
//  Replace the values below with your actual Firebase project
//  credentials from: Firebase Console → Project Settings → Your Apps
// ─────────────────────────────────────────────────────────
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
//import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC1fqVrxJRZEHpsPZO9RaYtFQkEVR-3C9E",
  authDomain: "sportswebsite-99dbc.firebaseapp.com",
  projectId: "sportswebsite-99dbc",
  storageBucket: "sportswebsite-99dbc.firebasestorage.app",
  messagingSenderId: "259459488532",
  appId: "1:259459488532:web:115b959c0e2456693cc001",
  measurementId: "G-VPZP1ZEL0C"
};

const app       = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db      = getFirestore(app);   // Cloud Firestore
export const auth    = getAuth(app);        // Firebase Auth
export const storage = getStorage(app);     // Firebase Storage

export default app;
