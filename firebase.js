// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js";

// Tumhara firebaseConfig yahan aayega
const firebaseConfig = {
  apiKey: "AIzaSyCkN4KmBakVrMs_hZGGcYziifkXseriqq0",
  authDomain: "feedback-57dc4.firebaseapp.com",
  projectId: "feedback-57dc4",
  storageBucket: "feedback-57dc4.firebasestorage.app",
  messagingSenderId: "398183420921",
  appId: "1:398183420921:web:dbb40340c3a7afa5992328"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore ko export karo taaki use dusri files me use kar sake
export const db = getFirestore(app);
