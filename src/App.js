import React from 'react'
import { Navigation, Scrollbar, A11y, Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { caro } from './dummydata';
import { Link, useLoaderData } from 'react-router-dom';

function App() {
  const categories = useLoaderData();

  return (
    <div className="w-[90%] self-center">
      <Swiper
        modules={[Navigation, Scrollbar, A11y, Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000
        }}
        pagination={true}
        className="w-full rounded-3xl border border-gray shadow-[0px_0px_10px_rgba(217,225,244,0.8)]"
        loop={true}
        navigation={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
         caro.map((car, index)=>(
            <SwiperSlide key={index}>
              <div className='relative flex items-center bg-[rgba(244,81,30,0.07)] w-full'>
                <img src={car.img} className="object-cover w-full xl:h-[40vw] h-[80vw]" alt={car.alt} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className='mt-8 xl:mt-16 pb-8'>
        <div className='w-full pl-2 pr-2 py-2 mb-4 flex justify-center items-center'>
          <div className='w-[20%] xl:w-[37%] bg-[#F4511E] h-[0.5vw]'/>
          <p className='font-[SatoshiVariable] text-[600] font-medium text-[#F4511E] text-3xl md:text-lg xl:text-2xl mx-8'>Haven Spices</p>
          <div className='w-[20%] xl:w-[37%] bg-[#F4511E] h-[0.5vw]'/>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-8'>
          {
            categories[0].map((cat,index)=>(
              <Link to={`/Product/spices/${index}`} key={index}  >
                <div className='h-[100%] pb-2 bg-white w-[42vw] md:w-[28vw] lg:w-[21vw] rounded-lg overflow-hidden border border-gray shadow-[0px_0px_10px_rgba(217,225,244,0.76)]'>
                  <img src={cat.img} className="object-cover w-full aspect-square md:h-[25vw] lg:h-[21vw] xl:h-[20vw] shrink-0 grow-0" alt=''/>
                  <div className="px-2 py-2 overflow-hidden text-ellipsis">
                    <p className='h-[1.7em] font-[SatoshiVariable] text-[600] truncate'>{cat.category}</p>
                    <p className=' text-xs sm:text-sm font-[SatoshiRegular] w-[10em] h-[3em] italic w-full truncate '>{cat.description}</p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>

      <div className='mt-8 xl:mt-16 pb-8'>
        <div className='w-full pl-2 pr-2 py-2 mb-4 flex justify-center items-center'>
          <div className='w-[20%] xl:w-[37%] bg-[#F4511E] h-[0.5vw]'/>
          <p className='font-[SatoshiVariable] text-[600] font-medium text-[#F4511E] text-3xl md:text-lg xl:text-2xl mx-8'>Haven Recipes</p>
          <div className='w-[20%] xl:w-[37%] bg-[#F4511E] h-[0.5vw]'/>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-8'>
          {
            categories[1].map((cat,index)=>(
              <Link to={`/Recipes/${index}`} key={index}  >
                <div className='h-[100%] pb-2 bg-white w-[42vw] md:w-[28vw] lg:w-[21vw] rounded-lg overflow-hidden border border-gray shadow-[0px_0px_10px_rgba(217,225,244,0.76)]'>
                  <img src={cat.image} className="object-cover w-full aspect-square md:h-[25vw] lg:h-[21vw] xl:h-[20vw] shrink-0 grow-0" alt=''/>
                  <div className="px-2 py-2 overflow-hidden text-ellipsis">
                    <p className='h-[1.7em] font-[SatoshiVariable] text-[600] truncate'>{cat.title}</p>
                    <p className=' text-xs sm:text-sm font-[SatoshiRegular] w-[10em] h-[3em] italic w-full truncate '>{cat.ingredients}</p>
                  </div>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
