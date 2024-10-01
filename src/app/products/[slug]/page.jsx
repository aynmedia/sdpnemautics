/** @format */

import { useRouter } from 'next/router';
import products from '@/lib/products.json';

const ProductPage = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold'>{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className='w-full h-48 object-cover'
      />
      <p className='mt-4'>{product.description}</p>
    </div>
  );
};

// export async function getStaticPaths() {
//   const paths = products.map((product) => ({
//     params: {
//       slug: product.title.toLowerCase().replace(/\s+/g, '-'),
//     },
//   }));

//   return {
//     paths,
//     fallback: true, // Enable fallback for dynamic pages
//   };
// }

// export async function getStaticProps({ params }) {
//   const product = products.find(
//     (p) => p.title.toLowerCase().replace(/\s+/g, '-') === params.slug
//   );

//   return {
//     props: {
//       product: product || null,
//     },
//   };
// }

export default ProductPage;
