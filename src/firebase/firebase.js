import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC1owgZcdLddlSrQKvFm0iagNkK4fx-dcw",
  authDomain: "todo-app-57e18.firebaseapp.com",
  databaseURL: "https://todo-app-57e18.firebaseio.com",
  projectId: "todo-app-57e18",
  storageBucket: "todo-app-57e18.appspot.com",
  messagingSenderId: "688044993815",
  appId: "1:688044993815:web:b2f35eb9df80be01dbdb52",
  measurementId: "G-TL0WJYZ32X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
