// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaDrwkaPDQFlKHtJo--9lioiqGXf7l3EM",
  authDomain: "flashcards-c6c8c.firebaseapp.com",
  projectId: "flashcards-c6c8c",
  storageBucket: "flashcards-c6c8c.appspot.com",
  messagingSenderId: "392326612606",
  appId: "1:392326612606:web:9aef42e0f4552894573a2f"
};

// Initialize Firebase
const fireabaseApp = initializeApp(firebaseConfig);

export default fireabaseApp;