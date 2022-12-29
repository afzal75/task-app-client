// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiU-lUE2dd9C1dIjlIfCMofLeWgbwXQAU",
  authDomain: "task-app-8dc8d.firebaseapp.com",
  projectId: "task-app-8dc8d",
  storageBucket: "task-app-8dc8d.appspot.com",
  messagingSenderId: "681036256162",
  appId: "1:681036256162:web:11f09c1d8e1b4a879d98fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;