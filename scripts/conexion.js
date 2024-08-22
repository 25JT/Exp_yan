import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js"
import { } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-storage.js"
import { } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js"
import { } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js"
import { getFirestore,addDoc,collection } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js"

const firebaseConfig = {
    apiKey: "AIzaSyDIoJTuOLu3lf0X7AP3YsfpxjExaSMWfCQ",
    authDomain: "proyectoyanbal-b5682.firebaseapp.com",
    projectId: "proyectoyanbal-b5682",
    storageBucket: "proyectoyanbal-b5682.appspot.com",
    messagingSenderId: "1066013748074",
    appId: "1:1066013748074:web:ac01cee51022c06b505313",
    measurementId: "G-E9PYP6S7Q4"
  };
  
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);

