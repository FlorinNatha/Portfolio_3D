import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDIs9nhCKOAcm_0td26Wo7_5ZFpHOMe1qI",
  authDomain: "portfolio-feedback-66317.firebaseapp.com",
  projectId: "portfolio-feedback-66317",
  storageBucket: "portfolio-feedback-66317.firebasestorage.app",
  messagingSenderId: "37919681963",
  appId: "1:37919681963:web:527b7ba88d264d19bd76ee",
  measurementId: "G-4CSE90NRX5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
