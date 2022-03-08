import {  initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDWMJx-tLQEWiIwGkfdVw1TD-jrnlDcFkY",
  authDomain: "loginproject-28b6c.firebaseapp.com",
  databaseURL: "https://loginproject-28b6c-default-rtdb.firebaseio.com",
  projectId: "loginproject-28b6c",
  storageBucket: "loginproject-28b6c.appspot.com",
  messagingSenderId: "364042670685",
  appId: "1:364042670685:web:972e36f9674c8a2768b3b4"
};

export const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);

export const db = getDatabase(app);





