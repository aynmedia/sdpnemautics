/** @format */

import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import motor from '../../../public/images/motor.jpg';
import Image from 'next/image';
const Whyus = () => {
  return (
    <div className='md:max-w-6xl mx-auto px-12 pt-12 bg-[#1E1C2A] text-white flex md:flex-row flex-col'>
      <div className='md:w-1/2 w-full px-12'>
        <ul className='divide-y divide-solid content-center'>
          <li className='text-left text-4xl py-8'>
            <Link
              href='/products/air-compressor'
              className='flex gap-2 hover:text-blue-600 justify-between font-spaceGrotesk'>
              Network <BsArrowRight size={32} />
            </Link>
          </li>
          <li className='text-left text-4xl py-8'>
            <Link
              href='/products/air-compressor'
              className='flex gap-2 hover:text-blue-600 justify-between font-spaceGrotesk'>
              Quality <BsArrowRight size={32} />
            </Link>
          </li>
          <li className='text-left text-4xl py-8 '>
            <Link
              href='/products/air-compressor'
              className='flex gap-2 justify-between hover:text-blue-600 font-spaceGrotesk'>
              Warehouse <BsArrowRight size={32} />
            </Link>
          </li>
          <li className='text-left text-4xl py-8 '>
            <Link
              href='/products/air-compressor'
              className='flex gap-2 hover:text-blue-600 justify-between font-spaceGrotesk'>
              Pricing <BsArrowRight size={32} />
            </Link>
          </li>
        </ul>
      </div>
      <div className='md:w-1/2 w-full py-12'>
        <p className='text-left text-lg'>
          We are highly renowned in the industry due to our client centric
          approach. Some reasons on why the clients prefer us. We provide
          Premium Quality Products & customer friendly after care services
        </p>
        <div className='gap-4 mt-6'>
          <Link
            href='/products/air-compressor'
            className='flex gap-2 hover:underline hover:text-blue-600'>
            More Details <BsArrowRight size={24} />
          </Link>
        </div>
        <Image
          className='my-6 -mb-64'
          src={motor}
          alt='logo'
          width='100%'
          height='100%'
        />
      </div>
    </div>
  );
};

export default Whyus;
