import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAxSPenvAhyh08rWKzYeSqqIIKk2ici9Ms",
  authDomain: "utility-encoder-308921.firebaseapp.com",
  projectId: "utility-encoder-308921",
  storageBucket: "utility-encoder-308921.appspot.com",
  messagingSenderId: "730530963924",
  appId: "1:730530963924:web:ab01148c52b60e102f7641",
  measurementId: "G-TSML5PFW62"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;