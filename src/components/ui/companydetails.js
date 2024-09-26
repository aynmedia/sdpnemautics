/** @format */

import React from 'react';
import { FaRegHandshake } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';
import { MdSupport } from 'react-icons/md';
import motor from '../../../public/images/motor.jpg';
import Image from 'next/image';

const Company = () => {
  return (
    <div className='flex md:flex-row flex-col my-12 max-w-6xl md:mx-auto mx-4 gap-10'>
      <div className='md:w-1/2 w-full'>
        {/* <h1 className='text-4xl font-bold text-left font-heading'>
          Leading the Way in Pneumatic Solutions
        </h1> */}
        <Image
          className='my-6'
          src={motor}
          alt='logo'
          width='100%'
          height='100%'
        />
      </div>
      <div className='md:w-1/2 w-full px-6 flex flex-col item-center h-full md:py-24'>
        <h1 className='text-5xl font-bold text-left font-spaceGrotesk'>
          Why SDPneumatics?
        </h1>
        <p className='text-lg text-left my-6'>
          SDPneumatics stands out for its commitment to quality, innovation, and
          customer satisfaction. Our tailored solutions are designed to improve
          performance, reduce downtime, and increase operational longevity.
          Here’s why industries trust us
        </p>
        <div className='flex flex-col mb-6'>
          <div className='flex text-xl font-bold text-left gap-4 font-spaceGrotesk'>
            <FaRegHandshake className='text-blue-600' size={32} />
            Reliable and Trusted
          </div>
          <p className='text-lg text-left align-bottom h-auto'>
            High-quality, durable pneumatic components.
          </p>
        </div>
        <div className='flex flex-col mb-6'>
          <div className='flex text-xl font-bold text-left gap-4 font-spaceGrotesk'>
            <RiTeamLine className='text-blue-600' size={32} />
            Expertise
          </div>
          <p className='text-lg text-left items-bottom h-auto'>
            Experienced team providing tailored solutions.
          </p>
        </div>
        <div className='flex flex-col mb-6'>
          <div className='flex text-xl font-bold text-left gap-4 font-spaceGrotesk'>
            <MdSupport className='text-blue-600' size={32} />
            Support
          </div>
          <p className='text-lg text-left align-bottom h-auto'>
            Comprehensive after-sales support and maintenance services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company;
