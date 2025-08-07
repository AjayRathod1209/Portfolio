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
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();

async function fetchFeedbackData() {
  const snapshot = await db.collection("feedback").get();
  snapshot.forEach(doc => {
    console.log(doc.id, "=>", doc.data());
    // You can now display this in a table or card
  });
}

fetchFeedbackData();
