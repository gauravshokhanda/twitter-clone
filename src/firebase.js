import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDjZexfYGGbnib1MRk6anQux3ZC3fhBpkQ",
    authDomain: "twitter-c5a99.firebaseapp.com",
    projectId: "twitter-c5a99",
    storageBucket: "twitter-c5a99.appspot.com",
    messagingSenderId: "440769866621",
    appId: "1:440769866621:web:fdc0c67f8cf4e854533a14",
    measurementId: "G-T6BHTWXJQT"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;