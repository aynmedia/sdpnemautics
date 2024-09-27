/** @format */

import Image from 'next/image';
import React from 'react';
import footer from '../../../public/images/footer.jpg';
import { menuItems } from '@/lib/stats';
import Link from 'next/link';
import { Button } from '../ui/button';
import { IoIosSend } from 'react-icons/io';
import logo from '../../../public/images/logo.png';
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className='relative bg-[#1E1C2A]'>
        <div className='absolute inset-0 bg-gradient-to-t from-[#1E1C2A] via-[#1E1C2A] to-transparent z-10'></div>
        <div className='absolute inset-0 bg-[#1E1C2A]/70 z-10'></div>
        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-white'>
          <span className='font-spaceGrotesk font-bold text-3xl text-center'>
            Ready to Elevate Your Business?
          </span>
          <p className='hidden md:flex text-xl max-w-5xl text-center py-4'>
            Partner with us for cutting-edge pneumatic solutions tailored to
            your industry. Contact us today for personalized consultations,
            high-quality products, and exceptional service. Let’s power your
            success!
          </p>
          <Button variant='outline' size='lg' className='mt-4'>
            <IoIosSend className='mr-2 h-4 w-4' />
            <span className='uppercase text-lg'>get started</span>
          </Button>
        </div>
        <Image
          className='object-cover'
          src={footer}
          alt='footer'
          layout='responsive'
          width={1920}
          height={300}
        />
      </div>
      <div className='bg-[#1E1C2A] flex flex-col md:flex-row z-100 px-4 md:px-24 text-white text-center md:text-left'>
        <div className='w-full md:w-1/4 pb-12'>
          <span className='flex font-spaceGrotesk font-bold text-xl text-center align-middle gap-4'>
            <Image src={logo} alt='logo' width={45} height={45} /> S D
            Pneumatics
          </span>
          <p className='text-sm py-12 text-left'>
            S.D. Pneumatics is based in Bangalore, Karnataka and steadily
            garnered acclaim under Managing Director, Mr. Pramod Gosi, for
            providing quality products. Our robust teams of Engineers, R&D &
            scientists are versatile in customization of the machines to meet
            customer specific needs and budget requirement of our most valuable
            customers.
          </p>
          <span className='font-spaceGrotesk my-12'>© {year} SDPnematics</span>
        </div>
        <div className='w-full md:w-1/4 text-center'>
          <span className='font-spaceGrotesk font-bold text-xl text-center'>
            About
          </span>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className='my-6 font-bold hover:underline hover:text-blue-600'>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-1/4 text-center'>
          <span className='font-spaceGrotesk font-bold text-xl text-center'>
            Categories
          </span>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.name}
                className='my-6 font-bold hover:underline hover:text-blue-600'>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='w-full md:w-1/4 text-center'>
          <span className='font-spaceGrotesk font-bold text-xl text-center'>
            Address
          </span>
          <p className='pb-2 pt-12 text-left'>S.D. PNEUMATICS</p>
          <p className='py-2 text-left'>Mr. Pramod Gosi</p>
          <p className='py-2 text-left'>
            456, 4th Main, 1st Stage, 2nd Phase, Manjunath Nagar, Rammurthy
            Nagar, Bangalore, Karnataka, India - 560010
          </p>
          <p className='py-2 text-left'>08069247354-095 / +91-9986523331</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
