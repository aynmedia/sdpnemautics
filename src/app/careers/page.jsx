/** @format */

import Team from '@/components/team';
import PageHeader from '@/components/ui/page_header';
import React from 'react';

const page = () => {
  return (
    <>
      <PageHeader title='Careers' imageSrc='/images/Careers_Img.webp' />
      <div className='max-w-6xl my-24 mx-4 md:mx-auto'>
        <h1 className='text-4xl font-bold text-left font-spaceGrotesk mb-2'>
          Join Our Team
        </h1>
        <p className='text-lg text-left'>
          Join Our Team at SD Pneumatics, we’re not just shaping the future of
          pneumatics; we’re creating an environment where talent thrives. We
          believe in pushing the boundaries of innovation while maintaining an
          unwavering commitment to quality and customer satisfaction. If you’re
          passionate, driven, and ready to make an impact, we invite you to
          explore career opportunities with us.
        </p>
        <div className='text-center my-12 text-2xl font-medium italic'>
          No Opennings at the moment, but we will be opening positions in the
          near future.
        </div>
        <Team />
      </div>
    </>
  );
};

export default page;
