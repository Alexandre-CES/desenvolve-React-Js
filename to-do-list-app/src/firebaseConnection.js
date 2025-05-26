import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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