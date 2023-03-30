import React from 'react'
import { FiFacebook, FiInstagram, FiMapPin, FiPhone, FiTwitter } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

export default function Footer() {

    return (
        <div className='flex flex-col px-[10%] py-[5%] w-full'>
            <div className='h-[2px] w-full bg-[#F4511E] mt-14'></div>
            <div className='flex py-[5%]'>
                <div className='w-[50%] flex justify-center items-center'>
                    <p className='text-5xl text-[#F4511E] '>SPICE HAVEN</p>
                </div>
                <div className='w-[50%]'>
                    <div className='w-[75%] grid grid-cols-2 gap-y-4 justify-items-stretch mb-4'>
                        <p className='text-[80%] text-[#0A142F] col-span-2'><FiMapPin className="inline-block mr-4" />University of Professional Studies • UPSA,Legon</p>
                        <p className='text-[80%] text-[#0A142F]'><FiPhone className="inline-block mr-4" />(123) 456-7890</p>
                    </div>
                    <div className='flex items-center justify-between w-[65%]'>
                        <p className='text-[80%] text-[#0A142F] opacity-[0.5]'>Social Media</p>
                        <FiFacebook className='hover:cursor-pointer'/>
                        <FiTwitter className='hover:cursor-pointer'/>
                        <FiInstagram className='hover:cursor-pointer'/>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <ul className='flex w-[50%] justify-evenly'>
                    <NavLink to='/Explore' className='uppercase'>Explore</NavLink>
                    <NavLink to='/Product' className='uppercase'>Products</NavLink>
                    <NavLink to='/Recipes' className='uppercase'>Recipes</NavLink>
                    <NavLink to='/Cart' className='uppercase'>Cart</NavLink>
                    <NavLink to='/ContactUs' className='uppercase'>CONTACT US</NavLink>
                </ul>
                <p className='text-[90%] text-[#0A142F] opacity-[0.5]'>Copyright © 2023 spicehaven. All rights reserved</p>
            </div>
        </div>
    )
}