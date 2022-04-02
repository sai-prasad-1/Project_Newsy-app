import { LockClosedIcon } from "@heroicons/react/solid";
import {
  AiOutlineGithub,
  AiOutlineGoogle,
  AiOutlineTwitter,
} from "react-icons/ai";
import { signInWithGoogle } from "../services/firebase";
export default function Login() {
  return (
    <>
      <div className="min-h-[100vh] bgg flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overlay-black ">
        <div className=" w-full flex flex-col justify-center items-center space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="h-[50%] bg-white rounded-md w-[90%] md:w-[380px] p-6 shadow-lg">
            <form className="mt-8 space-y-6" action="#" method="POST">
              <input type="hidden" name="remember" defaultValue="true" />
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
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <h2 className="flex justify-items-start items-center text-gray-500  mt-2 mb-2 font-semibold">
                    Password:
                  </h2>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div> */}

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
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                      aria-hidden="true"
                    />
                  </span>
                  Sign in
                </button>
              </div>
            </form>
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
          </div>
        </div>
      </div>
    </>
  );
}
