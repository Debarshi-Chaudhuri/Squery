import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCXYgxupWOML-rpfJHwOlXp1kjUVFR7SaU",
    authDomain: "squery-e375a.firebaseapp.com",
    databaseURL: "https://squery-e375a.firebaseio.com",
    projectId: "squery-e375a",
    storageBucket: "squery-e375a.appspot.com",
    messagingSenderId: "145205395118",
    appId: "1:145205395118:web:d1c107a2ace411f70a373f"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;