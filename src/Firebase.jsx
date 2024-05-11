// Import the functions you need from the SDKs you need
// import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDixyVAa-0mGyXQQHDmDb4GAswoLmOuy8",
  authDomain: "chatly-app-a3cd3.firebaseapp.com",
  projectId: "chatly-app-a3cd3",
  storageBucket: "chatly-app-a3cd3.appspot.com",
  messagingSenderId: "503304899979",
  appId: "1:503304899979:web:8a910f15ae5e85268a338e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics = getAnalytics(app)

export const auth = getAuth(app)
export const db = getFirestore(app)