'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function codeTimeline() {
  const timelineItems = [
    {
      year: '2021',
      title: 'Godot: GDScript & coding fundamentals',
      description:
        'I learned basics of coding through learning game development as a hobby, with a mix of 2D game scripting and 3D model design and rendering.',
    },
    {
      year: '2022',
      title: 'Business Information Technology',
      description:
        'I started studying at JAMK, learning JS/TS, HTML and CSS during the first year. Studies focused on frontend, design and basic functionality.',
    },
    {
      year: '2023',
      title: 'Frontend development & Cloud platforms',
      description:
        'During the 2nd year, I focused on learning frameworks, design and cloud utilization. Studies also included fundamentals of backend & databases.',
    },
  ];

  return (
    <Timeline className='ml-8 text-white bg-slate-900 py-16 pr-8 rounded-tr-2xl rounded-br-2xl bg-opacity-50'>
      {timelineItems.map((item, index) => (
        <Timeline.Item key={index} className='border-y-2 py-2'>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time className='text-cyan-950'>{item.year}</Timeline.Time>
            <Timeline.Title>{item.title}</Timeline.Title>
            <Timeline.Body className='text-slate-900'>
              <div>{item.description}</div>
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline>
  );
}
