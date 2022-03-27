import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAVPU3lHWdV79tHeX727XBB45HTxYPOOI",
  authDomain: "newsy-8b996.firebaseapp.com",
  databaseURL: "https://newsy-8b996-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "newsy-8b996",
  storageBucket: "newsy-8b996.appspot.com",
  messagingSenderId: "84859321522",
  appId: "1:84859321522:web:71ef8ad99d2d5293369dab",
  measurementId: "G-GBH0H9NRX5"
};
 const firebaseApp =firebase.initializeApp(firebaseConfig);

export default firebaseApp;