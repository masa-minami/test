import firebase from "firebase";
import {firebaseConfig} from "./firebaseConfig";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyAJt_ChEnoaPZOqzAMdAaJzUGzdC9HCmxM",
  authDomain: "my-first-react-app-f58f0.firebaseapp.com",
  databaseURL: "https://my-first-react-app-f58f0.firebaseio.com",
  projectId: "my-first-react-app-f58f0",
  storageBucket: "my-first-react-app-f58f0.appspot.com",
  messagingSenderId: "881165125921",
  appId: "1:881165125921:web:6474446b5292213da11660",
  measurementId: "G-YX8SNDTFTM"
};*/
export const firebaseApp = firebase.initializeApp(firebaseConfig);
