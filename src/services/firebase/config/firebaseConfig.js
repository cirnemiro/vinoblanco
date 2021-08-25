import firebase from "firebase/app";
import "firebase/analytics"
import "firebase/auth";
import "firebase/firestore";


import dotenv from 'dotenv';
dotenv.config()

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGIN_SENDER,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASURAMENT_ID
}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const db = firebase.firestore()

export default db

