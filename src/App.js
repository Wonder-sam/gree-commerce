
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './App.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { caro, categories } from './dummydata';

function App() {
  return (
    <div className="w-full">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000
        }}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
    >
        {
         caro.map((car, index)=>(
            <SwiperSlide key={index}>
              <div className='relative flex items-center bg-[rgba(244,81,30,0.07)] w-full'>
                <div className='fixed top-0 right-0 left-[40%] bottom-0 bg-[rgb(0,0,0,0.5)]'></div>
                <div className='w-[40%] flex flex-col justify-center align-center h-[80vh] bg-[#F4511E] text-white px-8 py-12'>
                  <p className='font-[SatoshiBold] text-4xl leading-[4rem]'>{car.title}</p>
                  <p className='font-[SatoshiRegular] text-2xl'>{car.info}</p>
                </div>
                <img src={car.img} className="object-cover w-[60%] h-[80vh]" alt={car.alt} />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      <div className='mt-16 px-[5%]'>
        <div className='flex justify-between'>
          <div className='bg-[#F4511E] rounded-tr-2xl w-fit pl-2 pr-8 py-2 mb-4'>
            <p className='font-[SatoshiVariable] text-[600] text-white md:text-lg xl:text-2xl'>Product Categories</p>
          </div>
          <div className=' rounded-tl-2xl w-fit pl-2 pr-8 py-2 mb-4'>
            <p className='font-[SatoshiVariable] text-[600] text-[#F4511E] md:text-lg xl:text-2xl'>Show All</p>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-8'>
          {
            categories.map((cat,index)=>(
              <div key={index} className=' h-[55vw] md:h-[40vw] lg:h-[30vw] xl:h-[27vw] bg-white rounded-lg overflow-hidden border border-gray shadow-[0px_0px_25px_rgba(217,225,244,0.76)]'>
                <img src={cat.img} className="object-cover w-full h-[38vw] md:h-[25vw] lg:h-[21vw] xl:h-[20vw] shrink-0 grow-0" alt=''/>
                <div className="px-2 pt-2">
                  <p className='font-[SatoshiVariable] text-[600]'>{cat.name}</p>
                  <p className='text-sm font-[SatoshiRegular] text-red italic'>{cat.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
