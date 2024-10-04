/** @format */

import Image from 'next/image';
import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaCircleCheck } from 'react-icons/fa6';
import aboutsection from '../../../public/images/aboutsection.jpg';
import Reavel from '@/lib/reveal';
export const category = [
  'Air Compressors',
  'Dry Scroll Vacuum Pumps',
  'Air Cooled Chiller',
  'Air Blast Cooling System',
  'Panel Air Conditioner',
  'Air Blast Oil Cooler',
];
const About = () => {
  return (
    <div className='flex md:flex-row flex-col my-12 max-w-6xl md:mx-auto mx-4 md:text-left text-center gap-6'>
      <div className='md:w-1/2 w-full'>
        <Reavel>
          <h1 className='text-5xl font-bold text-left font-spaceGrotesk mb-2'>
            Leading the Way in Pneumatic Solutions
          </h1>
        </Reavel>
        <Reavel>
          <p className='text-lg text-left'>
            One of the expert leader in pneumatics, strives to understand
            customer needs thoroughly, after fully understanding the
            requirements of any process and offers customized solutions. By
            virtue of our innovative ability and close interaction with our
            customers, we take the lead in the world market. We are an
            organization that listens carefully to the customers, responds
            promptly to their needs, setting global trends in industrial
            automation.
          </p>
        </Reavel>
        <Reavel>
          <p className='text-gray-600 font-bold mt-6 text-italic'>
            Some of our wide range of products
          </p>
        </Reavel>
        <div className='flex mt-12 gap-4 flex-wrap md:justify-left justify-none'>
          <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {category.map((item) => (
              <li
                key={item.id}
                className='border-b border-gray-300 py-2 px-4 text-center'>
                <Reavel>
                  <h3 className='font-medium text-md text-slate-900 flex gap-2 items-center'>
                    <FaCircleCheck className='text-green' size={18} />
                    {item}
                  </h3>
                </Reavel>
              </li>
            ))}
          </ul>
        </div>
        <div className='flex mt-12 gap-4'>
          <Reavel>
            <button className='px-6 py-4 rounded-md border border-black bg-green hover:bg-white text-white text-lg hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green flex'>
              Explore Our Products{' '}
              <FaArrowCircleRight size={32} className='pl-2' />
            </button>
          </Reavel>
          <Reavel>
            <button className='px-6 py-4 rounded-md border border-black bg-white text-black text-lg hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green'>
              More About US
            </button>
          </Reavel>
        </div>
      </div>
      <div className='md:w-1/2 w-full flex justify-center'>
        <Reavel>
          <Image
            className=' rounded-lg object-cover'
            src={aboutsection}
            alt='logo'
            width={500}
            height={300}
            priority
          />
        </Reavel>
      </div>
    </div>
  );
};

export default About;
