'use client';

import { Carousel } from 'flowbite-react';
import Image from 'next/image';

export default function DefaultCarousel() {
  const carouselItems = [
    {
      alt: '[ 111111 ]',
      src: '/blushposter.png',
      title: 'BLUSH2023',
      subtitle: 'Project Coordinator + Webmaster',
    },
    {
      alt: '[ 222222 ]',
      src: '/sotahuuto.png',
      title: 'Sotahuuto 2024',
      subtitle: 'Communications coordinator + Webmaster',
    },
    {
      alt: '[ 333333 ]',
      src: '/sarobandcamp.jpg',
      title: 'SÄRÖ Bandcamp',
      subtitle: 'Producer',
    },
    {
      alt: '',
      src: '/GK.png',
      title: 'Green Knights Campaign',
      subtitle: 'Lead event organizer',
    },
  ];

  return (
    <Carousel className=' bg-black rounded-3xl overflow-hidden'>
      {carouselItems.map((item) => (
        <div key={item.title}>
          <Image
            width={5000}
            height={5000}
            alt={item.title}
            src={item.src}
            className=' max-w-[100%] min-h-[100%] overflow-clip absolute -z-50'
          />
          <div className='bg-black bg-opacity-70 py-4 pb-20 mt-72'>
            <h2 className='text-2xl md:text-4xl'>{item.title}</h2>
            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
