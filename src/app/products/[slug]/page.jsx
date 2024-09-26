/** @format */

import React from 'react';
import { products } from '@/lib/products';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}
export async function generateMetadata({ params }) {
  const product = products.filter((product) => {
    return product.slug === params.slug;
  })[0];
  return {
    title: product.title,
    description: product.description,
  };
}

const page = async ({ params }) => {
  const product = products.filter((product) => {
    return product.slug === params.slug;
  })[0];
  return (
    <div className='flex flex-col items-center justify-center min-h-screen space-y-8'>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
};

export default page;
