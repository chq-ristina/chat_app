// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXhtYCpFXC3bY3Ire6aldwniF2Y0IkIOU",
  authDomain: "chat-fda26.firebaseapp.com",
  projectId: "chat-fda26",
  storageBucket: "chat-fda26.appspot.com",
  messagingSenderId: "804925661581",
  appId: "1:804925661581:web:91e9ae178ecf8d50c41dc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// Create a root reference
export const storage = getStorage();
export const db = getFirestore();