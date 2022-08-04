import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
     apiKey: "AIzaSyBKsjC-vHCsSGR4obyN8igcTVSqaUkaBTo",
     authDomain: "fooddelivery-2c1b9.firebaseapp.com",
     databaseURL: "https://fooddelivery-2c1b9-default-rtdb.firebaseio.com",
     projectId: "fooddelivery-2c1b9",
     storageBucket: "fooddelivery-2c1b9.appspot.com",
     messagingSenderId: "792368782372",
     appId: "1:792368782372:web:8ffa29d45845be20a5ccb1"
};
const app = getApp.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app)
const storage = getStorage(app)

export {app, firestore, storage}
