// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqzzwJzzSKxtzu265ArX29wcBTbGgvfbE",
  authDomain: "portfolio-1e6c4.firebaseapp.com",
  projectId: "portfolio-1e6c4",
  storageBucket: "portfolio-1e6c4.firebasestorage.app",
  messagingSenderId: "1067985911844",
  appId: "1:1067985911844:web:7b60413a1d35e1f74818b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;