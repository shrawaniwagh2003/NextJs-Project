import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD6VCbkql4RNnO7c3UPGAm6r9WVeVYYTes",
    authDomain: "samyoga-cfc58.firebaseapp.com",
    projectId: "samyoga-cfc58",
    storageBucket: "samyoga-cfc58.appspot.com",
    messagingSenderId: "345417801529",
    appId: "1:345417801529:web:d73bd7520a107c416292e8",
    measurementId: "G-T886N2LWN1"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);