// importing firebase utility library
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB4Uu7LcQeFikYHn3KD8tGYO9NUZFlfcIk",
  authDomain: "my-glam-shop.firebaseapp.com",
  databaseURL: "https://my-glam-shop.firebaseio.com",
  projectId: "my-glam-shop",
  storageBucket: "my-glam-shop.appspot.com",
  messagingSenderId: "202382612290",
  appId: "1:202382612290:web:9f10c9532b88c2c2025adb",
  measurementId: "G-9MCE965PEE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // userAuth is null when the user hasn't signed in yet
  if(!userAuth) return;

  // getting the signed user uid to see if it already exists in the snapshot
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // getting displayname and email from userAuth object
  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

  // setting a new userRef in firestore for the signed in user
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating a user', error)
    }
  }
  return userRef;
}

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