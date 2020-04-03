import firebase from 'firebase/app';  //basic import to access other libraries too
import 'firebase/firestore';  //for database
import 'firebase/auth'; //for authorization

const config = {
    apiKey: "AIzaSyBgLb7ZXun9mMAfQjAINZfKAzo8PeL7XyQ",
    authDomain: "crwn-db-6d78d.firebaseapp.com",
    databaseURL: "https://crwn-db-6d78d.firebaseio.com",
    projectId: "crwn-db-6d78d",
    storageBucket: "crwn-db-6d78d.appspot.com",
    messagingSenderId: "323458945994",
    appId: "1:323458945994:web:0fff7ccbed5424db977533",
    measurementId: "G-5L4RM35211"
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;