import firebase from 'firebase/app';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyD4p0wKTJOAy-qhIZvJ2nLlnjjOvql3jAc",
    authDomain: "react-lara-storage.firebaseapp.com",
    projectId: "react-lara-storage",
    storageBucket: "react-lara-storage.appspot.com",
    messagingSenderId: "775997882783",
    appId: "1:775997882783:web:b70346952c10620af23daa"
  };
  
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };