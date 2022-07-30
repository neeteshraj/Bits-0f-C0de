// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDNE9w8v8V1G4FBe9HZ1DHtk4cKQxSoMI0",
  authDomain: "bits-of-code-e7eaa.firebaseapp.com",
  projectId: "bits-of-code-e7eaa",
  storageBucket: "bits-of-code-e7eaa.appspot.com",
  messagingSenderId: "863784193345",
  appId: "1:863784193345:web:431049d8527e05363e65c0",
  measurementId: "G-530MV0N0YZ",
};
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

// Initialize Firebase
const db = getFirestore(app);

export { auth, provider, db };
