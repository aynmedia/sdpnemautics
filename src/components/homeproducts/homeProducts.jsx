/** @format */

import React from 'react';
import { BsFillExclamationOctagonFill } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';
import airCompressor from '../../../public/images/products/lubricated-screw-type-air-compressor.jpeg';
import Image from 'next/image';
import { FaArrowCircleRight } from 'react-icons/fa';
const HomeProducts = () => {
  return (
    <div className='w-full bg-[#161616] min-h-screen -mt-8'>
      <div className='flex justify-between max-w-7xl mx-auto px-4 md:px-12 py-12 bg-white border-t border-slate-300 md:flex-row flex-col gap-4'>
        <div className='flex items-center'>
          <p className='flex gap-6 items-center md:text-md md:text-xl text-left max-w-2xl'>
            <BsFillExclamationOctagonFill
              className='text-red-600 animate-pulse 	'
              size={48}
            />
            From air compressors to advanced cooling systems, explore our full
            range of innovative solutions.
          </p>
        </div>
        <button className='px-6 py-4 rounded-md border border-black bg-green hover:bg-white text-white text-lg hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green flex justify-center'>
          Explore Our Products <FaArrowRightLong size={32} className='pl-2' />
        </button>
      </div>

      <div className='flex flex-col gap-10 py-12 max-w-7xl mx-auto justify-center'>
        <p className='max-w-6xl mx-auto text-center text-4xl font-bold text-white'>
          Explore Our Innovative Products
        </p>
        <div className='flex flex-col md:flex-row my-12 gap-6 mx-6 '>
          <div className='w-full md:w-1/2'>
            <p className='text-left text-2xl md:text-4xl font-bold text-white mb-12'>
              Lubricated Screw Type Air Compressor
            </p>
            <p className='text-left text-lg text-white'>
              The Lubricated Screw Type Air Compressor is engineered for
              high-performance and continuous operation, offering reliable
              compressed air solutions for industrial applications. Designed
              with advanced rotary screw technology, this compressor ensures
              smooth and efficient air compression by utilizing a pair of
              interlocking helical rotors. The lubrication system injects oil
              into the compression chamber, not only to lubricate the moving
              parts but also to create a perfect seal and dissipate the heat
              generated during the compression process.
            </p>
            <ul className='text-left text-lg text-white list-none mt-6'>
              <li>
                <span class='text-green mr-2'>✔</span>
                High Efficiency
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Continuous Operation
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Superior Cooling and
                Lubrication
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Low Noise and Vibration
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Durable and Reliable
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Easy Maintenance
              </li>
            </ul>
            <div className='flex gap-4 my-6'>
              <button className='px-6 py-4 rounded-md border border-black bg-white text-black text-md hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green flex items-center font-bold'>
                Explore Our Products{' '}
                <FaArrowCircleRight size={32} className='pl-2' />
              </button>
            </div>
          </div>
          <div className='relative flex justify-center items-center'>
            <div className='absolute inset-0 flex items-center justify-center'>
              1
            </div>
            <Image
              src={airCompressor}
              alt='Air Compressor'
              width={600}
              height={500}
              objectFit='cover'
              className='rounded-lg'
            />{' '}
          </div>
        </div>
        <div className='flex flex-col md:flex-row my-12 gap-6 mx-6 '>
          <div className='relative flex justify-center items-center'>
            <div className='absolute inset-0 flex items-center justify-center'>
              1
            </div>
            <Image
              src={airCompressor}
              alt='Air Compressor'
              width={600}
              height={500}
              objectFit='cover'
              className='rounded-lg'
            />
          </div>
          <div className='w-full md:w-1/2'>
            <p className='text-left text-2xl md:text-4xl font-bold text-white mb-12'>
              Lubricated Screw Type Air Compressor
            </p>
            <p className='text-left text-lg text-white'>
              The Lubricated Screw Type Air Compressor is engineered for
              high-performance and continuous operation, offering reliable
              compressed air solutions for industrial applications. Designed
              with advanced rotary screw technology, this compressor ensures
              smooth and efficient air compression by utilizing a pair of
              interlocking helical rotors. The lubrication system injects oil
              into the compression chamber, not only to lubricate the moving
              parts but also to create a perfect seal and dissipate the heat
              generated during the compression process.
            </p>
            <ul className='text-left text-lg text-white list-none mt-6'>
              <li>
                <span class='text-green mr-2'>✔</span>
                High Efficiency
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Continuous Operation
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Superior Cooling and
                Lubrication
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Low Noise and Vibration
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Durable and Reliable
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Easy Maintenance
              </li>
            </ul>
            <div className='flex gap-4 my-6'>
              <button className='px-6 py-4 rounded-md border border-black bg-white text-black text-md hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green flex items-center font-bold'>
                Explore Our Products{' '}
                <FaArrowCircleRight size={32} className='pl-2' />
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row my-12 gap-6 mx-6 '>
          <div className='w-full md:w-1/2'>
            <p className='text-left text-2xl md:text-4xl font-bold text-white mb-12'>
              Lubricated Screw Type Air Compressor
            </p>
            <p className='text-left text-lg text-white'>
              The Lubricated Screw Type Air Compressor is engineered for
              high-performance and continuous operation, offering reliable
              compressed air solutions for industrial applications. Designed
              with advanced rotary screw technology, this compressor ensures
              smooth and efficient air compression by utilizing a pair of
              interlocking helical rotors. The lubrication system injects oil
              into the compression chamber, not only to lubricate the moving
              parts but also to create a perfect seal and dissipate the heat
              generated during the compression process.
            </p>
            <ul className='text-left text-lg text-white list-none mt-6'>
              <li>
                <span class='text-green mr-2'>✔</span>
                High Efficiency
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Continuous Operation
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Superior Cooling and
                Lubrication
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Low Noise and Vibration
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Durable and Reliable
              </li>
              <li>
                <span class='text-green mr-2'>✔</span>Easy Maintenance
              </li>
            </ul>
            <div className='flex gap-4 my-6'>
              <button className='px-6 py-4 rounded-md border border-black bg-white text-black text-md hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green flex items-center font-bold'>
                Explore Our Products{' '}
                <FaArrowCircleRight size={32} className='pl-2' />
              </button>
            </div>
          </div>
          <div className='relative flex justify-center items-center'>
            <div className='absolute inset-0 flex items-center justify-center'>
              1
            </div>
            <Image
              src={airCompressor}
              alt='Air Compressor'
              width={600}
              height={500}
              objectFit='cover'
              className='rounded-lg'
            />{' '}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
