// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getDatabase,
    ref,
    push,
    set,
    update,
    get,
  } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKD0q7gs2eoU_ltcYphBXB_mN4_XG24-w",
  authDomain: "library-20dde.firebaseapp.com",
  databaseURL: "https://library-20dde-default-rtdb.firebaseio.com/",
  projectId: "library-20dde",
  storageBucket: "library-20dde.appspot.com",
  messagingSenderId: "793892669347",
  appId: "1:793892669347:web:9f0d040a437a887497bc16",
  measurementId: "G-PZ184JWZ9Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);


export default database;
