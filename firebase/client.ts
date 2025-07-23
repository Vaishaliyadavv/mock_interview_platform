import { initializeApp , getApp, getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyARfQjbHHLoMVwUWSs3NzLJ09gdHoo-bHc",
    authDomain: "mockmate-eba8c.firebaseapp.com",
    projectId: "mockmate-eba8c",
    storageBucket: "mockmate-eba8c.firebasestorage.app",
    messagingSenderId: "862470352231",
    appId: "1:862470352231:web:6a7c0110b6d81d70b953c2",
    measurementId: "G-7737SD6E8C"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);