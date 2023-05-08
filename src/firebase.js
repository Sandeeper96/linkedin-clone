// import firebase from 'firebase'
// import { auth } from "firebase/compat/app";
import "firebase/compat/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  
        apiKey: "AIzaSyC6r8qRx1CaVQvdG6j5NymV01fLmYecH6Y",
        authDomain: "linkedin96.firebaseapp.com",
        projectId: "linkedin96",
        storageBucket: "linkedin96.appspot.com",
        messagingSenderId: "61129592329",
        appId: "1:61129592329:web:fc0ad341564608776f32d8"
      };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth }