import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAyA_Dg0K2UUJP_KWj9JnxDJS8pbRLugqY",
  authDomain: "vem-har-betalat.firebaseapp.com",
  databaseURL: "https://vem-har-betalat.firebaseio.com",
  projectId: "vem-har-betalat",
  storageBucket: "vem-har-betalat.appspot.com",
  messagingSenderId: "896550036871"
};

const fire = firebase.initializeApp(config);

export default fire;
