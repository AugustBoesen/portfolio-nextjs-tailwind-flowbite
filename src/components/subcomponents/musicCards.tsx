'use client';

import { Card } from 'flowbite-react';

export default function DefaultCard() {
  const cards = [
    {
      title: 'Electronic sound design, from EDM to games',
      description: 'Link to "Among Us" EP on Spotify',
      url: 'https://open.spotify.com/album/5f1ZgjsnmyZd0Z1PPZavHE?si=ef29a0c14de04d62',
    },
    {
      title: 'Modern Folk, from covers to compositions',
      description: 'Link to VGM folk playlist on YouTube',
      url: 'https://www.youtube.com/watch?v=gJbARDlePDU&list=PLz_U02zhwPBoHkLjGtvRWaE2Aq_CIOZWB',
    },
    {
      title: 'Modern pop, from collaborations to solo works',
      description: 'Link to "M.E.T.O" collaborative single on Spotify',
      url: 'https://open.spotify.com/track/2sVx5Qqj11MeYLiYvah1AM?si=e0ec7efd5c9d43a1',
    },
    {
      title: 'Other works',
      description:
        'A classical piece; a folk metal cover; a fully solo-produced 3D music video',
      url: 'https://www.youtube.com/@scionicmusic/videos',
    },
  ];

  return (
    <div>
      {cards.map((card) => (
        <Card
          key={card.title}
          className='max-w-sm m-4 transition-all duration-200 hover:bg-slate-400 hover:border-slate-50 hover:shadow-inner shadow-2xl'
          href={card.url}
        >
          <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            <div>{card.title}</div>
          </h5>
          <div className='font-normal text-gray-700 dark:text-gray-400'>
            <div>{card.description}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
