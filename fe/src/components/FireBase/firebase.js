import { initializeApp } from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/firestore';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBrXa_ONZPcQdJJu_3XGYPKBIgoA9Axwno',
  authDomain: 'arvanthea-83284.firebaseapp.com',
  projectId: 'arvanthea-83284',
  storageBucket: 'arvanthea-83284.appspot.com',
  messagingSenderId: '1082952202551',
  appId: '1:1082952202551:web:6b62e3db52ce795fb942b2',
  measurementId: 'G-NL4JCMHRMM',
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export default firebase;
