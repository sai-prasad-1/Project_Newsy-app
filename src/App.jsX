import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import News from "./components/News"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>

          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={
          <>
          <Navbar/>
          <News/>
          </>
          }/>
      </Routes>
      </BrowserRouter>

        
      </div>
  )
}

export default App
