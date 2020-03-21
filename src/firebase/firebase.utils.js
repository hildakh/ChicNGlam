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

// Got access to .auth() method by importing firebase/auth
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// bringing in a new instance of googleauthprovider class from google auth library
// which takes a set of custom parameters
const provider = new firebase.auth.GoogleAuthProvider();

// always trigger google pop up whenever we use this google auth provider
provider.setCustomParameters({ prompt: 'select_account'})

// signInWithPopup takes the provider class the we just made but it takes it from different types of pop ups including twitter
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;