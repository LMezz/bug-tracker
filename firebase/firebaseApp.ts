// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFrN0O21wsagM0xl49YUPMeCLkjjvKH2o",
  authDomain: "bug-tracker-6c23d.firebaseapp.com",
  projectId: "bug-tracker-6c23d",
  storageBucket: "bug-tracker-6c23d.appspot.com",
  messagingSenderId: "645853708604",
  appId: "1:645853708604:web:27fc9e2b73eaa4d7ca1e39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
    return app;
}