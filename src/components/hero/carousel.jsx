/** @format */
'use client';

import Reavel from '@/lib/reveal';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Carousel = ({ slides, interval = 10000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animation, setAnimation] = useState('opacity-0');

  // Change slide with fade animation
  const changeSlide = (index) => {
    setAnimation('opacity-0'); // Fade-out animation
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimation('opacity-100'); // Fade-in animation
    }, 300);
  };

  // Autoplay functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, [slides.length, interval]);

  useEffect(() => {
    setAnimation('opacity-100'); // Initial fade-in on component load
  }, []);

  return (
    <div className='relative w-screen h-screen mx-auto flex'>
      {/* Left-side Slide Navigation with Numbers and Titles */}
      <div className='absolute left-8 top-1/2 transform -translate-y-1/2 space-y-4 z-10'>
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => changeSlide(index)}
            className={`flex flex-col items-start p-2  rounded-lg transition-transform text-sm font-semibold w-64 ${
              currentIndex === index
                ? 'bg-transparent scale-110 text-white'
                : 'bg-btransparent scale-100 text-gray-900'
            }`}>
            <span
              className={`text-sm font-spaceGrotesk ${
                currentIndex === index ? 'text-yellow-300' : 'text-white'
              }`}>
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>{slide.title}</span>
          </button>
        ))}
      </div>

      {/* Slide Images with fade animation */}
      <div
        className={`relative flex justify-center items-center w-full h-full transition-opacity duration-700 ${animation}`}>
        <Image
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex + 1}`}
          layout='fill'
          objectFit='cover'
          className='rounded-lg shadow-lg'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-green-800 opacity-80'></div>
        {/* Slide Description */}
        <div className='absolute bottom-4 right-24 text-white font-spaceGrotesk p-4 mb-12 flex flex-col gap-4 md:max-w-2xl'>
          {' '}
          <Reavel>
            <div className='text-5xl font-bold'>
              {slides[currentIndex].title}
            </div>
          </Reavel>
          <Reavel>
            <div className=''>{slides[currentIndex].description}</div>
          </Reavel>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
