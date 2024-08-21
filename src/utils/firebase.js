// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1R7I5TfeiuxkzlopwZM0sj0Ms4k-8yts",
  authDomain: "netflixgpt-7f1c6.firebaseapp.com",
  projectId: "netflixgpt-7f1c6",
  storageBucket: "netflixgpt-7f1c6.appspot.com",
  messagingSenderId: "834159083763",
  appId: "1:834159083763:web:ab1e27ef2ada2205fe7786",
  measurementId: "G-YXD5WWQWX7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();