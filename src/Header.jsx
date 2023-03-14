import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Header () {
    const sideMenu = React.useRef(null)
    const activeClassName = "underline font-[SatoshiVariable] decoration-[#F4511E] text-[#F4511E] underline-offset-[13px] decoration-2"
    const inactiveClassName = "font-[SatoshiRegular]"
    const activeIcon = "text-[#F4511E]"
    const inactiveIcon = "text-black"
    const openMenu=()=>{
        sideMenu.current.classList.remove("hidden")
    }
    const closeMenu=()=>{
        sideMenu.current.classList.add("hidden")
    }
    return (
        <div className='w-full flex flex-col'>
            <div className="w-full md:w-[80%] py-8 px-4 md:px-0 z-[2] text-xl self-center flex border-b justify-between items-center border-white border-solid">
                <div onClick={()=>openMenu()}>
                    <p>🍫</p>
                </div>
                <div className="bg-[#F4511E] flex w-fit md:w-[20%] p-4 justify-center rounded-xl">
                    <p className="w-full md:w-[90%] font-[SatoshiBold] text-white text-xl">Gree-Commerce</p>
                </div>
                <ul className="hidden md:flex w-[40%] justify-between items-end text-black mr-[5%]">
                    <li><NavLink to="Explore" className={({isActive})=>isActive? activeClassName: inactiveClassName}>Explore</NavLink></li>
                    <li><NavLink to="Product" className={({isActive})=>isActive? activeClassName: inactiveClassName}>Products</NavLink></li>
                    <li><NavLink to="News" className={({isActive})=>isActive? activeClassName: inactiveClassName}>News</NavLink></li>
                    <li><NavLink to="ContactUs" className={({isActive})=>isActive? activeClassName: inactiveClassName}>Contact Us</NavLink></li>
                </ul>
                <ul className="flex w-[7%] justify-between items-end text-black mr-[5%] ">
                    <li><NavLink to="Cart" className={({isActive})=>isActive? activeIcon: inactiveIcon}><i className='book'>cart</i></NavLink></li>
                    <li><NavLink to="Notification" className={({isActive})=>isActive? activeIcon: inactiveIcon}><i className='book'>bell</i></NavLink></li>
                </ul>
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
                </ul> 
            </div>
            <Outlet />
        </div>
    )
}