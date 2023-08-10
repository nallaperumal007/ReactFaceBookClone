import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyocn5GHBV06TISHH8Oq6KsltCjVKhAbA",
  authDomain: "facebookclone-bf7ea.firebaseapp.com",
  projectId: "facebookclone-bf7ea",
  storageBucket: "facebookclone-bf7ea.appspot.com",
  messagingSenderId: "1035593790770",
  appId: "1:1035593790770:web:306050543a6a7349b5932b",
  measurementId: "G-2SBQ0GXDHG"
};

//connecting frontend to backend

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
