/** @format */

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { MdDehaze, MdClose } from 'react-icons/md';
import React from 'react';
import { menuItems } from '@/lib/stats'; // Modify with your actual menu structure
import logo from '../../public/images/logo.png';
import logofull from '../../public/images/logofull.png';
import Image from 'next/image';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false); // Mega Menu state

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

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
  };

  return (
    <div
      className={`px-12 fixed top-0 left-0 w-full z-50 bg-transparent py-5 transition-all duration-300 ${
        isScrolled
          ? 'py-2 bg-white text-[#1E1C2A] transform'
          : 'py-5 bg-transparent text-white'
      }`}>
      <nav className='border-gray-200'>
        <div className='container mx-auto flex flex-wrap items-center justify-between px-4 md:px-8'>
          {/* Logo Section */}
          <Link href='/' className='flex items-center'>
            {isScrolled ? (
              <Image
                src={logo}
                alt='SDPneumatics Logo'
                width={50}
                height={25}
              />
            ) : (
              <Image
                src={logofull}
                alt='SDPneumatics Logo'
                width={100}
                height={75}
              />
            )}
          </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center uppercase transition duration-150 ease-in-out font-bold'>
            {isOpen ? (
              <MdClose className='w-6 h-6' />
            ) : (
              <MdDehaze className='w-6 h-6' />
            )}
          </button>

          {/* Menu Items - Mobile and Desktop */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full md:flex md:items-center md:w-auto`}>
            <ul className='flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium'>
              {menuItems.map((item) => (
                <li key={item.name} className='relative group'>
                  {item.megaMenu ? (
                    <div
                      className='relative cursor-pointer'
                      onMouseEnter={toggleMegaMenu}
                      onMouseLeave={toggleMegaMenu}>
                      <Link
                        href={item.href}
                        className='bg-white py-4 md:py-0  hover:underline hover:text-green hover:decoration-4 font-bold hover:underline-offset-8 shadow-md md:bg-transparent md:shadow-none block pl-3 pr-4 rounded md:p-4 focus:outline-none uppercase transition duration-150 ease-in-out'>
                        {item.name}
                      </Link>
                      {isMegaMenuOpen && (
                        <div className='absolute left-0 top-full shadow-lg p-6 grid grid-cols-3 gap-8'>
                          {/* Mega Menu Content */}
                          {item.megaMenu.map((column, colIdx) => (
                            <div key={colIdx}>
                              <h4 className='text-gray-700 font-bold mb-4'>
                                {column.title}
                              </h4>
                              <ul>
                                {column.links.map((link, linkIdx) => (
                                  <li key={linkIdx} className='mb-2'>
                                    <Link
                                      href={link.href}
                                      className=' hover:text-green  font-bold'>
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className='bg-white py-4 md:py-0  hover:underline hover:text-green hover:decoration-2 hover:underline-offset-8 shadow-md md:bg-transparent md:shadow-none block pl-3 pr-4 rounded md:p-4 focus:outline-none uppercase transition duration-150 ease-in-out'>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
