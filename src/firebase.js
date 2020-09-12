import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA2L__6iEsGlXbzmtcLK2BBxv5jdQ-ExN8",
  authDomain: "todoapp-5b08c.firebaseapp.com",
  databaseURL: "https://todoapp-5b08c.firebaseio.com",
  projectId: "todoapp-5b08c",
  storageBucket: "todoapp-5b08c.appspot.com",
  messagingSenderId: "906060233200",
  appId: "1:906060233200:web:d7b0b6d83181c755b04535",
  measurementId: "G-PSBC65DHPP",
});

const db = firebaseApp.firestore();

export default { db };
