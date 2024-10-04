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
import Link from 'next/link';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaDownload } from 'react-icons/fa6';

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
              <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={300}
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{product.title}</CardTitle>
            </CardContent>
            <CardFooter>
              <div className='flex gap-2 flex-wrap'>
                <Button variant='ghost' size='lg'>
                  Get A Quote
                  <FaArrowCircleRight size={24} className='pl-2' />
                </Button>
                <Button variant='ghost' size='lg'>
                  Brochure <FaDownload size={24} className='pl-2' />
                </Button>
                {product.features.map((feature, index) => (
                  <Badge
                    key={index}
                    variant='secondary'
                    className='text-gray-500'>
                    {feature}
                  </Badge>
                ))}
              </div>
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
