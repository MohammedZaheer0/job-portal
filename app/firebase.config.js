// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import getFirestore from firebase/firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIp1KWVhyv-N7j3VzxBXeEVwHOdiBrEPo",
  authDomain: "job-portal-6c7ee.firebaseapp.com",
  projectId: "job-portal-6c7ee",
  storageBucket: "job-portal-6c7ee.appspot.com",
  messagingSenderId: "1047493971424",
  appId: "1:1047493971424:web:fefb76eba8b4c248da6f85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Correctly initialize Firestore

export { db };
