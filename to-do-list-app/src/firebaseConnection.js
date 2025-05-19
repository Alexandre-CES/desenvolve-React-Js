// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD17cxnE4O_pBuDAlq1VV2L-ZXUHri1QUY",
  authDomain: "ract-js-projeto-final.firebaseapp.com",
  projectId: "ract-js-projeto-final",
  storageBucket: "ract-js-projeto-final.firebasestorage.app",
  messagingSenderId: "443064321927",
  appId: "1:443064321927:web:2672186b7eb345163c3522"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export {db,auth};