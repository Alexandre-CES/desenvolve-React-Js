// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuwypU0TXMhNFf0QCjJOkD5wavgprdNSM",
  authDomain: "react-js-abd63.firebaseapp.com",
  projectId: "react-js-abd63",
  storageBucket: "react-js-abd63.firebasestorage.app",
  messagingSenderId: "981982259350",
  appId: "1:981982259350:web:5ee77ed6412eee1e857ab7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export {db};