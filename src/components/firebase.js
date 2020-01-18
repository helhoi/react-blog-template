import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyCa_APZK8ZwmcxaTPV_GSXyYeAOZcpS6is",
    authDomain: "react-blog-firebase-7d030.firebaseapp.com",
    databaseURL: "https://react-blog-firebase-7d030.firebaseio.com",
    projectId: "react-blog-firebase-7d030",
    storageBucket: "react-blog-firebase-7d030.appspot.com",
    messagingSenderId: "238846679561",
    appId: "1:238846679561:web:c9ec46d2ddc1ccfbe2f6d8",
    measurementId: "G-2FFCPS77BK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase