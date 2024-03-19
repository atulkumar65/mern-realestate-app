// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7a5fe.firebaseapp.com",
  projectId: "mern-estate-7a5fe",
  storageBucket: "mern-estate-7a5fe.appspot.com",
  messagingSenderId: "658614001727",
  appId: "1:658614001727:web:06413752ab9555d48fd88a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
