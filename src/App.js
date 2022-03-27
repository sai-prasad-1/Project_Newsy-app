
import './App.css';
import auth  from "firebase/app";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Auth from './components/Auth';


export default class App extends Component {
  
  render() {
    // const authi = firebase.auth();
    return (
      <div>
        {/* <Auth/> */}
        <Navbar/>
        <News/>
      </div>
    )
  }
}
