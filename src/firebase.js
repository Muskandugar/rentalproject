// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjgH0S1XbP6yfIqg1NP34GivhWno65n4E",
  authDomain: "e-rentals-d6304.firebaseapp.com",
  projectId: "e-rentals-d6304",
  storageBucket: "e-rentals-d6304.appspot.com",
  messagingSenderId: "846315664041",
  appId: "1:846315664041:web:97c685471348e431b8efb8",
  measurementId: "G-RGWYCFRQN2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);