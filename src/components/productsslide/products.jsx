/** @format */
'use client';
import React, { useRef, useState } from 'react';
import product from '@/lib/products.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Enquireproduct from '../ui/enquireproduct';
import Reavel from '@/lib/reveal';

const ProductSlide = () => {
  const swiperRef = useRef(null);

  return (
    <div className='mb-12'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={5}
        spaceBetween={40}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 0 },
          480: { slidesPerView: 2, spaceBetween: 0 },
          768: { slidesPerView: 3, spaceBetween: 0 },
          1024: { slidesPerView: 5, spaceBetween: 0 },
        }}
        freeMode
        freeModeMomentum
        grabCursor
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}>
        {product.map((slide, index) => (
          <SwiperSlide key={index}>
            {' '}
            <Reavel>
              <div className='border border-gray-400/20 w-full h-[380px] hover:shadow-2xl  transition duration-200 ease-in-out flex flex-col text-left cursor-pointer justify-end'>
                <div className='flex items-center justify-center '>
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={600}
                    height={600}
                    className='object-cover'
                  />
                </div>

                <p className=' text-md font-bold p-6'>{slide.title}</p>
                <div className='my-2'>
                  <Enquireproduct
                    triggerText='Get A Quote'
                    productName={slide.title}
                  />
                </div>
              </div>{' '}
            </Reavel>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='max-w-7xl md:mx-auto mx-6 px-4'>
        <div className='w-16 flex my-12 gap-6 '>
          <button
            className='p-4 rounded-full shadow-md bg-green  text-white'
            onClick={() => swiperRef.current?.slideNext()}>
            <FaArrowLeft />
          </button>
          <button
            className='p-4 rounded-full shadow-md bg-green text-white'
            onClick={() => swiperRef.current?.slidePrev()}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlide;
