// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEFiw4C1KXi7RnISM3Fde_xmZyJWKS_-A",
  authDomain: "diploma-d9e2c.firebaseapp.com",
  projectId: "diploma-d9e2c",
  storageBucket: "diploma-d9e2c.appspot.com",
  messagingSenderId: "42802428302",
  appId: "1:42802428302:web:a9c56b554a11c9d2400cdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//получить список категорий (коллекция документов).
export const categoryCollection = collection  (db, 'categories');