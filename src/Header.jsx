import { onAuthStateChanged, signOut } from 'firebase/auth';
import React from 'react';
import { NavLink, Outlet, useLoaderData, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

export default function Header () {
    const navigate = useNavigate();
    const sideMenu = React.useRef(null)
    const options = React.useRef(null)
    const activeClassName = "underline font-[SatoshiVariable] decoration-[#F4511E] text-[#F4511E] underline-offset-[13px] decoration-2"
    const inactiveClassName = "font-[SatoshiRegular]"
    // const activeIcon = "text-[#F4511E]"
    // const inactiveIcon = "text-white"
    const user = useLoaderData();

  

    const logout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate('/Explore')
          }).catch((error) => {
            // An error happened.
          });
    }

    const openMenu=()=>{
        sideMenu.current.classList.remove("hidden")
    }
    const closeMenu=()=>{
        sideMenu.current.classList.add("hidden")
    }

    const showOptions=()=>{
        options.current.classList.remove("hidden")
    }
    return (
        <div className='w-full flex flex-col'>
            <div className="w-full py-6 px-6 md:px-0 z-[2] text-xl self-center flex justify-between items-center">
                <div className="md:hidden" onClick={()=>openMenu()}>
                    <p>🍫</p>
                </div>
                <div className="flex w-fit p-4 sm:mr-[2%] xl:mr-[10%] ml-[2%] md:ml-[5%] justify-center rounded-xl">
                    <p className="w-full font-[SatoshiBold] text-[#F4511E] font-bold text-2xl md:text-xl">Gree-Commerce</p>
                </div>
                <ul className="hidden md:flex w-[40%] text-base justify-between items-end text-black sm:mr-[5%] xl:mr-[15%]">
                    <li><NavLink to="Explore" className={({isActive})=>isActive? activeClassName: inactiveClassName}>Explore</NavLink></li>
                    <li><NavLink to="Product" className={({isActive})=>isActive? activeClassName: inactiveClassName}>Products</NavLink></li>
                    <li><NavLink to="News" className={({isActive})=>isActive? activeClassName: inactiveClassName}>News</NavLink></li>
                    <li><NavLink to="ContactUs" className={({isActive})=>isActive? activeClassName: inactiveClassName}>Contact Us</NavLink></li>
                </ul>
                {
                    user===null?
                    <div className=' sm:hidden p-4 rounded-full bg-orange-500' />
                    :
                    null
                }
                {
                    user===null?
                    <ul className="hidden sm:flex w-fit justify-between items-end text-black mr-[5%] ">
                        <li><NavLink to="SignIn" className='border-2 border-[#F4511E] text-[#F4511E] font-[400w] p-2 px-6 text-center rounded-md'>Sign In</NavLink></li>
                    </ul>
                    :
                    <div className='mr-[5%] flex relative items-center'>
                        <p onClick={()=>showOptions()} className='w-[4.7em] h-[1.5em] text-base text-ellipsis overflow-hidden'>{user.displayName}</p>
                        <ul ref={options} className=' hidden p-4 absolute zIndex-200 top-12 right-20 w-[12vw] bg-white border rounded-md text-base shadow-[4px_4px_2px_rgba(0,0,0,0.5)]'>
                            <li><p onClick={()=>logout()}>Logout</p></li>
                        </ul>
                        <div className='bg-[#F4511E] rounded-full p-4'>
                            <p className='text-white'>{user.displayName.split(' ')[0].charAt(0)+user.displayName.split(' ')[1].charAt(0)}</p>
                        </div>
                    </div>
                }
            </div>
            <div ref={sideMenu} className='hidden z-[2] fixed top-0 w-full left-0 bottom-0 bg-white  py-16 px-8'>
                <div className="flex w-full justify-between mb-8">
                    <h4 className="w-[80%] text-left font-[STIXTwoTextBold] text-3xl sm:text-4xl text-[#333333]">Gree-Commerce.</h4>
                    <svg onClick={()=>closeMenu()} className="pointer-events-auto" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.317668 1.85151C0.216955 1.75079 0.137065 1.63123 0.0825594 1.49964C0.0280538 1.36805 1.06119e-09 1.22702 0 1.08459C-1.06119e-09 0.942158 0.0280538 0.801122 0.0825594 0.669534C0.137065 0.537946 0.216955 0.418381 0.317668 0.317668C0.418381 0.216955 0.537946 0.137065 0.669534 0.0825594C0.801122 0.0280538 0.942158 -1.06119e-09 1.08459 0C1.22702 1.06119e-09 1.36805 0.0280538 1.49964 0.0825594C1.63123 0.137065 1.75079 0.216955 1.85151 0.317668L13 11.4683L24.1485 0.317668C24.2492 0.216955 24.3688 0.137065 24.5004 0.0825594C24.6319 0.0280538 24.773 0 24.9154 0C25.0578 0 25.1989 0.0280538 25.3305 0.0825594C25.4621 0.137065 25.5816 0.216955 25.6823 0.317668C25.783 0.418381 25.8629 0.537946 25.9174 0.669534C25.9719 0.801122 26 0.942158 26 1.08459C26 1.22702 25.9719 1.36805 25.9174 1.49964C25.8629 1.63123 25.783 1.75079 25.6823 1.85151L14.5317 13L25.6823 24.1485C25.783 24.2492 25.8629 24.3688 25.9174 24.5004C25.9719 24.6319 26 24.773 26 24.9154C26 25.0578 25.9719 25.1989 25.9174 25.3305C25.8629 25.4621 25.783 25.5816 25.6823 25.6823C25.5816 25.783 25.4621 25.8629 25.3305 25.9174C25.1989 25.9719 25.0578 26 24.9154 26C24.773 26 24.6319 25.9719 24.5004 25.9174C24.3688 25.8629 24.2492 25.783 24.1485 25.6823L13 14.5317L1.85151 25.6823C1.75079 25.783 1.63123 25.8629 1.49964 25.9174C1.36805 25.9719 1.22702 26 1.08459 26C0.942158 26 0.801122 25.9719 0.669534 25.9174C0.537946 25.8629 0.418381 25.783 0.317668 25.6823C0.216955 25.5816 0.137065 25.4621 0.0825594 25.3305C0.0280538 25.1989 0 25.0578 0 24.9154C0 24.773 0.0280538 24.6319 0.0825594 24.5004C0.137065 24.3688 0.216955 24.2492 0.317668 24.1485L11.4683 13L0.317668 1.85151Z" fill="#333333"/>
                    </svg>
                </div>
                <ul className="justify-between items-end text-black leading-[4rem]">
                    <li onClick={()=>closeMenu()}><NavLink to="Explore" className={({isActive})=>isActive? activeClassName: inactiveClassName}>Explore</NavLink></li>
                    <li onClick={()=>closeMenu()}><NavLink to="Product" className={({isActive})=>isActive? activeClassName: inactiveClassName}>Products</NavLink></li>
                    <li onClick={()=>closeMenu()}><NavLink to="News" className={({isActive})=>isActive? activeClassName: inactiveClassName}>News</NavLink></li>
                    <li onClick={()=>closeMenu()}><NavLink to="ContactUs" className={({isActive})=>isActive? activeClassName: inactiveClassName}>Contact Us</NavLink></li>
                    <li><NavLink to="SignIn" className=' sm:hidden border-2 border-[#F4511E] text-[#F4511E] font-[400w] p-2 px-6 text-center rounded-md'>Sign In</NavLink></li>
                </ul> 
            </div>
            <Outlet />
        </div>
    )
}