/** @format */

import PageHeader from '@/components/ui/page_header';
import Image from 'next/image';
import React from 'react';
import motor from '../../../public/images/motor.jpg';
import { FaCheck } from 'react-icons/fa';
import Stats from '@/components/ui/stats';
import Presence from '@/components/ui/presence';
import Team from '@/components/team';
import ProductSlide from '@/components/productsslide/products';

function Page() {
  return (
    <>
      <PageHeader title='About Us' />
      <div className='max-w-6xl my-24 mx-4 md:mx-auto'>
        <div className='flex flex-col gap-10 md:flex-row'>
          <div className='w-full md:w-1/2'>
            <Image
              className='my-6'
              src={motor}
              alt='logo'
              width='100%'
              height='100%'
            />
          </div>
          <div className='w-full md:w-1/2 content-center align-middle'>
            <h1 className='text-4xl font-bold text-left font-spaceGrotesk mb-2'>
              About Us
            </h1>
            <p className='text-lg text-left'>
              S.D. Pneumatics is based in Bangalore, Karnataka and steadily
              garnered acclaim under Managing Director, Mr. Pramod Gosi, for
              providing quality products. Our robust teams of Engineers, R&D &
              scientists are versatile in customization of the machines to meet
              customer specific needs and budget requirement of our most
              valuable customers.
            </p>
            <ul className='flex flex-col gap-4 text-left my-6 text-lg'>
              <li className='flex flex-row gap-4'>
                <FaCheck size={24} />
                Led by Managing Director Mr. Pramod Gosi, S.D. Pneumatics has
                built a reputation for delivering high-quality pneumatic
                solutions.
              </li>
              <li className='flex gap-4'>
                <FaCheck size={24} />
                Our team of engineers, R&D professionals, and scientists
                specializes in creating tailor-made machines to meet unique
                customer needs.
              </li>
              <li className='flex gap-4'>
                <FaCheck size={24} />
                We are dedicated to offering reliable products designed to
                optimize industrial operations.
              </li>
              <li className='flex gap-4'>
                <FaCheck size={24} />
                Our solutions are crafted with a focus on both performance and
                budget requirements to ensure customer satisfaction.
              </li>
            </ul>
          </div>
        </div>
        <section className='max-w-6xl text-center gap-6'>
          <Stats />
        </section>
      </div>
      <section className=' gap-6'>
        <Presence />
      </section>
      <section>
        <Team />
      </section>
      <section>
        <ProductSlide />
      </section>
    </>
  );
}

export default Page;
