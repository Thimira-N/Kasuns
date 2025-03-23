// Importing the functions need from the SDKs need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Kasun's web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkqubiXJB2WJTb95-h5QkemYvYBuNKjyM",
  authDomain: "kasun-s.firebaseapp.com",
  projectId: "kasun-s",
  storageBucket: "kasun-s.firebasestorage.app",
  messagingSenderId: "1013148397740",
  appId: "1:1013148397740:web:bab08a4da69262da292f09",
  measurementId: "G-Y0KVMJMGHC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);