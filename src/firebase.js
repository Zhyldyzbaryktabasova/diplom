// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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
export const db = getFirestore(app);
const auth = getAuth(app);
export const storage = getStorage(app);

// получить список категорий (коллекция документов).
export const categoryCollection = collection(db, "categories");
export const productCollection = collection(db, "products");
export const orderCollection = collection(db, "orders");

const provider = new GoogleAuthProvider();
export const logIn = () => signInWithPopup(auth, provider);
export const logOut = () => signOut(auth);
export const onAuthChange = (callback) => onAuthStateChanged(auth, callback);

export const onCategoriesLoad = (callback) =>
  onSnapshot(categoryCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onProductsLoad = (callback) =>
  onSnapshot(productCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
export const onOrdersLoad = (callback) =>
  onSnapshot(orderCollection, (snapshot) =>
    callback(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
    )
  );
  // отправка фотографии и получение ее url
export const uploadProductPhoto = async (file) => {
  const storageRef = ref(storage, `products/${file.name}`);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);
  return url;
};

