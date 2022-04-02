import { initializeApp } from "firebase/app";
import "firebase/auth"
import { GoogleAuthProvider,getAuth,signInWithPopup, } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
initializeApp({
  apiKey: "AIzaSyCAVPU3lHWdV79tHeX727XBB45HTxYPOOI",
  authDomain: "newsy-8b996.firebaseapp.com",
  databaseURL: "https://newsy-8b996-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "newsy-8b996",
  storageBucket: "newsy-8b996.appspot.com",
  messagingSenderId: "84859321522",
  appId: "1:84859321522:web:71ef8ad99d2d5293369dab",
  measurementId: "G-GBH0H9NRX5"
});


export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth,provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    console.log(result);
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.email;
    console.log(error);
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log(credential);
  });

}

