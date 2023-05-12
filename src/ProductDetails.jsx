import React from 'react'
import { useLoaderData, useOutletContext } from 'react-router-dom'

export default function ProductDetails(){
    const product = useLoaderData();
    const [quantity, setQuantity] = React.useState(1)
    const [cartCount, setCartCount] = useOutletContext();
    const [displayImage, setDisplayImage] = React.useState(product.images[0])

    const increment=()=>{
        setQuantity(quantity+1)
    }

    const decrement=()=>{
        if(quantity !== 1){
            setQuantity(quantity-1)
        }
    }

    const addToCart=()=>{
        var obj ={ 
          'name': product.name,
          'images': product.images,
          'price': product.price,
          'description': product.description,
          'quantity': 1
        }
        if(localStorage.getItem('cart')!==null){
            let old = JSON.parse(localStorage.getItem('cart'))
            old.push(obj)
            localStorage.setItem('cart',JSON.stringify(old))
          }
          else {
            let newc = [obj]
            localStorage.setItem('cart',JSON.stringify(newc))
        }
        setCartCount(cartCount+1)
      }

    return(
        <div className='w-full flex flex-col items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] md:shadow-[0px_0px_15px_rgba(217,225,244,0.76)] gap-x-6 gap-y-6 md:p-[2%] mb-8 p-2 overflow-hidden'>
                <div className=''>
                    <img src={displayImage} className='object-cover w-full aspect-square' alt=""/>
                </div>
                <div className='w-full'>
                    <p className='text-4xl font-medium mb-4'>{product.name}</p>
                    <p className='text-xl leading-[2em]'>Description</p>
                    <p className='font-light mb-4'>{product.description}</p>
                    <div className='flex overflow-y-hidden overflow-x-scroll h-[20vw] md:h-[10vw] scrollbar-hide items-center mb-4'>
                        {
                            product.images.map((image,index)=>(
                                <div key={index} onClick={()=>setDisplayImage(image)} className='w-[100%] grow-0 basis-1/4 aspect-square mr-[3%] border border-gray-400 rounded-md overflow-hidden'>
                                    <img src={image} className='w-full h-full object-cover' alt=""/>
                                </div>
                            ))
                        }
                        
                        {/* <div className='w-[100%] aspect-square mr-[3%] border border-gray-400 rounded-md overflow-hidden'>
                            <img src={spice3} className='w-full object-cover' alt="" />
                        </div>
                        <div className='w-[100%] aspect-square mr-[3%] border border-gray-400 rounded-md overflow-hidden'>
                            <img src={spice4} className='w-full object-cover' alt="" />
                        </div>
                        <div className='w-[100%] aspect-square mr-[3%] border border-gray-400 rounded-md overflow-hidden'>
                            <img src={spice4} className='w-full object-cover' alt="" />
                        </div> */}
                    </div>
                    <div className='flex items-center mb-4'>
                        <p className='font-medium text-2xl'>¢{product.price*quantity}</p>
                        <div className='flex my-2'>
                            <div onClick={()=>decrement()} className='w-[2em] flex justify-center items-center aspect-square hover:cursor-pointer'>-</div>
                            <div className='w-[2em] flex justify-center items-center aspect-square border rounded-md border-blue-500'>{quantity}</div>
                            <div onClick={()=>increment()} className='w-[2em] flex justify-center items-center aspect-square hover:cursor-pointer'>+</div>
                        </div>
                    </div>
                    <button onClick={()=>addToCart()} className='w-[100%] md:w-[50%] p-6 md:p-3 text-white text-2xl md:text-lg lg:text-base bg-[#F4511E] rounded-md'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}