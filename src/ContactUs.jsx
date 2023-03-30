import React from 'react'

export default function ContactUs(){
    const [message, setMessage] = React.useState('')

    const handleMessage=(text)=>{
        setMessage(text)
    }
    const sendMail=()=>{
        window.open(`mailto:${"Dwnnai@gamil.com"}?subject=subject&body=${message}`);
    }

    return(
        <div className='w-full px-[5%] pb-[5%] flex flex-col items-center'>
            <p className='font-[SatoshiVariable] font-medium text-[#F4511E] md:text-lg xl:text-3xl mb-4'>Contact Us</p>
            <div className='w-full flex flex-col items-center'>
                <p className='md:text-md xl:text-2xl mb-4'>Do you have something to say?</p>
                <p className='w-full md:w-[50%]'>Have something you’d like to let us know? Whether you have a comment on a recipe or an idea to share, we would love to hear from you:</p>
                <div className='w-full md:w-[50%] mt-4'>
                    <p className="self-start uppercase text-sm font-medium text-[#F4511E]">Message:</p>
                    <textarea rows='5' onChange={(text)=>handleMessage(text.target.value)} placeholder="Enter message here..." className="w-full mb-2 p-4 rounded-md border border-[gray] focus:outline-blue-500"  />
                </div>
                <button onClick={()=>sendMail()} className='bg-[#F4511E] py-3 w-full md:w-[30%] drop-shadow-md rounded-md mt-4 font-medium text-white tracking-widest'>Submit</button>
            </div>
            <div className='w-full flex flex-col items-center'>
                <p className='md:text-md xl:text-2xl mt-8 mb-4'>Advertise With Us</p>
                <p className='w-full md:w-[50%]'>Simply Recipes offers the highest value to advertisers through a combination of scale, credibility, and intent. Interested in advertising with us? Email us at advertise@spicehaven.com or check out our media kit to learn more.</p>
            </div>
        </div>
    )
}