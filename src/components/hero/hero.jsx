/** @format */

import React from 'react';
import Carousel from './carousel';
import slide1 from '../../../public/images/slide1.jpg';
import slide2 from '../../../public/images/slide2.jpg';
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
    <div className='relative w-full h-screen'>
      <Carousel slides={slides} />
    </div>
  );
};

export default Hero;
