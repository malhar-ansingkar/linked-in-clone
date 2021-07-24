// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDYGUiIPm_-Ax_sfr8FV4YhcnO4Kuj-5P8",
    authDomain: "linked-in-f3591.firebaseapp.com",
    projectId: "linked-in-f3591",
    storageBucket: "linked-in-f3591.appspot.com",
    messagingSenderId: "761084804336",
    appId: "1:761084804336:web:6b970d7ed83fb612811635",
    measurementId: "G-KX4GNVXWGJ"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

export {db,auth};