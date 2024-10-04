/** @format */

import PageHeader from '@/components/ui/page_header';
import React from 'react';
import Product from '@/components/ui/product';
import products from '@/lib/products.json';

export const metadata = {
  title: 'Our Wide Range of Products',
  description: 'Our Wide Range of Products',
};

const Page = () => {
  return (
    <div>
      <PageHeader title='Products' />
      <section className='w-full text-center gap-6 my-12'>
        <h1 className='text-5xl font-bold my-12 font-spaceGrotesk'>
          Our Products Range
        </h1>
        <p className='text-lg text-left max-w-6xl mx-auto'>
          We provide the ideal products for multiple applications and complete
          systems. Therefore, a broad range of pneumatic variations is offered
          for each system component. This complete array of products results in
          pneumatic system that are capable of specially meeting infinitely
          diverse requirements.
        </p>
        <Product products={products} />
      </section>
    </div>
  );
};

export default Page;
