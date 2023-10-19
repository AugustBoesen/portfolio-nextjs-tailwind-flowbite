'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function DefaultCarousel() {
  const carouselItems = [
    {
      alt: '[ 111111 ]',
      src: '',
      title: 'BLUSH2023',
      subtitle: 'Project Coordinator',
    },
    {
      alt: '[ 222222 ]',
      src: '',
      title: 'Sotahuuto 2024',
      subtitle: 'Webmaster',
    },
    {
      alt: '[ 333333 ]',
      src: '',
      title: 'SÄRÖ Bandcamp',
      subtitle: 'Producer',
    },
  ];

  return (
    <Carousel className=' bg-blue-400 rounded-3xl overflow-hidden'>
      {carouselItems.map((item) => (
        <div key={item.title}>
          <Image alt={item.title} src={item.src} className='w-full h-auto' />
          <div className='bg-black bg-opacity-60 py-4 pb-20 mt-72'>
            <h2 className='text-2xl md:text-4xl'>{item.title}</h2>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
