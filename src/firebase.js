import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCTecrRoU_4oRAHsTHvWk-2V2aaiMsRuC4",
    authDomain: "chat-app-17edb.firebaseapp.com",
    projectId: "chat-app-17edb",
    storageBucket: "chat-app-17edb.appspot.com",
    messagingSenderId: "845243678229",
    appId: "1:845243678229:web:c20fc186d23449d00fd81c",
    measurementId: "G-MT4QZ80QSX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  
  export { auth, db };