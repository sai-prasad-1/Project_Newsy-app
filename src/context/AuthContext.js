import { onAuthStateChanged,createUserWithEmailAndPassword,signOut } from "firebase/auth"
import  React,{useContext, useState,useEffect} from "react"
import { auth } from "../services/firebase"
// import { useNavigate } from "react-router-dom";


export const  AuthContext = React.createContext()
export function Auth() {
  return useContext(AuthContext)
}
export function AuthProvider({children}) {
  // const navigate = useNavigate();
  const [currentUser,setCurrentUser]=useState()
  function signUp(email,password){
   return createUserWithEmailAndPassword(auth, email, password)
  }

  onAuthStateChanged(auth, user => {
    setCurrentUser(user)
  })
  
  function SignOut(){
    signOut(auth).then(() => {
      // navigate("/")
    }).catch((error) => {
      console.log(error);
      // An error happened.
    });
  }

  const value ={
    currentUser,
    signUp,
    SignOut
  }
  return (
    <AuthContext.Provider value={value}>
{children}
    </AuthContext.Provider>
  )
}
