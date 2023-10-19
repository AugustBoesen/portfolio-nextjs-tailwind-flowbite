'use client';

import { Card } from 'flowbite-react';

export default function DefaultCard() {
  const cards = [
    {
      title: 'Electronic sound design, from EDM to games',
      description: 'EP + game audio',
    },
    {
      title: 'Modern Folk, from covers to compositions',
      description: 'Nintendo folk covers and unreleased albums',
    },
    {
      title: 'Modern pop, from collaborations to solo works',
      description: 'aikamoinen paska',
    },
    {
      title: 'Other works',
      description:
        'A classical piece; a folk metal cover; a fully solo-produced 3D music video',
    },
  ];

  return (
    <div>
      {cards.map((card) => (
        <Card
          key={card.title}
          className='max-w-sm m-4 transition-all duration-200 hover:bg-slate-400 hover:border-slate-900'
          href='#'
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
