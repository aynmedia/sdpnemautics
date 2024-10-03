/** @format */
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../../public/images/slide1.jpg';
import slide2 from '../../../public/images/slide2.jpg';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { FaArrowCircleRight } from 'react-icons/fa';

import 'swiper/css';
import Link from 'next/link';

const Hero = () => {
  const slides = [
    {
      image: slide1,
      title:
        'Leading Experts in Pneumatics - Understanding Your Needs, Delivering Precision Solutions',
      description:
        'One of the expert leaders in pneumatics, strives to understand customer needs thoroughly and offers customized solutions after fully understanding the requirements.',
    },
    {
      image: slide2,
      title: 'Medical Breathing Systems',
      description: 'This is the description for Slide 2.',
    },
    {
      image: 'https://via.placeholder.com/1920x1080?text=Slide+3',
      title: 'Slide 3',
      description: 'This is the description for Slide 3.',
    },
  ];

  return (
    <div className='relative flex items-center font-spaceGrotesk'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className='relative w-screen min-h-screen'>
              {/* Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                className='w-full h-full object-cover'
                layout='fill'
                objectFit='cover'
                priority
              />
              <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
              {/* Slide content */}
              <div className='absolute flex flex-col md:flex-row justify-center items-center text-white w-screen h-full max-w-screen mx-4 md:mx-12 z-10'>
                {/* First Column */}
                <div className='md:w-1/2 w-full text-left p-12 flex flex-col gap-6'>
                  <h2 className='text-3xl md:text-5xl font-bold'>
                    {slide.title}
                  </h2>
                  <p className='text-md md:text-lg'>{slide.description}</p>
                  <div className='flex gap-4'>
                    <button className='px-6 py-4 rounded-md border border-black bg-white text-black text-md hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green flex items-center font-bold'>
                      Explore Our Products{' '}
                      <FaArrowCircleRight size={32} className='pl-2' />
                    </button>
                    <button className='px-6 py-4 rounded-md border border-black bg-white text-black text-md hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green font-bold'>
                      More About Us
                    </button>
                  </div>
                </div>

                {/* Second Column */}
                <div className='hidden md:flex md:w-1/2 w-full justify-center items-center p-4'>
                  <div className='flex flex-col bg-white text-slate-900 p-8 w-64 gap-6 rounded-sm shadow-md '>
                    <p className='text-center font-bold'>
                      Lubricated Screw Type Air Compressor
                    </p>
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      className='w-full h-full object-cover rounded-sm'
                      width={400}
                      height={400}
                      objectFit='cover'
                      priority
                    />
                    <p className='text-sm text-gray-400 text-center'>
                      Boost Your Productivity with SD pneumatics’s Rotary Screw
                      Air Compressors
                    </p>
                    <Link
                      href='/'
                      className='text-green font-bold flex items-center justify-center gap-2'>
                      Get A Quote
                      <FaArrowCircleRight size={32} className='pl-2' />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
