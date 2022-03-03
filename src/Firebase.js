import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyAXKs6WiHxMgElplh3ZC7mrxPto0D8taJ0",
  authDomain: "sem6-blac.firebaseapp.com",
  projectId: "sem6-blac",
  storageBucket: "sem6-blac.appspot.com",
  messagingSenderId: "849156578925",
  appId: "1:849156578925:web:16bade9b498b87ce6aa964",
  measurementId: "G-NFPC6RW0WS"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =  firebaseApp.firestore();
 const auth= firebase.auth()
 export{db, auth}
 export default firebase;