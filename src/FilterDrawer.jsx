import React from 'react'
import { Outlet, useOutletContext } from 'react-router-dom';
import { categories } from './dummydata';
import {FiSearch} from 'react-icons/fi'

export default function FilterDrawer () {
    const kebabCheck = React.useRef(null);
    const chickenCheck = React.useRef(null);
    const beefCheck = React.useRef(null);
    const barbercueCheck = React.useRef(null);
    const deliveryCheck = React.useRef(null);
    const filter = React.useRef(null)
    const [filterResult, setFilterResult] = React.useState([]);
    const [cartCount, setCartCount] = useOutletContext();

    const closeFilter=()=>{
        filter.current.classList.add('hidden')
    }
    const openFilter=()=>{
        filter.current.classList.remove('hidden')
    }

    const applyfilter=()=>{
        let selected=[]

        if(kebabCheck.current.checked===true){
            selected = selected.concat(categories.find(element=>element.category==='Kebab Spices').products)
        }
        if(chickenCheck.current.checked===true){
            selected = selected.concat(categories.find(element=>element.category==='Chicken Spices').products)
        }
        if(beefCheck.current.checked===true){
            selected = selected.concat(categories.find(element=>element.category==='Beef Spices').products)
        }
        if(barbercueCheck.current.checked===true){
            selected = selected.concat(categories.find(element=>element.category==='Barbercue Spices').products)
        }
        console.log(selected)
        setFilterResult(selected)
        closeFilter()
    }

   
    return (
        <div className='w-full px-4 md:p-0 flex justify-around'>
            <div ref={filter} className='top-0 hidden md:block w-full  absolute md:static md:w-[25%] bg-white p-4 md:p-0 z-[2]'>
                <p className='md:hidden' onClick={()=>closeFilter()}>X</p>
                <div className='w-full'>
                    <p className='text-[24px] leading-[50px]'>Filter</p>
                    <div className='w-[100%] rounded-md border border-grey py-4 px-6 shadow-[0px_0px_15px_rgba(217,225,244,0.76)]'>
                        <p className='mt-4 text-[20px] font-medium w-full'>Category</p>
                        <hr className='my-2'></hr>
                        <p className='mt-4 text-[18px] w-full'>Spices</p>
                        <ul className='leading-[35px]'>
                            <li className='font-light'><input type="checkbox"  ref={kebabCheck} /> Kebab Spice</li>
                            <li className='font-light'><input type="checkbox" ref={chickenCheck} /> Chicken Spice</li>
                            <li className='font-light'><input type="checkbox" ref={beefCheck} /> Beef Spice</li>
                            <li className='font-light'><input type="checkbox" ref={barbercueCheck} /> Barbercue Spice</li>
                        </ul>
                        <p className='mt-4 text-[20px] font-medium'>Delivery</p>
                        <hr className='my-2'></hr>
                        <ul className='leading-[35px]'>
                            <li className='font-light'><input type="checkbox" ref={deliveryCheck} /> Free Delivery</li>
                        </ul>
                        <button onClick={()=>applyfilter()} className='bg-[#F4511E] text-white px-10 py-2 rounded-md mt-4'>Apply</button>
                    </div>
                </div>
            </div>
            <div className='w-full md:w-[70%] h-max'>
                <div className='w-full flex justify-between leading-[20px] md:leading-[50px] mb-[4%] md:mb-0'>
                    <div className='relative'>
                        <FiSearch className='absolute top-[50%] -translate-y-[50%] left-2'/>
                        <input type='text' placeholder='Search' className='placeholder:px-8 w-full h-[80%] rounded-md border border-[gray] focus:outline-blue-500 text-[18px]'/>
                    </div>
                    <p onClick={()=>openFilter()} className=' md:hidden bg-gray-400 py-2 px-4 rounded-md text-center'>Filter</p>
                </div>
                <Outlet context={{filterResult, setFilterResult, cartCount, setCartCount}} />
            </div>
        </div>
    )
}