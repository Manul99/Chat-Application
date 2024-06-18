
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-a56e0.firebaseapp.com",
  projectId: "chatapp-a56e0",
  storageBucket: "chatapp-a56e0.appspot.com",
  messagingSenderId: "907774163005",
  appId: "1:907774163005:web:d4a17074bc03430c85d254"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()