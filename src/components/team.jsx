/** @format */

import React from 'react';
import team from '../../public/images/team.jpg';
import Image from 'next/image';
const Team = () => {
  return (
    <div>
      <div className='grid grid-cols-1 align-center md:grid-cols-3 my-24 max-w-7xl mx-6 md:mx-auto gap-6'>
        <div className='group relative border border-r-none border-gray-300  text-[#1E1C2A] w-full h-full cursor-pointer '>
          <Image
            className='absolute inset-0 w-full h-full object-cover transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-hover:scale-105 ease-in-out transform rounded-lg'
            src={team}
            alt='team'
            width='100%'
            height='100%'
          />

          <div className='absolute flex flex-col justify-evenly  p-12 h-[400px] group-hover:bg-green/90 transition duration-200 ease-in-out'>
            <p className='text-2xl text-green font-bold group-hover:text-white'>
              Team
            </p>
            <p className='group-hover:text-white text-lg text-left text-gray-500 '>
              It is due to our skilled team that we have retained the strength
              and confidence to excel in this field. Our team comprises of the
              knowledgeable and experienced Procurement Agents, Warehousing
              Managers, Logistic Support Executives and Marketing & Sales
              Personnel, etc.
            </p>
          </div>
        </div>
        <div className='group relative border border-x-none border-gray-300 text-[#1E1C2A] flex flex-col justify-evenly h-[400px] cursor-pointer'>
          <Image
            className='absolute inset-0 w-full h-full object-cover transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-hover:scale-105 ease-in-out transform rounded-lg'
            src={team}
            alt='team'
            width='100%'
            height='100%'
          />
          <div className='absolute flex flex-col justify-evenly  p-12 h-[400px] group-hover:bg-green/90'>
            <p className='text-2xl text-green font-bold group-hover:text-white'>
              Warehouse
            </p>
            <p className='group-hover:text-white text-lg text-left text-gray-500 '>
              We have access to advance and spacious warehousing facility,
              because of which we stock the Machines in a methodical manner as
              well as cater to bulk orders. We also ensure proper organization
              of the inventory for quick retrieval of products.
            </p>
          </div>
        </div>
        <div className='group relative border border-x-none border-gray-300 text-[#1E1C2A] flex flex-col justify-evenly h-[400px] cursor-pointer'>
          <Image
            className='absolute inset-0 w-full h-full object-cover transition-opacity duration-200 opacity-0 group-hover:opacity-100 group-hover:scale-105 ease-in-out transform rounded-lg'
            src={team}
            alt='team'
            width='100%'
            height='100%'
          />
          <div className='absolute flex flex-col justify-evenly  p-12 h-[400px] group-hover:bg-green/90'>
            <p className='text-2xl text-green font-bold group-hover:text-white'>
              Our Mission
            </p>
            <p className='group-hover:text-white text-lg text-left text-gray-500 '>
              {' '}
              At SDPneumatics, our mission is to provide top-tier pneumatic
              solutions that exceed customer expectations. We are committed to
              innovation, reliability, and customer satisfaction, ensuring that
              our products contribute to the success of your projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
