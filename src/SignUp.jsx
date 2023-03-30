import React from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom";
import 'react-phone-number-input/style.css'
import PhoneInput from "react-phone-number-input";
import { FiX } from "react-icons/fi";
import login from './assets/login.jpg'

  export default function SignUp(){
    const navigate = useNavigate()
    const [fname, setFname] = React.useState('')
    const [lname, setLname] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [confirmPassword, setConfirmPassword] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [errorMessage, setErrorMessage] = React.useState('')
    const terms = React.useRef(null)
    
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
        if(password=== confirmPassword){
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
        else{
            setErrorMessage('Passwords dont match');
        }
    }

    const showTerm=()=>{
        terms.current.classList.remove('hidden')
    }

    const closeTerms=()=>{
        terms.current.classList.add('hidden')
    }

    return(
        <div className="w-full bg-[#55F45155] h-fit md:h-screen flex flex-col justify-center items-center">
            <div className="w-[90%] lg:w-[85%] bg-white drop-shadow-xl rounded-md overflow-hidden flex  my-4 md:my-0">
                <div className="w-[40%] h-full bg-[#F4511EDA] hidden md:block">
                    <img src={login} className='object-cover h-[110%] w-full relative bottom-4' alt=""/>
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
                        <p className="text-sm text-[gray] self-center">By creating an account, you're agreeing to the <span onClick={(()=>showTerm())} className='text-blue-600 font-medium'>terms</span> and <span onClick={(()=>showTerm())} className='text-blue-600 font-medium'>conditions</span></p>
                    </div>
                </div>
            </div>
            <div ref={terms} className=" hidden absolute top-0 w-full md:w-[60%] bg-white p-8 my-4 mb-4 h-[95vh] overflow-y-scroll">
                <FiX className="absolute right-2 text-3xl top-2" onClick={()=>closeTerms()}/>
                <p className="font-bold text-2xl uppercase mb-4">Terms and conditions</p>
                <p>Welcome to Spice Haven These terms and conditions govern your use of our website and your purchases from us. By using our website and making purchases from us, you agree to these terms and conditions. Please read them carefully.</p>
                <p className="font-medium text-lg mt-2">General Information</p>
                <p>Spice Haven is an online store that sells spices and spice blends. Our website is   https://wonder-sam.github.io/spice-haven/Explore. By accessing or using our website, you agree to be bound by these terms and conditions, which govern the use of our website and the sale of our products.</p>
                <p className="font-medium text-lg mt-2">Orders and Payment</p>
                <p>All orders placed on our website are subject to acceptance. We reserve the right to reject or cancel any order for any reason. Payment for orders must be made in full before the order is shipped. We accept payments through mobilemoney mobile banking and Visa card.</p>
                <p className="font-medium text-lg mt-2">Shipping</p>
                <p>We ship our products to customers in the country. We offer standard and express shipping options. Shipping rates and delivery times vary depending on the shipping method selected and the destination. We are not responsible for any customs or import duties that may be imposed by the destination country. </p>
                <p className="font-medium text-lg mt-2">Returns and Refunds</p>
                <p>We want you to be completely satisfied with your purchase. If for any reason you are not satisfied with your order, you may return it within +233 20 816 2135 days of receipt for a refund or exchange. The products must be in their original condition and packaging. Shipping fees are non-refundable. Please contact us at contact@spicehaven.com to initiate a return. </p>
                <p className="font-medium text-lg mt-2">Product Information</p>
                <p>We make every effort to ensure that the information on our website is accurate and up-to-date. However, we cannot guarantee the accuracy or completeness of the information, and we are not responsible for any errors or omissions. The products displayed on our website may vary in appearance from the actual products. </p>
                <p className="font-medium text-lg mt-2">Intellectual Property</p>
                <p>All content on our website, including text, images, logos, and graphics, is the property of Spice Haven and is protected by copyright law. You may not reproduce, distribute, or modify any content on our website without our written consent. </p>
                <p className="font-medium text-lg mt-2">Limitation of Liability</p>
                <p>We are not liable for any damages, including but not limited to direct, indirect, incidental, or consequential damages, arising from the use of our website or the purchase of our products. We are not responsible for any loss or damage that may occur during shipping or as a result of customs or import duties. </p>
                <p className="font-medium text-lg mt-2">Governing Law</p>
                <p>These terms and conditions are governed by the laws of Accra, Ghana, without regard to its conflict of law provisions. Any dispute arising from these terms and conditions will be resolved in the courts of Accra, Ghana. </p>
                <p className="font-medium text-lg mt-2">Changes to Terms and Conditions</p>
                <p>We reserve the right to modify these terms and conditions at any time without notice. Your continued use of our website and your purchases from us constitute your acceptance of the modified terms and conditions. </p>
                <p className="mt-4">Thank you for choosing SpiceHaven!</p>
            </div>
        </div>
    )
  }
