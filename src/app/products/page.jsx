/** @format */

import PageHeader from '@/components/ui/page_header';
import React from 'react';
import Product from '@/components/ui/product';
import products from '@/lib/products.json';
import Reavel from '@/lib/reveal';

export const metadata = {
  title: 'Our Wide Range of Products',
  description: 'Our Wide Range of Products',
};

const Page = () => {
  return (
    <div>
      <PageHeader
        title='Our Products Range'
        currentPage='Products'
        imageSrc='/images/productpage.jpg'
      />
      <section className='w-full text-center gap-6 my-12'>
        {' '}
        <Reavel>
          <p className='text-lg text-left max-w-6xl mx-auto'>
            We provide the ideal products for multiple applications and complete
            systems. Therefore, a broad range of pneumatic variations is offered
            for each system component. This complete array of products results
            in pneumatic system that are capable of specially meeting infinitely
            diverse requirements.
          </p>
        </Reavel>
        <Reavel>
          <Product products={products} />
        </Reavel>
      </section>
    </div>
  );
};

export default Page;
