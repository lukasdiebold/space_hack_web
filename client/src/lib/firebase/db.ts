import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

export const servers = {
  iceServers: [
    {
      urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
    }
  ],
  iceCandidatePoolSize: 10
}
export const firebaseConfig = {
  apiKey: "AIzaSyC866WuCJivvJI00Nyc-HffwwCgK3yIggg",
  authDomain: "savethearistronaut.firebaseapp.com",
  databaseURL: "https://savethearistronaut-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "savethearistronaut",
  storageBucket: "savethearistronaut.firebasestorage.app",
  messagingSenderId: "1031797158468",
  appId: "1:1031797158468:web:2ad2bfd4ab16ad0ec00211"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const appFirestore = getFirestore(app);