import { useRef, useState } from "react"
import Header from "./Header"
import validateData from "../utils/ValidateData"

const Login=()=>{
    const [isSignInForm,setIsSignInForm]=useState(true)
    const [errorMessage,setErrorMessage]=useState(null)
    const email=useRef(null)
    const password=useRef(null)

    console.log(email,password);
    
    
    

    const toggleSignInForm=()=>{
        setIsSignInForm(!isSignInForm)
    }

    const handleClickButton=(e)=>{
        e.preventDefault()
        console.log(password.current.value);
        console.log(email.current.value);

        const message=validateData(email.current.value,password.current.value)
        console.log(message);
        setErrorMessage(message)
        
    
        
    }
    return(
        <div>
            <Header/>
            <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg
            " alt="logo" />
            </div>
            <form className="absolute bg-black p-12 w-3/12 bg-opacity-80 my-36 mx-auto left-0 right-0 text-white rounded-lg">
            <h1 className="font-bold text-3xl py-4 text-white">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm ?<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-sm" />:""}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-700 rounded-sm" ref={email}/>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-sm" ref={password}/>
                <p className="py-1 bg-red text-red-500" >{errorMessage}</p>
                <button className="p-4 my-6 bg-black bg-red-700 w-full rounded-lg" onClick={handleClickButton}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
                
            </form>
        </div>
    )
}
export default Login