// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);