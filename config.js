import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyAWavso6YN09ZYPcsDX5IjfmE9civpCoaY",
    authDomain: "e-library-6b161.firebaseapp.com",
    projectId: "e-library-6b161",
    storageBucket: "e-library-6b161.appspot.com",
    messagingSenderId: "327203549630",
    appId: "1:327203549630:web:ba3abb9c8f3a8f8c1ac9ef"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();