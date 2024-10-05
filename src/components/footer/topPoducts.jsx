/** @format */
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import products from '@/lib/products.json';

const ProductList = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Function to shuffle the products array
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
      return array;
    };

    // Shuffle products and select the first 6
    const shuffledProducts = shuffleArray([...products]);
    setRandomProducts(shuffledProducts.slice(0, 5));
  }, [products]);

  return (
    <ul>
      {randomProducts.map((item) => (
        <li
          key={item.title}
          className='my-6 text-left font-bold hover:underline hover:text-green'>
          <Link href='products'>{item.title}</Link>{' '}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
