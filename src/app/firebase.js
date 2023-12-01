// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDX8ocYAgVuli2yyTlRgPvKTktYxbAYPXg",
  authDomain: "miss-dani-mo.firebaseapp.com",
  projectId: "miss-dani-mo",
  storageBucket: "miss-dani-mo.appspot.com",
  messagingSenderId: "581117400103",
  appId: "1:581117400103:web:f812650fd376fe910c2a02",
  measurementId: "G-JEMW9M62DQ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
