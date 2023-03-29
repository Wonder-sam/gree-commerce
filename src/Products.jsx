import React from 'react'
import { useLoaderData, useLocation, useOutletContext} from 'react-router-dom'
import { categories } from './dummydata';
import FilterDrawer from './FilterDrawer';

export default function Products () {
    const loadedProducts = useLoaderData();
    const filter = React.useRef(null)
    const [start, setStart] = React.useState(0)
    const [end, setEnd] = React.useState(9)
    const [page, setPage] = React.useState(1)
    const [products, setProducts] = React.useState([])
    const [fiterResult, setFilterResult] = useOutletContext();

    React.useEffect(()=>{
        setProducts(fiterResult.length==0?loadedProducts:fiterResult)
    })
    
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

    return (
        <div className='w-full md:shadow-[0px_0px_15px_rgba(217,225,244,0.76)] grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 md:p-[2%] mb-8'>
            {
                products.slice(start,end).map((product, index)=>(
                    <div key={index} className='border border-grey h-fit rounded-xl overflow-hidden shadow-[0px_0px_10px_rgba(217,225,244,0.76)]'>
                        <div className='w-full'>
                            <img src={product.image} alt={product.name} className="object-cover w-full aspect-square " />
                        </div>
                        <div className='p-2'>
                            <p className='font-medium'>{product.name}</p>
                            <p></p>
                            <p className='text-[18px] font-bold text-[#F4511E]'>¢{product.price}</p>
                        </div>
                    </div>
                ))
            }
            <div className='col-span-full flex h-[4w] justify-center items-center overflow-hidden' >
                <div onClick={()=>prev()} className=' rounded-l-md text-white font-medium flex items-center justify-center w-[4vw] aspect-square bg-orange-400 hover:scale-[1.1] hover:cursor-pointer'>Prev</div>
                <div className='font-medium flex items-center justify-center w-[4vw] aspect-square bg-gray-300'>{page}</div>
                <div onClick={()=>next()} className='rounded-r-md text-white font-medium flex items-center justify-center w-[4vw] aspect-square bg-orange-600 hover:scale-[1.1] hover:cursor-pointer'>Next</div>
            </div>
        </div>
    )
}