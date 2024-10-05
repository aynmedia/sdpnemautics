/** @format */

import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import Link from 'next/link';
import Icon from '@/lib/icon';
import Reavel from '@/lib/reveal';

function CategoryBento() {
  return (
    <div className='max-w-7xl mx-6 md:mx-auto mt-12'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='w-full md:w-1/2'>
          <Reavel>
            <p className='text-4xl font-bold text-slate-900'>
              Why SD Pneumatics?
            </p>
          </Reavel>
        </div>
        <div className='w-full md:w-1/2'>
          <Reavel>
            <p className='text-lg text-left'>
              SDPneumatics stands out for its commitment to quality, innovation,
              and customer satisfaction. Our tailored solutions are designed to
              improve performance, reduce downtime, and increase operational
              longevity. Here’s why industries trust us
            </p>
          </Reavel>
          <Reavel>
            <button className='flex px-6 py-2 rounded-md border border-black bg-white text-black text-lg hover:shadow-[4px_4px_0px_0px_rgba(101,181,48)] transition duration-200 hover:text-green my-6 items-center'>
              Learn More <FaArrowCircleRight size={24} className='pl-2' />
            </button>
          </Reavel>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 shadow-xl-reverse rounded-t-sm rounded-x-sm bg-white border-x border-t border-slate-300 mt-12 shadow-2xl text-slate-900'>
        <Reavel>
          <div className='hover:bg-green group h-[400px] py-12 p-6 w-full flex flex-col justify-between'>
            <Icon
              icon='world'
              className='group-hover:text-white text-green'
              size={64}
            />
            <p className='text-left text-2xl font-medium group-hover:text-white'>
              Network
            </p>
            <p className='text-left leading-6	opacity-70 text-md font-medium group-hover:text-white '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
            <Link
              href={'/products/air-compressor'}
              className='flex items-center text-left mt-4 font-bold group-hover:text-white '>
              {' '}
              Read More
              <FaArrowCircleRight size={24} className='pl-2' />
            </Link>
          </div>
        </Reavel>
        <Reavel>
          <div className='group hover:bg-green h-[400px] py-12 p-6 w-full flex flex-col justify-between border-l border-slate-300'>
            <Icon
              icon='diamond'
              className='group-hover:text-white text-green'
              size={64}
            />
            <p className='text-left text-2xl font-medium group-hover:text-white'>
              Quality
            </p>
            <p className='text-left leading-6	opacity-70 text-md font-medium group-hover:text-white '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
            <Link
              href={'/products/air-compressor'}
              className='flex items-center text-left mt-4 font-bold group-hover:text-white '>
              Read More
              <FaArrowCircleRight size={24} className='pl-2' />
            </Link>
          </div>
        </Reavel>
        <Reavel>
          <div className='group hover:bg-green h-[400px] py-12 p-6 w-full flex flex-col justify-between border-x border-slate-300'>
            <Icon
              icon='box'
              className='group-hover:text-white text-green'
              size={64}
            />

            <p className='text-left text-2xl font-medium group-hover:text-white '>
              Warehouse
            </p>
            <p className='text-left leading-6	opacity-70 text-md font-medium group-hover:text-white '>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
            <Link
              href={'/products/air-compressor'}
              className='flex items-center text-left mt-4 font-bold group-hover:text-white '>
              {' '}
              Read More
              <FaArrowCircleRight size={24} className='pl-2' />
            </Link>
          </div>
        </Reavel>
        <Reavel>
          <div className='group hover:bg-green h-[400px] py-12 p-6 w-full flex flex-col justify-between'>
            <Icon
              icon='trophy-one'
              className='group-hover:text-white text-green'
              size={64}
            />
            <p className='text-left text-2xl font-medium group-hover:text-white'>
              Pricing
            </p>
            <p className='text-left leading-6	opacity-70 text-md font-medium group-hover:text-white'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
            <Link
              href={'/products/air-compressor'}
              className='flex items-center text-left mt-4 font-bold group-hover:text-white'>
              {' '}
              Read More
              <FaArrowCircleRight size={24} className='pl-2' />
            </Link>
          </div>
        </Reavel>
      </div>
    </div>
  );
}

export default CategoryBento;
