// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCuKo8gRZGCe_aQEXdPrgaIwsq2hygqhxM",
  authDomain: "amaya-coffeshop.firebaseapp.com",
  projectId: "amaya-coffeshop",
  storageBucket: "amaya-coffeshop.firebasestorage.app",
  messagingSenderId: "174925303114",
  appId: "1:174925303114:web:fb620ecf578f80d162c5b3",
  measurementId: "G-Z1S1MM8D03"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);