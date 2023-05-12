import React from 'react'
import {  useLoaderData, useNavigate, useOutletContext} from 'react-router-dom'
import {MdAddShoppingCart} from 'react-icons/md'

export default function Products () {
    // const here = useLocation();
    const navigate = useNavigate();
    // const paths = here.pathname.split('/')
    const loadedProducts = useLoaderData();
    const [start, setStart] = React.useState(0)
    const [end, setEnd] = React.useState(9)
    const [page, setPage] = React.useState(1)
    const [products, setProducts] = React.useState([])
    const {filterResult, cartCount, setCartCount} = useOutletContext();

    React.useEffect(()=>{
        setProducts(filterResult.length===0?loadedProducts:filterResult)
    },[filterResult,loadedProducts])
    
    const next=()=>{
        if(end<products.length){
            setStart(end)
            setEnd(end+9)
            setPage(page+1)
        }
    }
    const prev=()=>{
        if(start!==0){
            setStart(start-9)
            setEnd(end-9)
            setPage(page-1)
        }
    }

    const addToCart=(num)=>{
      var obj ={ 
        'name': products[num].name,
        'images': products[num].images,
        'price': products[num].price,
        'description': products[num].description,
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

    return (
        <div className='w-full h-max md:shadow-[0px_0px_15px_rgba(217,225,244,0.76)] grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-8 gap-y-8 md:p-[2%] mb-8'>
            {
                products.slice(start,end).map((product, index)=>(
                    // <Link key={index} to={`/Product/spices/${product.category}/${product.name}`}>
                        <div key={index} className='h-[100%] flex flex-col items-center pb-2 bg-white w-[44vw] md:w-[28vw] lg:w-[21vw] border border-grey h-fit rounded-xl overflow-hidden shadow-[0px_0px_10px_rgba(217,225,244,0.76)]'>
                            <div onClick={()=>{navigate(`/Product/spices/${product.category}/${product.name}`)}} className='w-full'>
                                <img src={product.images[0]} alt={product.name} className="object-cover w-full aspect-square " />
                            </div>
                            <div onClick={()=>{navigate(`/Product/spices/${product.category}/${product.name}`)}} className='p-2 w-full'>
                                <p className='font-medium'>{product.name}</p>
                                <p className='truncate mb-2'>{product.description}</p>
                                <p className='text-[20px] font-bold text-[#F4511E]'>¢{product.price}</p>
                            </div>
                            <button onClick={()=>addToCart(index)} className=' w-[90%] p-2 bg-[#F4511E] text-white rounded-md'>
                                <MdAddShoppingCart className='mr-2 inline-block'/> Add to Cart
                            </button>
                        </div>
                ))
            }
            <div className='col-span-full flex h-[4w] justify-center items-center overflow-hidden' >
                <div onClick={()=>prev()} className=' rounded-l-md text-white font-medium flex items-center justify-center w-[15%] sm:w-[10%] xl:w-[7%] aspect-square bg-orange-400 hover:scale-[1.1] hover:cursor-pointer hover:rounded-l-xl'>Prev</div>
                <div className='font-medium flex items-center justify-center w-[15%] sm:w-[10%] xl:w-[7%] aspect-square bg-gray-300'>{page}</div>
                <div onClick={()=>next()} className='rounded-r-md text-white font-medium flex items-center justify-center w-[15%] sm:w-[10%] xl:w-[7%] aspect-square bg-orange-600 hover:scale-[1.1] hover:cursor-pointer hover:rounded-r-xl'>Next</div>
            </div>
        </div>
    )
}