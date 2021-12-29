//import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: 'AIzaSyDkqCHaDvbOy7xYjUj-z2BLEpgCRpPRWiI',
  authDomain: 'blog-website-6ed57.firebaseapp.com',
  projectId: 'blog-website-6ed57',
  storageBucket: 'blog-website-6ed57.appspot.com',
  messagingSenderId: '360322529331',
  appId: '1:360322529331:web:6d033ac10edbf038144b46',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
