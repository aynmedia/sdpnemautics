/** @format */

import CategoryBento from '@/components/category/category';
import Hero from '@/components/hero/hero';
import About from '@/components/ui/about';
import Company from '@/components/ui/companydetails';
import AppleCardsCarousel from '@/components/ui/masonryfgrid';
import Whyus from '@/components/ui/whyus';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen space-y-8'>
      {/* Hero Section */}
      <section className='w-full'>
        <Hero />
      </section>
      <section className='w-full text-center gap-6'>
        <About />
      </section>
      {/* Lorem Ipsum Section */}
      <section className='w-full text-center gap-6'>
        <h1 className='text-5xl font-bold my-12 font-spaceGrotesk'>
          WHAT ARE YOU LOOKING FOR?
        </h1>
        <CategoryBento />
      </section>
      <section className='w-full text-center gap-6'>
        <Company />
      </section>
      <section className='w-full text-center gap-6'>
        <Whyus />
      </section>
      <section className='w-full text-center gap-6 pt-64'>
        <AppleCardsCarousel />
      </section>
    </main>
  );
}
