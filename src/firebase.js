import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDCZ-aiiwcdiJ_d91wN4TfsRBi8DwjJ2fA",
  authDomain: "clone-c7f19.firebaseapp.com",
  projectId: "clone-c7f19",
  storageBucket: "clone-c7f19.appspot.com",
  messagingSenderId: "649416653637",
  appId: "1:649416653637:web:8d8ae334aa881432521c2c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db          = firebaseApp.firestore();
const auth        = firebase.auth();
const provider    = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
