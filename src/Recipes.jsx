import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

export default function Recipes (){
    const recipes = useLoaderData();
    return (
        <div className='w-full px-[5%]'>
            <div className='mt-8 pb-8'>
                <p className='font-[SatoshiVariable] text-[600] font-medium text-[#F4511E] md:text-lg xl:text-3xl mb-4'>RECIPES</p>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-8'>
                {
                    recipes.map((recipe,index)=>(
                    <Link to={`/Recipes/${index}`} key={index}  >
                        <div className='h-[100%] pb-2 bg-white w-[42vw] md:w-[28vw] lg:w-[21vw] rounded-lg overflow-hidden border border-gray shadow-[0px_0px_10px_rgba(217,225,244,0.76)]'>
                        <img src={recipe.image} className="object-cover w-full aspect-square md:h-[25vw] lg:h-[21vw] xl:h-[20vw] shrink-0 grow-0" alt=''/>
                        <div className="px-2 py-2 overflow-hidden text-ellipsis">
                            <p className='h-[1.7em] font-[SatoshiVariable] text-[600] truncate'>{recipe.title}</p>
                            <p className=' text-xs sm:text-sm font-[SatoshiRegular] w-[10em] h-[3em] italic w-full truncate '>{recipe.ingredients}</p>
                        </div>
                        </div>
                    </Link>
                    ))
                }
                </div>
            </div>
        </div>
    )
}