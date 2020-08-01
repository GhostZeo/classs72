import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCst_7cwt5RagnreCxxD3Xon4SSwC0CAAM",
  authDomain: "wily-app-5399a.firebaseapp.com",
  databaseURL: "https://wily-app-5399a.firebaseio.com",
  projectId: "wily-app-5399a",
  storageBucket: "wily-app-5399a.appspot.com",
  messagingSenderId: "916432889824",
  appId: "1:916432889824:web:f4d7f415e87378cb62ad85"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
