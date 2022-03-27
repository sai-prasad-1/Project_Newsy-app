import React from "react";
import firebaseApp from "../firebase";
import {
  getAuth,
  
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";

const Auth = () => {
 
  return (
    <div className="container">
      <form >
        <input type="number" className="form-control" />
        <div id="recptcha-container"></div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Auth;
