// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPW73A_te7jPoXoGYYB3bceogrr8Eri70",
  authDomain: "coffe-store-808e6.firebaseapp.com",
  projectId: "coffe-store-808e6",
  storageBucket: "coffe-store-808e6.firebasestorage.app",
  messagingSenderId: "960818106086",
  appId: "1:960818106086:web:8ba258d8b3e221e7413527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
