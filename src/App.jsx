import React from 'react'
import Login from './components/Login'
import Navbar from './components/Navbar'
import News from "./components/News"
import { AuthProvider } from './context/AuthContext'
import { ToastContainer, toast } from 'react-toastify';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Error404 from './components/Error404'
const App = () => {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Routes>

          <Route path="/" element={<Login/>}/>
          <Route path="/*" element={<Error404/>}/>
          <Route path="/home" element={
          <>
          <Navbar/>
          <News/>
          </>
          }/>
      </Routes>
      </BrowserRouter>
      <ToastContainer />
      </AuthProvider>

        
      </div>
  )
}

export default App
