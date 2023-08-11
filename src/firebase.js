import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwWAqjXD5u-hujA2rIUZYZmmtjO1e_i_8",
  authDomain: "facebook-ccbe0.firebaseapp.com",
  projectId: "facebook-ccbe0",
  storageBucket: "facebook-ccbe0.appspot.com",
  messagingSenderId: "831881220903",
  appId: "1:831881220903:web:87dc4c9daf1493603bcf02",
  measurementId: "G-HDVJMH8T9L"
};

//connecting frontend to backend

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
