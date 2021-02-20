import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyDPQe94fdD78IDmLXn4pm6Wk1-KFx64gh0",
    authDomain: "classpro-56cb3.firebaseapp.com",
    projectId: "classpro-56cb3",
    storageBucket: "classpro-56cb3.appspot.com",
    messagingSenderId: "406147145485",
    appId: "1:406147145485:web:73201688bdf29b36fc9a44"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()