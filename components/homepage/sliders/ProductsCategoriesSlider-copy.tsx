'use client';

import React from 'react';
// Import Swiper React components
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import Link from 'next/link';

interface Category {
  title: string;
  imageUrl: string;
  catUrl: string;
  coutn: number;
}
const categorProduct: Category[] = [
  {
    title: 'Cases',
    imageUrl: '/sliderImages/wood-accessories-category-1-132.jpg',
    coutn: 22,
    catUrl: '/cases',
  },
  {
    title: 'MagSafe',
    imageUrl: '/sliderImages/wood-accessories-category-2.jpg',
    coutn: 22,
    catUrl: '/magsafe',
  },
  {
    title: 'Cables',
    imageUrl: '/sliderImages/wood-accessories-category-3.jpg',
    coutn: 22,
    catUrl: '/cables',
  },
  {
    title: 'Charger',
    imageUrl: '/sliderImages/wood-accessories-category-4.jpg',
    coutn: 22,
    catUrl: '/charger',
  },
  {
    title: 'Straps',
    imageUrl: '/sliderImages/wood-accessories-category-5.jpg',
    coutn: 22,
    catUrl: '/Straps',
  },
  {
    title: 'Power Banks',
    imageUrl: '/sliderImages/wood-accessories-category-6.jpg',
    coutn: 22,
    catUrl: '/power-banks',
  },
];
export default function ProductsCategoriesSlider() {
  return (
    <div className=' container mx-auto my-10'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={80}
        slidesPerView={6}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {categorProduct.map(({ title, imageUrl, coutn, catUrl }) => (
          <SwiperSlide>
            <Link href={catUrl}>
              <div className='flex justify-center flex-col items-center gap-3'>
                <Avatar className='w-[150px]  rounded-full overflow-hidden  '>
                  <AvatarImage
                    width='100%'
                    height='100%'
                    className=' transition-all ease-in-out delay-75 w-full hover:scale-110 '
                    src={imageUrl}
                    alt='@shadcn'
                  />
                  <AvatarFallback>{title}</AvatarFallback>
                </Avatar>
                <h1 className='font-medium text-sm'>{title}</h1>
                <p className=' text-gray-500'>{coutn} products</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
