// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoNHpxiynVrcWtiniWIWAJkN5BGAlzG1U",
  authDomain: "chat-ca601.firebaseapp.com",
  projectId: "chat-ca601",
  storageBucket: "chat-ca601.appspot.com",
  messagingSenderId: "622254037425",
  appId: "1:622254037425:web:53843bf7f0dbcf8c3d8590",
  measurementId: "G-XKMY1C6WR1"
};

let app;
if(firebase.apps.length == 0){
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app()
}

const db = app.firebase();
const auth = firebase.auth();
export {db, auth};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);