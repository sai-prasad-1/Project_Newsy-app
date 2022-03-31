
import './App.css';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import React, { Component, useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';




const App = () => {
    const [mde,setMode]=useState("dark")
    const theme = createTheme({
      palette: {
        mode: mde,
         primary: {
            main: mde==="light"?'#ff8f00':"#b71c1c"
                   },
         secondary: {
            main: mde==="light"?'#ef9a9a':"#fce4ec" //Another orange-ish color
                    }
               }
   
   })
  
 
   
    return (
      
      <div>
        <ThemeProvider theme={theme}>


        <Navbar/>
        <News/>
        
  
        </ThemeProvider>
      </div>
    )
  

    }

    export default App