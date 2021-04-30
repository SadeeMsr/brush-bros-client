import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAkSer7hhmf6wsUJgcw-NgVp4UJnqmkfOw",
  authDomain: "brush-bros-4447a.firebaseapp.com",
  projectId: "brush-bros-4447a",
  storageBucket: "brush-bros-4447a.appspot.com",
  messagingSenderId: "769382264736",
  appId: "1:769382264736:web:ad9a8e6812f62aeba23ec5"
};

  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const gProvider = new firebase.auth.GoogleAuthProvider();

  export {auth,gProvider};