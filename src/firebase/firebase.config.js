// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwGPldh4eL9Wv4K-bGkAkdFCm92hOca88",
  authDomain: "second-firebase-76eeb.firebaseapp.com",
  projectId: "second-firebase-76eeb",
  storageBucket: "second-firebase-76eeb.appspot.com",
  messagingSenderId: "385910438740",
  appId: "1:385910438740:web:f222f9f358fc83fe40a6c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth