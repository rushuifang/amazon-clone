import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCLiSNffcsNre7ZAYN6nC_RiqCUbjI26y0",
    authDomain: "clone-61136.firebaseapp.com",
    databaseURL: "https://clone-61136.firebaseio.com",
    projectId: "clone-61136",
    storageBucket: "clone-61136.appspot.com",
    messagingSenderId: "683525286285",
    appId: "1:683525286285:web:fb37081d8afa9a8206b5c4",
    measurementId: "G-JSHC1M99CR",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
