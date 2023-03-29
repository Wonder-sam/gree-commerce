import React from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import { categories, recipes } from './dummydata';

export default function FilterDrawer () {
    const here = useLocation();
    const paths = here.pathname.split('/')
    const gingerCheck = React.useRef(null);
    const garlicCheck = React.useRef(null);
    const waakyeCheck = React.useRef(null);
    const pepperCheck = React.useRef(null);
    const jollofCheck = React.useRef(null);
    const riceCheck = React.useRef(null);
    const beansCheck = React.useRef(null);
    const shrimpCheck = React.useRef(null);
    const deliveryCheck = React.useRef(null);
    const filter = React.useRef(null)
    const [fiterResult, setFilterResult] = React.useState([]);

    const closeFilter=()=>{
        filter.current.classList.add('hidden')
    }
    const openFilter=()=>{
        filter.current.classList.remove('hidden')
    }

    const applyfilter=()=>{
        let selected=[]

        if(gingerCheck.current.checked==true){
            selected = selected.concat(categories.find(element=>element.category=='Ginger Spices').products)
        }
        if(garlicCheck.current.checked==true){
            selected = selected.concat(categories.find(element=>element.category=='Garlic Spices').products)
        }
        if(pepperCheck.current.checked==true){
            selected = selected.concat(categories.find(element=>element.category=='Pepper Spices').products)
        }
        if(shrimpCheck.current.checked==true){
            selected = selected.concat(categories.find(element=>element.category=='Shrimp Spices').products)
        }
        if(jollofCheck.current.checked==true){
            selected = selected.concat(recipes.find(element=>element.recipe=='Jollof Rice').products)
        }
        if(riceCheck.current.checked==true){
            selected = selected.concat(recipes.find(element=>element.recipe=='Fried Rice').products)
        }
        if(beansCheck.current.checked==true){
            selected = selected.concat(recipes.find(element=>element.recipe=='Beans (Gob3)').products)
        }
        if(waakyeCheck.current.checked==true){
            selected = selected.concat(recipes.find(element=>element.recipe=='Waakye').products)
        }
        // if(deliveryCheck.current.checked==true){
        //     console.log(categories.find(element=>element.category=='Ginger Spices'))
        // }
        setFilterResult(selected)
    }

    const showValues=()=>{
        // let phone = phoneCheck.current.checked
        // let clothes = clothesCheck.current.checked
        // let wearables = wearCheck.current.checked
        // let bags = bagsCheck.current.checked
        // let delivery = deliveryCheck.current.checked
        // console.log(`${phone} ${clothes} ${wearables} ${bags} ${delivery} `)
    }
   
    return (
        <div className='w-full px-6 md:p-0 flex justify-around'>
            <div ref={filter} className='hidden md:block w-full  absolute md:static md:w-[25%] bg-white p-4 md:p-0'>
                <p className='md:hidden' onClick={()=>closeFilter()}>X</p>
                <div className='w-full'>
                    <p className='text-[24px] leading-[50px]'>Filter</p>
                    <div className='w-[100%] rounded-md border border-grey py-4 px-6 shadow-[0px_0px_15px_rgba(217,225,244,0.76)]'>
                        <p className='mt-4 text-[20px] font-medium w-full'>Category</p>
                        <hr className='my-2'></hr>
                        <p className='mt-4 text-[18px] w-full'>Spices</p>
                        <ul className='leading-[35px]'>
                            <li className='font-light'><input type="checkbox"  ref={gingerCheck} /> Ginger Spice</li>
                            <li className='font-light'><input type="checkbox" ref={garlicCheck} /> Garlic Spice</li>
                            <li className='font-light'><input type="checkbox" ref={pepperCheck} /> Pepper Spice</li>
                            <li className='font-light'><input type="checkbox" ref={shrimpCheck} /> Shrimp Spice</li>
                        </ul>
                        <p className='mt-4 text-[18px] w-full'>Recipes</p>
                        <ul className='leading-[35px]'>
                            <li className='font-light'><input type="checkbox"  ref={jollofCheck} /> Jollof</li>
                            <li className='font-light'><input type="checkbox" ref={waakyeCheck} /> Waakye</li>
                            <li className='font-light'><input type="checkbox" ref={beansCheck} /> Beans</li>
                            <li className='font-light'><input type="checkbox" ref={riceCheck} /> Fried Rice</li>
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
            <div className='w-full md:w-[70%]'>
                <div className='w-full flex justify-between leading-[20px] md:leading-[50px] mb-[4%] md:mb-0'>
                    <p className='text-[18px] font-bold text-[#F4511E]'>Products{'>'}{categories[paths[3]]?.category}</p>
                    <p onClick={()=>openFilter()} className=' md:hidden bg-gray-400 py-2 px-4 rounded-md text-center'>Filter</p>
                </div>
                <Outlet context={[fiterResult, setFilterResult]} />
            </div>
        </div>
    )
}