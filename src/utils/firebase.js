//Firebase
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// Add the Firebase products that you want to use
import "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyDkS9Cv9XSsnIUpf0Z8HCB03HA6nejKMdQ",
  authDomain: "shoppinglist-4b1b1.firebaseapp.com",
  databaseURL: "https://shoppinglist-4b1b1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shoppinglist-4b1b1",
  storageBucket: "shoppinglist-4b1b1.appspot.com",
  messagingSenderId: "153381281118",
  appId: "1:153381281118:web:b0e5e6812d12510b7843cf",
  measurementId: "G-NF0HYQYD7Q",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

export default database;
