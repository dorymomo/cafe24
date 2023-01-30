import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWTviz13-vahbEhmP4M1cX1W-ijduHi74",
    authDomain: "cafe1212-8c04e.firebaseapp.com",
    projectId: "cafe1212-8c04e",
    storageBucket: "cafe1212-8c04e.appspot.com",
    messagingSenderId: "565228041612",
    appId: "1:565228041612:web:e2ca46ded12292ee7b12a9"
  };

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const dbService = firebase.firestore();
export const storageService = firebase.storage(); 