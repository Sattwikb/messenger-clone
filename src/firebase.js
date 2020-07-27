import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAeOKCmGVVQ7lbT_DL0Hne27sYQVXExo98",
    authDomain: "messenger-clone-2a0fb.firebaseapp.com",
    databaseURL: "https://messenger-clone-2a0fb.firebaseio.com",
    projectId: "messenger-clone-2a0fb",
    storageBucket: "messenger-clone-2a0fb.appspot.com",
    messagingSenderId: "1017361750192",
    appId: "1:1017361750192:web:401baa2ad3aed7bddb8375",
    measurementId: "G-X0JQT9M9ZX"
});


const db = firebaseApp.firestore();

export default db;