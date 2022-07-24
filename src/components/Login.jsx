import { LockClosedIcon } from "@heroicons/react/solid";
import { useEffect, useRef } from "react";
import { Auth } from "../context/AuthContext";
import {
  AiOutlineGithub,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { signInWithGoogle } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { Alert } from "bootstrap";

function SignIn() {
  const passwordRef =useRef();
  const passwordConfirmRef =useRef();
const emailRef =useRef()
const {signUp,currentUser} =Auth()
const navigate = useNavigate();

useEffect(()=>{
if(currentUser){
  navigate("/home")
}
else{
  navigate("/")
}},[currentUser])




function handleSubmit(){
  if(passwordRef.current.value===passwordConfirmRef.current.value){
 
  signUp(emailRef.current.value,passwordRef.current.value)
  console.log(emailRef.current.value,passwordRef.current.value);
  emailRef.current.value=''
  passwordRef.current.value=''
  passwordConfirmRef.current.value=''}
 
  else{
    alert("password not match")
  }
}
  return (
    <>
      
          <div>
            <h2 className="mt-6 text-center md:text-3xl text-xl font-extrabold text-gray-900">
              Sign Up to your account
            </h2>
          </div>
          <div className="h-[50%] bg-white rounded-md w-[90%] md:w-[380px] p-6 shadow-lg">
           
            <div className="mt-8 space-y-6" >
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  
                  <h2 className="flex justify-items-start items-center mt-2 mb-2 text-gray-500 font-semibold">
                    Email address:
                  </h2>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    
                    type="email"
                    autoComplete="email"
                    required
                    ref={emailRef}
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <h2 className="flex justify-items-start items-center text-gray-500  mt-2 mb-2 font-semibold">
                    Password:
                  </h2>
                  
                  <input
                    id="password"
                    
                    type="password"
                    ref={passwordRef}
                    autoComplete="current-password"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <h2 className="flex justify-items-start items-center text-gray-500  mt-2 mb-2 font-semibold">
                    Confirm Password:
                  </h2>
                  
                  <input
                    id="passwordConfirm"
                    
                    type="password"
                    ref={passwordConfirmRef}
                    autoComplete="current-password"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Confirm Your Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    
                    />
                  </span>
                  Sign Up
                </button>
              </div>
            </div>
            
            <div className="md:text-base text-xs flex justify-center items-center p-1  mt-5 mb-3 text-gray-500">
              <span className="md:w-[30%] w-[20%] h-[1px] bg-gray-300  m-1"></span>{" "}
              Or contiue with{" "}
              <span className="w-[30%] h-[1px] bg-gray-300 m-1"></span>
            </div>
            <div className="flex justify-between items-center">
              <button
                className="md:w-[100px] w-[90px] m-2 h-9 border-2 border-solid text-gray-500 hover:text-black 
            hover:shadow-md shadow border-gray-300 rounded-md flex justify-center items-center"
                
              >
                <AiOutlineGithub fontSize={26} />
              </button>
              <button
                className="md:w-[100px] w-[90px] m-2 h-9 border-2 border-solid border-gray-300 text-gray-500 hover:text-black 
            hover:shadow-md shadow rounded-md flex justify-center items-center"
            onClick={()=>{signInWithGoogle()}}
              >
                <AiOutlineGoogle fontSize={26} />
              </button>
              <button
                className="md:w-[100px] w-[90px] m-2 h-9 border-2 border-solid border-gray-300 text-gray-500 hover:text-black 
            hover:shadow-md shadow rounded-md flex justify-center items-center"
              >
                <AiOutlineTwitter fontSize={26} />
              </button>
            </div>
            <div className="text-sm flex justify-center items-center">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                     <span className="text-black">have an account?</span> SignUp
                  </a>
                </div>
          </div>
       
    </>
  );
}



export default function Login(){
  return(
    <div className="min-h-[100vh] bgg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overlay-black ">
        <div className=" w-full flex flex-col justify-center items-center space-y-8">
  <SignIn/>
  </div>
  </div>
  
  )
}