/** @format */

import React from 'react';
import { BsFillExclamationOctagonFill } from 'react-icons/bs';
import { FaArrowRightLong } from 'react-icons/fa6';
import airCompressor from '../../../public/images/products/lubricated-screw-type-air-compressor.jpeg';
import oilcompressor from '../../../public/images/products/oil-free-reciprocating-air-compressor.jpeg';
import refrigerantairdyer from '../../../public/images/products/refrigerant-type-air-dryer.jpeg';
import Image from 'next/image';
import { FaArrowCircleRight } from 'react-icons/fa';
import Link from 'next/link';
import Reavel from '@/lib/reveal';

const HomeProducts = () => {
  return (
    <div className='w-full bg-[#161616] min-h-screen -mt-8'>
      <div className='flex justify-between max-w-7xl mx-auto px-4 md:px-12 py-12 bg-white border-t border-slate-300 md:flex-row flex-col gap-4'>
        <div className='flex items-center'>
          <Reavel>
            <p className='flex gap-6 items-center md:text-md md:text-xl text-left max-w-2xl'>
              <BsFillExclamationOctagonFill
                className='text-red-600 animate-pulse 	'
                size={48}
              />
              From air compressors to advanced cooling systems, explore our full
              range of innovative solutions.
            </p>
          </Reavel>
        </div>
        <Reavel>
          <button className='px-6 py-4 rounded-md border border-black bg-green hover:bg-white text-white text-lg hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green flex justify-center'>
            Explore Our Products <FaArrowRightLong size={32} className='pl-2' />
          </button>
        </Reavel>
      </div>

      <div className='flex flex-col gap-10 py-6 max-w-7xl mx-auto justify-center'>
        <Reavel>
          <p className='max-w-6xl mx-auto text-center text-4xl font-bold text-white'>
            Explore Our Innovative Products
          </p>
        </Reavel>
        <div className='flex flex-col md:flex-row my-12 gap-6 mx-6 '>
          <div className='w-full md:w-1/2'>
            <Reavel>
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
            </Reavel>
            <ul className='text-left text-lg text-white list-none mt-6'>
              <Reavel>
                {' '}
                <li>
                  <span class='text-green mr-2'>✔</span>
                  High Efficiency
                </li>
                <li>
                  <span class='text-green mr-2'>✔</span>Continuous Operation
                </li>{' '}
                <li>
                  <span class='text-green mr-2'>✔</span>Superior Cooling and
                  Lubrication
                </li>{' '}
                <li>
                  <span class='text-green mr-2'>✔</span>Low Noise and Vibration
                </li>{' '}
                <li>
                  <span class='text-green mr-2'>✔</span>Durable and Reliable
                </li>{' '}
                <li>
                  <span class='text-green mr-2'>✔</span>Easy Maintenance
                </li>{' '}
              </Reavel>
            </ul>
            <div className='flex gap-4 my-6'>
              {' '}
              <Reavel>
                <button className='px-6 py-4 rounded-md border border-black bg-white text-black text-md hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green flex items-center font-bold'>
                  Explore Our Products{' '}
                  <FaArrowCircleRight size={32} className='pl-2' />
                </button>{' '}
              </Reavel>
            </div>
          </div>
          <div className='relative flex justify-center items-center'>
            <Image
              src={airCompressor}
              alt='Air Compressor'
              width={600}
              height={500}
              className='rounded-lg object-cover'
            />{' '}
          </div>
        </div>
        <div className='flex flex-col md:flex-row my-12 gap-6 mx-6 '>
          <div className='relative flex justify-center items-center'>
            <Reavel>
              <Image
                src={oilcompressor}
                alt='oil air compressor'
                width={600}
                height={500}
                className='rounded-lg object-cover'
              />{' '}
            </Reavel>
          </div>
          <div className='w-full md:w-1/2'>
            <Reavel>
              <p className='text-left text-2xl md:text-4xl font-bold text-white mb-6'>
                Oil-Free Reciprocating Air Compressor
              </p>{' '}
            </Reavel>
            <Reavel>
              <p className='text-left text-lg text-white'>
                Our Oil-Free Reciprocating Air Compressors are designed to
                deliver clean, high-quality air, making them an ideal choice for
                applications where oil contamination cannot be tolerated. These
                compressors operate without the need for lubricating oil,
                ensuring that the air output remains free of impurities,
                providing enhanced safety and performance across industries like
                food and beverage, pharmaceuticals, and electronics
                manufacturing.
              </p>{' '}
            </Reavel>
            <Reavel>
              <ul className='text-left text-lg text-white list-none mt-6'>
                <li>
                  <span class='text-green mr-2'>✔</span>
                  100% Oil-Free Air Output
                </li>
                <li>
                  <span class='text-green mr-2'>✔</span> Low Maintenance
                </li>
                <li>
                  <span class='text-green mr-2'>✔</span>High Efficiency
                </li>
                <li>
                  <span class='text-green mr-2'>✔</span>Durable Build:
                </li>
                <li>
                  <span class='text-green mr-2'>✔</span>Environmentally Friendly
                </li>
                <li>
                  <span class='text-green mr-2'>✔</span>Easy Maintenance
                </li>
              </ul>{' '}
            </Reavel>

            <div className='flex gap-4 my-6'>
              <Reavel>
                <button className='px-6 py-4 rounded-md border border-black bg-white text-black text-md hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green flex items-center font-bold'>
                  Explore Our Products{' '}
                  <FaArrowCircleRight size={32} className='pl-2' />
                </button>{' '}
              </Reavel>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row my-6 gap-6 mx-6 '>
          <div className='w-full md:w-1/2'>
            <Reavel>
              <p className='text-left text-2xl md:text-4xl font-bold text-white mb-12'>
                Refrigerant Type Air Dryer
              </p>{' '}
            </Reavel>
            <Reavel>
              <p className='text-left text-lg text-white'>
                The Refrigerant Type Air Dryer is a highly efficient solution
                designed to remove moisture and condensate from compressed air
                systems. By using a refrigeration process, this air dryer cools
                the air to remove water vapor, ensuring dry, clean air for a
                variety of industrial applications. This helps protect your
                equipment from corrosion, prolongs its lifespan, and ensures
                better overall performance.
              </p>{' '}
            </Reavel>
            <Reavel>
              <ul className='text-left text-lg text-white list-none mt-6'>
                <li>
                  <span class='text-green mr-2'>✔</span>
                  Efficient Moisture Removal
                </li>
                <li>
                  <span class='text-green mr-2'>✔</span>Energy Efficient
                </li>
                <li>
                  <span class='text-green mr-2'>✔</span>User-Friendly Design
                </li>
                <li>
                  <span class='text-green mr-2'>✔</span>Reliable Performance
                </li>
                <li>
                  <span class='text-green mr-2'>✔</span>Durable and Reliable
                </li>
                <li>
                  <span class='text-green mr-2'>✔</span>Easy Maintenance
                </li>
              </ul>{' '}
            </Reavel>

            <div className='flex gap-4 my-6'>
              <Link href={'/products/'}>
                <Reavel>
                  <button className='px-6 py-4 rounded-md border border-black bg-white text-black text-md hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green flex items-center font-bold'>
                    Explore Our Products{' '}
                    <FaArrowCircleRight size={32} className='pl-2' />
                  </button>{' '}
                </Reavel>
              </Link>
            </div>
          </div>
          <div className='relative flex justify-center items-center'>
            <Reavel>
              <Image
                src={refrigerantairdyer}
                alt='refrigerant air dyer'
                width={600}
                height={500}
                className='rounded-lg object-cover'
              />{' '}
            </Reavel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
