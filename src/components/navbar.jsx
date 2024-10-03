/** @format */

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdDehaze, MdClose } from 'react-icons/md';
import Image from 'next/image';
import { menuItems } from '@/lib/stats'; // Modify with your actual menu structure

// Importing Sheet components from Shadcn
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`px-12 fixed top-0 left-0 w-full z-50 bg-transparent py-5 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-white text-[#1E1C2A] hover:text-green transform'
          : 'py-5 bg-transparent border-b border-gray-300/20 shadow-md'
      }`}>
      <nav className='border-gray-200'>
        <div className='container mx-auto flex flex-wrap items-center justify-between px-4 md:px-8'>
          {/* Logo Section */}
          <Link href='/' className='flex items-center'>
            {isScrolled ? (
              <Image
                src='/images/logo.png'
                alt='SDPneumatics Logo'
                width={50}
                height={25}
              />
            ) : (
              <Image
                src='/images/logofull.png'
                alt='SDPneumatics Logo'
                width={100}
                height={75}
              />
            )}
          </Link>

          {/* Desktop Menu Items (Shown on md screens and above) */}
          <ul className='hidden md:flex space-x-8'>
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className='py-4 hover:underline hover:text-green  font-bold block pl-3 pr-4 rounded focus:outline-none uppercase transition duration-150 ease-in-out'>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button (Shown only on small screens) */}
          <Sheet>
            <SheetTrigger asChild>
              <button className='md:hidden ml-3 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center uppercase transition duration-150 ease-in-out font-bold'>
                <MdDehaze className='w-6 h-6' />
              </button>
            </SheetTrigger>

            {/* Sheet content for mobile menu */}
            <SheetContent side='left' className='p-4 bg-white w-full h-screen'>
              <SheetHeader>
                <SheetTitle>SD Pneumatics</SheetTitle>
                <SheetClose asChild>
                  {/* <button className='text-right mb-4'>
                    <MdClose className='w-6 h-6' />
                  </button> */}
                </SheetClose>
              </SheetHeader>

              <ul className='flex flex-col space-y-4 justify-center items-center h-full'>
                {menuItems.map((item) => (
                  <li key={item.name} className='relative group'>
                    <SheetClose asChild>
                      <Link
                        href={item.href}
                        className=' py-4 hover:underline hover:text-green text-[#1E1C2A] font-bold block pl-3 pr-4 rounded focus:outline-none uppercase transition duration-150 ease-in-out'>
                        {item.name}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
