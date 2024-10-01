/** @format */
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../../../public/images/slide1.jpg';
import slide2 from '../../../public/images/slide2.jpg';
import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';

const Hero = () => {
  const slides = [
    {
      image: slide1,
      title: 'Industrial Engineering',
      description:
        'One of the expert leader in pneumatics, strives to understand customer needs thoroughly, after fully understanding the requirements of any process and offers customized solutions.',
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
    <div className='relative w-full h-screen flex items-center'>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.title && (
              <Image
                src={slide.image}
                alt={slide.title}
                className='w-full h-full object-cover'
                width={1920}
                height={1080}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
