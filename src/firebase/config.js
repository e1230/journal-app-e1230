// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCKD-QfhhcVkqpU_tI376QEPLr3GJU1hqE",
    authDomain: "react-journal-d44fc.firebaseapp.com",
    projectId: "react-journal-d44fc",
    storageBucket: "react-journal-d44fc.appspot.com",
    messagingSenderId: "1003515104186",
    appId: "1:1003515104186:web:d29a4f68e37c1f543cab83"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);