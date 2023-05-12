import React from 'react'
import { useOutletContext } from 'react-router-dom'
import {FiShoppingCart, FiTrash} from 'react-icons/fi'

export default function MyCart() {
    const [cartData, setCartData] = React.useState([])
    const [count, setCount] = React.useState(0)
    const [cartCount, setCartCount] = useOutletContext();

    React.useEffect(()=>{
        if(localStorage.getItem('cart')!==null)
            setCartData(JSON.parse(localStorage.getItem('cart')))
    },[cartData])

    const increment=(val)=>{
        cartData[val].quantity += 1
        localStorage.setItem('cart', JSON.stringify(cartData))
        setCount(count+1)
    }

    const decrement=(val)=>{
        if(cartData[val].quantity !== 1){
            cartData[val].quantity -= 1
            localStorage.setItem('cart', JSON.stringify(cartData))
            setCount(count-1)
        }
    }

    const remove=(num)=>{
        let old = JSON.parse(localStorage.getItem('cart'))
        old.splice(num, 1)
        localStorage.setItem('cart',JSON.stringify(old))
        setCartCount(cartCount-1)
      }

    return (
        <div className='w-full md:w-[90%] px-4 md:p-0 self-center'>
            <div className='w-full mb-4'>

                <p className='text-3xl'><FiShoppingCart className='inline-block mr-4'/>My Cart</p>
            </div>
            <div className='w-full h-max md:shadow-[0px_0px_15px_rgba(217,225,244,0.76)] md:p-[2%] mb-8 p-2'>
                {   cartData.length!==0?
                    cartData.map((data,index)=>(
                        <>
                            <div key={index} className='w-full md:w-[95%] flex justify-between flex-nowrap items-center'>
                                <div className='w-[30vw] md:w-[10vw] aspect-square mr-[5%] md:mr-[2%]'>
                                    <img src={data.images[0]} alt=''className='object-cover w-full h-full' />
                                </div>
                                <div className='flex flex-col justify-between items-start w-[95%] overflow-hidden'>
                                    <p className='font-medium text-xl text-[#F4511E] mb-4'>{data.name}</p>
                                    <p className='w-full text-sm overflow-hidden italic truncate'>{data.description}</p>
                                    <div className='flex items-center'>
                                        <p className='font-bold text-lg'>¢{data.price*data.quantity}</p>
                                        <div className='flex my-2'>
                                            <div onClick={()=>decrement(index)} className='w-[2em] flex justify-center items-center aspect-square hover:cursor-pointer'>-</div>
                                            <div className='w-[2em] flex justify-center items-center aspect-square border rounded-md border-blue-500'>{data.quantity}</div>
                                            <div onClick={()=>increment(index)} className='w-[2em] flex justify-center items-center aspect-square hover:cursor-pointer'>+</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <FiTrash onClick={()=>remove(index)} className='ml-4 hover:cursor-pointer'/>
                                </div>
                        </div>
                            <hr className='my-6'></hr> 
                        </>  
                    ))
                    :
                    <p>Nothing to show here</p>
                }
            </div>
        </div>
    )
}