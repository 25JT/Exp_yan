import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js"
import { } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js"
import { } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js"
import { } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js"
import { getFirestore,addDoc,collection } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "G-E9PYP6S7Q4"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

