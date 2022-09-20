// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAxBd2LfhrCJy4gq8v9rJHF9vtKJlFwpX0",
    authDomain: "proyecto-react-fd00e.firebaseapp.com",
    projectId: "proyecto-react-fd00e",
    storageBucket: "proyecto-react-fd00e.appspot.com",
    messagingSenderId: "580609616874",
    appId: "1:580609616874:web:7570cf5d5b3fcff3b02093"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)