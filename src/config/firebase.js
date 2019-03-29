import firebase from 'firebase';
//require('firebase/firestore');

const config = {
  apiKey: "AIzaSyAyA_Dg0K2UUJP_KWj9JnxDJS8pbRLugqY",
  authDomain: "vem-har-betalat.firebaseapp.com",
  databaseURL: "https://vem-har-betalat.firebaseio.com",
  projectId: "vem-har-betalat",
  storageBucket: "vem-har-betalat.appspot.com",
  messagingSenderId: "896550036871"
};

firebase.initializeApp(config);

export default firebase;
