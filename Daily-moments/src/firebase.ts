import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBzqkd0uTYSTbscpyppkOyeX-ZFDJ52lBQ",
    authDomain: "daily-moments-e9bc6.firebaseapp.com",
    projectId: "daily-moments-e9bc6",
    storageBucket: "daily-moments-e9bc6.appspot.com",
    messagingSenderId: "954410267698",
    appId: "1:954410267698:web:61d7b2c4744bc62d99b82b"
};

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const firestore = app.firestore();
export const storage = app.storage();
