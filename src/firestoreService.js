import { db } from "./firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

// Add user details
export const addUser = async (userData) => {
  try {
    await addDoc(collection(db, "users"), userData);
  } catch (error) {
    throw error.message;
  }
};

// Register for Workshop
export const registerWorkshop = async (workshopData) => {
  try {
    await addDoc(collection(db, "workshops"), workshopData);
  } catch (error) {
    throw error.message;
  }
};

// Contact Form Submission
export const submitContactForm = async (contactData) => {
  try {
    await addDoc(collection(db, "contacts"), contactData);
  } catch (error) {
    throw error.message;
  }
};
