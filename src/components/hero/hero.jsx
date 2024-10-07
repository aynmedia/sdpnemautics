/** @format */
'use client';
import React from 'react';
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
import slide1 from '../../../public/images/slide1.jpg';
import slide2 from '../../../public/images/slide2.jpg';
import slide3 from '../../../public/images/slide3.jpg';
import Image from 'next/image';

import { FaArrowCircleRight } from 'react-icons/fa';
import lubecratedscrew from '../../../public/images/products/lubricated-screw-type-air-compressor.jpeg';
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
      title: 'Innovating Pneumatic Solutions for a Better Tomorrow',
      description:
        'TAt SD Pneumatics, we deliver high-performance pneumatic systems that drive industrial efficiency and innovation. With a focus on reliability, sustainability, and cutting-edge technology, we ensure your business operates at peak performance.',
    },
    {
      image: slide3,
      title: 'Empowering Industries with Precision Pneumatics',
      description:
        'Explore our innovative solutions tailored for your business needs.',
    },
  ];

  return (
    <div className='relative flex items-center font-spaceGrotesk'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        freeMode
        freeModeMomentum
        grabCursor
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
                      src={lubecratedscrew}
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
                      href='#enquire'
                      className='flex justify-center items-center font-bold hover:text-green'>
                      Get a Quote
                      <FaArrowCircleRight size={32} className='pl-2' />
                    </Link>
                    {/* <ProductDialog triggerText='Get A Quote' /> */}
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
