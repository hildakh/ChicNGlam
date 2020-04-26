// importing firebase utility library
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
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