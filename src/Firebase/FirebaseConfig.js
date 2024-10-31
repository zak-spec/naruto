// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyASPIA_Cye8jLbzdruThSVT26kQgP1niCM",
  authDomain: "proyecto-a-entregar.firebaseapp.com",
  projectId: "proyecto-a-entregar",
  storageBucket: "proyecto-a-entregar.appspot.com",
  messagingSenderId: "258741693294",
  appId: "1:258741693294:web:d78e729e7e3c41fe54ef7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);