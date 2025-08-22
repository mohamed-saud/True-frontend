'use client';

import React from 'react';
// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Button } from '../../ui/buttons/button';
export default function HeroCategoriesSlider() {
  return (
    <div className='relative w-full max-w-full bg-gray-100 '>
      <Swiper
        className='h-[450px] xl:h-[700px]'
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // onSlideChange={() => ''}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        <SwiperSlide
          className='bg-cover bg-no-repeat bg-center'
          style={{
            backgroundImage: 'url(/sliderImages/w-accessories-slider.jpg)',
          }}>
          <div className=' container  w-full h-full m-auto flex items-center'>
            <div className='flex flex-col gap-4 xl:gap-10 max-w-[300px] xl:max-w-xl animate-slide-up p-4 xl:p-0'>
              <h1 className='text-gray-900 font-semibold text-4xl xl:text-7xl subpixel-antialiased'>
                Charge Your Phone Safely!
              </h1>
              <p className='text-gray-500 hidden xl:block'>
                A wonderful serenity has taken possession of my entire soul,
                like these sweet mornings of spring which I enjoy with my whole
                heart.
              </p>
              <div className=' flex gap-4'>
                <Button
                  variant='secondary'
                  size='lg'
                  className=' uppercase font-semibold bg-blue-400 text-white '>
                  to shop
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className=' hidden xl:flex capitalize bg-gray-100 text-gray-800'>
                  read more
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className='bg-cover bg-no-repeat bg-center'
          style={{
            backgroundImage: 'url(/sliderImages/accessories-slide-2.jpg)',
          }}>
          <div className=' container  w-full h-full m-auto flex items-center'>
            <div className='flex flex-col gap-4 xl:gap-10 max-w-[300px] xl:max-w-xl animate-slide-up p-4 xl:p-0'>
              <h1 className='text-gray-900 font-semibold text-4xl xl:text-7xl subpixel-antialiased'>
                For Everything and Everyone
              </h1>
              <p className='text-gray-500 hidden xl:block'>
                Even if your less into design and more into content strategy you
                may find some redeeming value with, wait for it, dummy copy.
              </p>
              <div className=' flex gap-4'>
                <Button
                  variant='secondary'
                  size='lg'
                  className=' capitalize bg-blue-400 text-white '>
                  to shop
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className=' hidden xl:flex capitalize bg-gray-100 text-gray-800'>
                  read more
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          className='bg-cover bg-no-repeat bg-center'
          style={{
            backgroundImage: 'url(/sliderImages/accessories-slide-3.jpg)',
          }}>
          <div className=' container  w-full h-full m-auto flex items-center'>
            <div className='flex flex-col gap-4 xl:gap-10 max-w-[300px] xl:max-w-xl animate-slide-up p-4 xl:p-0'>
              <h1 className='text-gray-900 font-semibold text-4xl xl:text-7xl subpixel-antialiased'>
                Featured Accessories
              </h1>
              <p className='text-gray-500 hidden xl:block'>
                A client that’s unhappy for a reason is a problem, a client
                that’s unhappy though required he or her can’t quite put a
                finger.
              </p>
              <div className=' flex gap-4'>
                <Button
                  variant='secondary'
                  size='lg'
                  className=' capitalize bg-blue-400 text-white '>
                  to shop
                </Button>
                <Button
                  variant='outline'
                  size='lg'
                  className=' hidden xl:flex capitalize bg-gray-100 text-gray-800'>
                  read more
                </Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
