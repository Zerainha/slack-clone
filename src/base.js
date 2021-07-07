import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBVsZtj2yHmohwtCjq_T-vY8DTKrYRiscU",
    authDomain: "slakc-clone.firebaseapp.com",
    projectId: "slakc-clone",
    storageBucket: "slakc-clone.appspot.com",
    messagingSenderId: "309206946012",
    appId: "1:309206946012:web:9ef7be1f6e9e392ccb2419",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};