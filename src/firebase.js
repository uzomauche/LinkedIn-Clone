import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from "firebase/app";
// import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0wQFIXVwtvuORDSP66lt0Qm0B66bj1Qw",
    authDomain: "linkedin-clone-b2053.firebaseapp.com",
    projectId: "linkedin-clone-b2053",
    storageBucket: "linkedin-clone-b2053.appspot.com",
    messagingSenderId: "889978185829",
    appId: "1:889978185829:web:5014e09476f61c050b3e8c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };