/** @format */

import Image from 'next/image';
import headerImage from '../../../public/images/slide1.jpg';

const PageHeader = ({ title }) => {
  return (
    <>
      <div className='relative w-full h-[400px]'>
        <Image
          src={headerImage}
          alt='Header'
          layout='fill'
          objectFit='cover'
          className='w-full h-full'
        />
        <div className='absolute inset-0 bg-[#1E1C2A]/90' />
        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-white'>
          <span className='font-spaceGrotesk font-bold text-4xl text-center px-6'>
            {title}
          </span>
        </div>
        <div className='absolute w-screen overflow-hidden z-100 bottom-0 rotate-180 '>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            className='h-[64px] w-full'
            fill='#fff'
            preserveAspectRatio='none'>
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              class='shape-fill'></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default PageHeader;
