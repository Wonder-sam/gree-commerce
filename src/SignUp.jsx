import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { NavLink, useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-number-input";

  export default function SignUp(){
    const navigate = useNavigate()
    const [fname, setFname] = React.useState('')
    const [lname, setLname] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')
    
    const handleEmail=(text)=>{
        setEmail(text)
    }
    const handlePassword=(text)=>{
        setPassword(text)
    }
    const handleFname=(text)=>{
        setFname(text)
    }
    const handleLname=(text)=>{
        setLname(text)
    }
    const handleConfirmPassword=(text)=>{
        setConfirmPassword(text)
    }
    const handlePhone=(text)=>{
        setPhone(text)
    }

    const createUser=()=>{
        console.log(email+password)
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            updateProfile(user,
                {
                    displayName: fname+" "+lname
                }
            )
            navigate('/SignIn')
            // ...
        })
        .catch((error) => {
            setErrorMessage(error.message);
            // ..
        });
    }

    return(
        <div className="w-full bg-[#55F45155] h-fit md:h-screen flex flex-col justify-center items-center">
            <div className="w-[90%] lg:w-[85%] bg-white drop-shadow-xl rounded-md overflow-hidden flex  my-4 md:my-0">
                <div className="w-[40%] h-full bg-[#F4511EDA] hidden md:block">
                </div>
                <div className="w-full md:w-[60%] h-full flex flex-col justify-center py-10">
                    <div className="w-fit self-center text-center mb-12">
                        <p className="text-3xl font-bold">Create Account</p>
                        <p className="text-[gray]">Corazon indomable</p>
                    </div>
                    <p>{errorMessage}</p>
                    <div className="w-full self-center flex flex-col items-start pl-[10%] pr-[10%]">
                        <div className="block md:flex w-full">
                            <div className="w-full md:w-[50%]">
                                <p className="self-start uppercase text-sm font-medium text-[#F4511E]">Last Name:</p>
                                <input type='email' onChange={(text)=>handleLname(text.target.value)} className="w-[95%] h-10 mb-6 rounded-md border border-[gray] focus:outline-blue-500" />
                            </div>
                            <div className="w-full md:w-[50%]">
                                <p className="self-start uppercase text-sm font-medium text-[#F4511E]">First Name(s):</p>
                                <input type='email'  onChange={(text)=>handleFname(text.target.value)} className="w-[95%] h-10 mb-6 rounded-md border border-[gray] focus:outline-blue-500" />
                            </div>
                        </div>
                        <div className="w-full block md:flex">
                            <div className="w-full md:w-[50%]">
                                <p className="self-start uppercase text-sm font-medium text-[#F4511E]">Email:</p>
                                <input type='email' value={email}onChange={(text)=>handleEmail(text.target.value)} className="w-[95%] h-10 mb-6 rounded-md border border-[gray] focus:outline-blue-500" />
                            </div>
                            <div className="w-full md:w-[50%]">
                                <p className="self-start uppercase text-sm font-medium text-[#F4511E]">Phone:</p>
                                <PhoneInput
                                    defaultCountry="GH"
                                    className="border border-[gray] w-[95%] h-10 focus:outline-0  outline-0 rounded-md pl-4 mb-6"
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={(text)=>handlePhone(text)}
                                />
                            </div>
                        </div>
                        <div className="w-full block md:flex">
                            <div className="w-full md:w-[50%]">
                                <p className="self-start uppercase text-sm font-medium text-[#F4511E]">Password:</p>
                                <input type='password' onChange={(text)=>handlePassword(text.target.value)} className="w-[95%] h-10 mb-6 rounded-md border border-[gray] focus:outline-blue-500"  />
                            </div>
                            <div className="w-full md:w-[50%]">
                                <p className="self-start uppercase text-sm font-medium text-[#F4511E]">Confirm Password:</p>
                                <input type='password' onChange={(text)=>handleConfirmPassword(text.target.value)} className="w-[95%] h-10 mb-6 rounded-md border border-[gray] focus:outline-blue-500"  />
                            </div>
                        </div>
                        <button onClick={()=>createUser()} className=" self-center bg-[#F4511E] py-3 w-full md:w-[48%] drop-shadow-md rounded-md md:mt-8 font-medium text-white tracking-widest">Create Account</button>
                        <p className="text-sm text-[gray] self-center">By creating an account, you're agreeing to the <span className='text-blue-600 font-medium'>terms</span> and <span className='text-blue-600 font-medium'>conditions</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
  }