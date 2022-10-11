import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

function StartFirebase() {
  const firebaseConfig = {
    apiKey: 'AIzaSyBrXa_ONZPcQdJJu_3XGYPKBIgoA9Axwno',
    authDomain: 'arvanthea-83284.firebaseapp.com',
    projectId: 'arvanthea-83284',
    storageBucket: 'arvanthea-83284.appspot.com',
    messagingSenderId: '1082952202551',
    appId: '1:1082952202551:web:6b62e3db52ce795fb942b2',
    measurementId: 'G-NL4JCMHRMM',
  };
  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export default StartFirebase;
