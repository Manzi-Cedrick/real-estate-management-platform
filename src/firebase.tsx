// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCc41Pid_3k0T4VMKTvKe4VgQvK3mzI6kk",
    authDomain: "realestate-18d81.firebaseapp.com",
    projectId: "realestate-18d81",
    storageBucket: "realestate-18d81.appspot.com",
    messagingSenderId: "402764454949",
    appId: "1:402764454949:web:ac4a52f25361cec41db3cc",
    measurementId: "G-VW2W7L3BFM"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);