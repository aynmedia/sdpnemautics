/** @format */

import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';

const PageHeader = ({ title, currentPage, imageSrc }) => {
  return (
    <>
      {/* Header Section */}
      <div className='relative w-full h-[400px] md:h-[500px]'>
        <Image
          src={imageSrc}
          alt='Header'
          layout='fill'
          objectFit='cover'
          className='w-full h-full'
        />
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-transparent'></div>
        <div className='absolute inset-0 z-10 flex flex-col items-center justify-center text-white'>
          <span className='font-spaceGrotesk font-bold md:text-5xl text-2xl text-center px-6'>
            {title}
          </span>
        </div>
      </div>

      {/* Breadcrumb */}
      {/* <div className='border-b border-gray-300 text-sm w-full flex justify-center items-center py-3'>
        Home <FaChevronRight size={12} className='ml-2' /> {currentPage}
      </div> */}
    </>
  );
};

export default PageHeader;
