// importing firebase utility library
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA7wgC-UK56Zf18JbOOesdUfk4RivaGLUo",
  authDomain: "glam-shop-db.firebaseapp.com",
  databaseURL: "https://glam-shop-db.firebaseio.com",
  projectId: "glam-shop-db",
  storageBucket: "glam-shop-db.appspot.com",
  messagingSenderId: "392967992327",
  appId: "1:392967992327:web:99ee7d64a0d771bd77e6a2",
  measurementId: "G-MPDP68RX1E"
};

firebase.initializeApp(config);
