/** @format */
'use client';
import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Product = ({ products }) => {
  const [visibleProducts, setVisibleProducts] = useState(6);

  const loadMore = () => {
    setVisibleProducts((prevCount) => prevCount + 6);
  };
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6 max-w-6xl mx-auto my-12'>
        {products.slice(0, visibleProducts).map((product, index) => (
          <Card className='shadow-md' key={index}>
            <CardHeader>
              {/* <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
        /> */}
              <Image
                src='https://assets.aceternity.com/macbook.png'
                alt={product.title}
                width={400}
                height={300}
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.title}</CardTitle>
              {/* <p>{product.description}</p> */}
            </CardContent>
            <CardFooter>
              <Badge variant='secondary'>{product.location}</Badge>
              <Badge variant='secondary'>{product.category}</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
      <div className='flex my-24 justify-center max-w-6xl mx-auto'>
        {visibleProducts < products.length && (
          <Button variant='outline' size='lg' onClick={loadMore}>
            Load More
          </Button>
        )}
      </div>
    </>
  );
};

export default Product;
