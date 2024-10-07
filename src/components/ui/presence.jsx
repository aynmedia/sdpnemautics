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
              <div className='group relative border border-gray-400/50 w-full h-[450px] p-6 hover:bg-green hover:scale-110 transition duration-200 ease-in-out flex flex-col text-left justify-between font-spaceGrotesk'>
                {/* Slide Number */}
                <Reavel>
                  <p className='text-4xl font-bold '>{slide.number}</p>
                </Reavel>

                {/* Title and Description Wrapper */}
                <div className='relative flex-grow flex flex-col justify-end'>
                  {/* Title */}
                  <Reavel>
                    <p className='text-xl font-bold transition-transform duration-300 ease-in-out transform group-hover:-translate-y-20 translate-y-0'>
                      {slide.category}
                    </p>
                  </Reavel>

                  {/* Description (Initially positioned below, sliding up on hover) */}
                  <Reavel>
                    <p className='hidden group-hover:flex text-sm font-medium transition-transform duration-300 ease-in-out transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100'>
                      {slide.description}
                    </p>
                  </Reavel>
                </div>
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
    description:
      'Our advanced pneumatic systems are designed to enhance efficiency and precision in the automobile industry. From assembly lines to automotive maintenance, our solutions ensure optimal performance, reducing downtime and improving overall productivity.',
  },
  {
    category: 'Machinery Industry',
    number: '02',
    description:
      'We provide high-performance pneumatic tools and components that are essential for the machinery industry. Our products are engineered for durability and reliability, enabling smooth operations and enhancing the capabilities of industrial machinery.',
  },
  {
    category: 'Printing Industry',
    number: '03',
    description:
      'Our pneumatic solutions play a crucial role in the printing industry by ensuring precise control and smooth operation of printing machinery. From material handling to automated printing processes, our systems help improve print quality, enhance efficiency, and reduce production downtime.',
  },

  {
    category: 'Pharmaceutical Industry',
    number: '04',
    description:
      'Our pneumatic systems are vital for the pharmaceutical industry, offering reliable and contamination-free solutions for manufacturing, packaging, and processing. Designed to meet stringent hygiene standards, our products ensure precision, efficiency, and safety in handling sensitive pharmaceutical materials and equipment.',
  },
  {
    category: 'Mining Industry',
    number: '05',
    description:
      'In the mining industry, our robust pneumatic solutions are built to withstand harsh environments and demanding operations. From powering drilling equipment to material extraction and transportation, our systems ensure safety, reliability, and efficiency, helping to streamline mining processes and reduce operational costs.',
  },
  {
    category: 'Solar Industry',
    number: '06',
    description:
      'Our pneumatic solutions support the solar industry by enhancing the efficiency of manufacturing processes for solar panels and related components. From assembly automation to precision handling, our systems help optimize production, reduce downtime, and improve the overall quality and reliability of solar energy solutions.',
  },
  {
    category: 'Packaging Industry',
    number: '07',
    description:
      'In the packaging industry, our pneumatic systems play a crucial role in automating processes such as filling, sealing, labeling, and material handling. Offering speed, precision, and durability, our solutions help streamline operations, reduce waste, and ensure consistent packaging quality across various industries.',
  },
  {
    category: 'Textile Industry',
    number: '08',
    description:
      'Our pneumatic systems in the textile industry ensure smooth operation in processes like weaving, spinning, dyeing, and material handling. By delivering precision and efficiency, our solutions help improve production speed, reduce energy consumption, and maintain the high-quality standards necessary for textile manufacturing.',
  },
  {
    category: 'Food Industry',
    number: '09',
    description:
      'In the food industry, our pneumatic solutions provide reliable and hygienic automation for processes such as packaging, sorting, and material handling. Designed to meet strict safety and sanitation standards, our systems help optimize efficiency, minimize contamination risks, and ensure consistent product quality across all stages of food production.',
  },
];
