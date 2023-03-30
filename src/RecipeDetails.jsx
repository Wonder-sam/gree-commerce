import React from 'react'
import { useLoaderData } from 'react-router-dom'
import spice2 from './assets/spice2.jpg'
import spice3 from './assets/spice3.jpg'
import spice4 from './assets/spice4.jpg'

export default function RecipeDetails(){
    const recipe = useLoaderData();


    return(
        <div className='w-full flex flex-col items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] md:shadow-[0px_0px_15px_rgba(217,225,244,0.76)] gap-x-6 gap-y-6 md:p-[2%] mb-8 p-2 overflow-hidden'>
                <div className=''>
                    <img src={recipe.image} className='object-cover w-full aspect-square' />
                </div>
                <div className='w-full'>
                    <p className='text-4xl font-medium mb-4 capitalize'>{recipe.title}</p>
                    <hr className='my-4'></hr>
                    <p className='text-xl leading-[2em]'>Equipments</p>
                    <ul className='list-disc list-inside'>
                        {
                            recipe.equipments.map((equipement, index)=>(
                                <li className='font-light'>{equipement}</li>
                            ))
                        }
                    </ul>
                    <hr className='my-4'></hr>
                    <p className='text-xl leading-[2em]'>Ingredients</p>
                    <ul className='list-disc list-inside'>
                        {
                            recipe.ingredients.map((ingredient, index)=>(
                                <li className='font-light'>{ingredient}</li>
                            ))
                        }
                    </ul>
                    <hr className='my-4'></hr>
                    <p className='text-xl leading-[2em]'>Instructions</p>
                    <ol className='list-decimal list-inside marker:font-medium'>
                        {
                            recipe.instructions.map((instruction, index)=>(
                                <li className='font-light'>{instruction}</li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        </div>
    )
}