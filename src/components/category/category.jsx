/** @format */

import React from 'react';
import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import { color } from 'framer-motion';

function CategoryBento() {
  return (
    <BentoGrid className='max-w-6xl mx-auto'>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          color={item.color}
          link={item.link}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
);
const items = [
  {
    title: 'Air Compressor',
    description: 'Compress air to make it lighter and more efficient.',
    header: <Skeleton />,
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
    color: 'bg-blue-500',
    link: '/products/air-compressor',
  },

  {
    title: 'Vacuum Pumps',
    description: 'Dive into the transformative power of technology.',
    header: <Skeleton />,
    icon: <IconFileBroken className='h-4 w-4 text-neutral-500' />,
    color: 'bg-blue-500',
    link: '/products/vacuum-pump',
  },
  {
    title: 'Air Dryers',
    description: 'Discover the beauty of thoughtful and functional design.',
    header: <Skeleton />,
    icon: <IconSignature className='h-4 w-4 text-neutral-500' />,
    color: 'bg-blue-500',
    link: '/products/air-dryer',
  },
  {
    title: 'Air Chillers',
    description:
      'Understand the impact of effective communication in our lives.',
    header: <Skeleton />,
    icon: <IconTableColumn className='h-4 w-4 text-neutral-500' />,
    color: 'bg-blue-500',
    link: '/products/air-chiller',
  },
  {
    title: 'Oil Cooling Systems',
    description: 'Join the quest for understanding and enlightenment.',
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className='h-4 w-4 text-neutral-500' />,
    color: 'bg-blue-500',
    link: '/products/oil-cooling-system',
  },
  {
    title: 'Air Conditioning Systems',
    description: 'Experience the thrill of bringing ideas to life.',
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className='h-4 w-4 text-neutral-500' />,
    color: 'bg-blue-500',
    link: '/products/air-conditioning-system',
  },
  {
    title: 'Fans',
    description: 'Embark on exciting journeys and thrilling discoveries.',
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className='h-4 w-4 text-neutral-500' />,
    color: 'bg-blue-500',
    link: '/products/fan',
  },
];

export default CategoryBento;
