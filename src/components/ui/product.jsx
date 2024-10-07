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
import { FaDownload } from 'react-icons/fa6';
import Enquireproduct from './enquireproduct';
import DownloadButton from './downloadbrochure';

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
            <CardFooter className='flex justify-between flex-col'>
              <div className='flex gap-2 text-sm items-center'>
                <Enquireproduct
                  className=''
                  triggerText='Get A Quote'
                  productName={product.title}
                />
                <DownloadButton />
              </div>
              <div className='flex gap-2 flex-wrap'>
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
