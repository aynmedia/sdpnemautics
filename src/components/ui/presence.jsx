/** @format */
'use client';

import Image from 'next/image';
import React, { useRef } from 'react';
import worker from '../../../public/images/worker.jpg';
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
import { IoMdDownload } from 'react-icons/io';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Reavel from '@/lib/reveal';
const Presence = () => {
  const swiperRef = useRef(null);

  return (
    <div className='relative flex flex-row md:flex-col items-center justify-center gap-6 bg-white'>
      <Image
        className='w-screen min-h-screen object-cover'
        src={worker}
        alt={'presence'}
        width={500}
        height={300}
        objectFit='cover'
        priority
      />
      <div className='absolute top-0 left-0 w-full h-full bg-slate-900/75'></div>
      <div className='absolute max-w-7xl w-full md:mx-auto mx-6 text-white'>
        <div className='max-w-7xl mx-6 md:mx-auto top-0 left-0 w-full h-full'>
          <Reavel>
            <h1 className='md:text-5xl text-3xl; font-bold text-left font-spaceGrotesk text-white'>
              Industry Wide Presence
            </h1>
          </Reavel>
          <Reavel>
            <p className='w-full md:max-w-3xl text-lg text-left my-6'>
              Global expertise, trusted solutions across diverse industries,
              delivering consistent performance and innovation worldwide.
            </p>
          </Reavel>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={5}
          spaceBetween={0}
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
          {data.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className='border border-gray-400/50 w-full h-[380px] p-6 hover:bg-green hover:scale-110 transition duration-200 ease-in-out flex flex-col text-left justify-between  font-spaceGrotesk'>
                <Reavel>
                  <p className='text-4xl font-bold'>{slide.number}</p>
                </Reavel>
                <Reavel>
                  <p className='text-xl font-bold'>{slide.category}</p>
                </Reavel>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='flex justify-between my-12'>
          <div className='w-16 flex justify-between gap-6  px-4'>
            <button
              className='bg-white p-3 rounded-full shadow-md hover:bg-green hover:text-white text-black'
              onClick={() => swiperRef.current?.slidePrev()}>
              <FaArrowLeft className='mx-2' />
            </button>
            <button
              className='bg-white p-3 rounded-full shadow-md hover:bg-green hover:text-white text-black'
              onClick={() => swiperRef.current?.slideNext()}>
              <FaArrowRight className='mx-2' />
            </button>
          </div>
          <Reavel>
            <div className='flex gap-6 px-4 items-center'>
              <p className='text-lg font-medium'>Download Brochures</p>
              <button className='px-4 py-4 border border-black bg-white text-black text-md hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green font-bold rounded-full shadow-md'>
                <IoMdDownload size={24} />
              </button>
            </div>
          </Reavel>
        </div>
      </div>
    </div>
  );
};

export default Presence;
const data = [
  {
    category: 'Automobile Industry',
    number: '01',
  },
  {
    category: 'Machinery Industry',
    number: '02',
  },
  {
    category: 'Printing Industry',
    number: '03',
  },

  {
    category: 'Pharmaceutical Industry',
    number: '04',
  },
  {
    category: 'Mining Industry',
    number: '05',
  },
  {
    category: 'Solar Industry',
    number: '06',
  },
  {
    category: 'Packaging Industry',
    number: '07',
  },
  {
    category: 'Textile Industry',
    number: '08',
  },
  {
    category: 'Food Industry',
    number: '09',
  },
];
