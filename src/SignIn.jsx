import React from "react";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from "./firebase";
import { NavLink, useNavigate } from "react-router-dom";
import google from './assets/google.png'
import login from './assets/login.jpg'

export default function SignIn() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')
    const navigate = useNavigate();

    const handleEmail=(text)=>{
        setEmail(text)
    }
    const handlePassword=(text)=>{
        setPassword(text)
    }

    const signIn=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            navigate('/Explore')
            // ...
        })
        .catch((error) => {
            setErrorMessage(error.message);
        });
    }
    
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

    const signInWithGoogle=()=>{
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            navigate('/Explore')
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    
    return(
        <div className="w-full bg-[#55F45155] h-screen flex flex-col justify-center items-center">
            <div className="w-[90%] lg:w-[65%] h-fit bg-white drop-shadow-xl rounded-md overflow-hidden flex border border-gray-300 elevation-2">
                <div className="w-[50%] h-full bg-[#F4511EDA] hidden md:block">
                    <img src={login} className='object-cover h-[110%] w-full relative bottom-4'/>
                </div>
                <div className="w-full md:w-[50%] h-full py-8 flex flex-col justify-center">
                    <div className="w-fit self-center text-center mb-12">
                        <p className="text-4xl font-bold">Login</p>
                        <p className="text-[gray]">Corazon indomable</p>
                    </div>
                    <p>{errorMessage}</p>
                    <div className="w-full self-center flex flex-col items-center">
                        <p className="self-start uppercase text-sm ml-[7.5%] md:ml-[17.5%] font-medium text-[#F4511E]">Email:</p>
                        <input type='email' onChange={(text)=>handleEmail(text.target.value)} className="w-[85%] md:w-[65%] h-10 mb-6 rounded-md border border-[gray] focus:outline-blue-500" />
                        <p className="self-start uppercase text-sm  ml-[7.5%] md:ml-[17.5%] font-medium text-[#F4511E]">Password:</p>
                        <input type='password' onChange={(text)=>handlePassword(text.target.value)} className="w-[85%] md:w-[65%] h-10 mb-2 rounded-md border border-[gray] focus:outline-blue-500"  />
                        <p className="self-end text-sm mr-[17.5%] text-[gray]">Forgotten Password?</p>
                        <button onClick={()=>signIn()} className="bg-[#F4511E] py-3 w-[85%] md:w-[65%] drop-shadow-md rounded-md mt-8 font-medium text-white tracking-widest">Login</button>
                        <p className="text-sm text-[gray]">Don't have an account? <NavLink to="/SignUp" className='text-blue-600 font-medium'>Sign Up</NavLink></p>
                        <div className="flex items-center mt-6 bg-gray-300 rounded-md p-2 px-4">
                            <img src={google} alt='google' className="w-8, h-8 mr-2"/>
                            <p className="text-sm font-medium" onClick={()=>signInWithGoogle()}>Sign in with Google</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}