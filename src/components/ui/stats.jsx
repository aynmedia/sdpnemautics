/** @format */

import Reavel from '@/lib/reveal';
import React from 'react';

const Stats = () => {
  return (
    <section class='py-12'>
      {' '}
      <Reavel>
        <div class='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
          <div class='rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-50 flex items-center justify-between flex-col gap-16 lg:flex-row'>
            <div class='w-full lg:w-60'>
              <h2 class='font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left'>
                Our Stats
              </h2>
              <p class='text-sm text-gray-500 leading-6 text-center lg:text-left'>
                We help you to unleash the power within your business
              </p>
            </div>
            <div class='w-full lg:w-4/5'>
              <div class='flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between'>
                <div class='block'>
                  <div class='font-manrope font-bold text-4xl text-green mb-3 text-center lg:text-left'>
                    260+
                  </div>
                  <span class='text-gray-900 text-center block lg:text-left'>
                    Units Sold
                  </span>
                </div>
                <div class='block'>
                  <div class='font-manrope font-bold text-4xl text-green mb-3 text-center lg:text-left'>
                    975+
                  </div>
                  <span class='text-gray-900 text-center block lg:text-left'>
                    Active Clients
                  </span>
                </div>
                <div class='block'>
                  <div class='font-manrope font-bold text-4xl text-green mb-3 text-center lg:text-left'>
                    724+
                  </div>
                  <span class='text-gray-900 text-center block lg:text-left'>
                    Projects Delivered
                  </span>
                </div>
                <div class='block'>
                  <div class='font-manrope font-bold text-4xl text-green mb-3 text-center lg:text-left'>
                    89+
                  </div>
                  <span class='text-gray-900 text-center block lg:text-left'>
                    Orders in Queue
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>{' '}
      </Reavel>
    </section>
  );
};

export default Stats;
