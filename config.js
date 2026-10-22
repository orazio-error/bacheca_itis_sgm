// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKXSLQ8LojPW7QDMTTHs-UtFXeiB4tLL4",
  authDomain: "bacheca-itis-sgm.firebaseapp.com",
  projectId: "bacheca-itis-sgm",
  storageBucket: "bacheca-itis-sgm.firebasestorage.app",
  messagingSenderId: "373107385738",
  appId: "1:373107385738:web:f590b642f97444ceaa9473",
  measurementId: "G-5Q2VW42M58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);