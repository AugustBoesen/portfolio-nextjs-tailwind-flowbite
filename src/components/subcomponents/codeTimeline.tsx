'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';

export default function codeTimeline() {
  return (
    <Timeline className='ml-8 text-white bg-slate-900 py-16 pr-8 rounded-tr-2xl rounded-br-2xl bg-opacity-50'>
      <Timeline.Item className='border-y-2 py-2'>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className='text-cyan-950'>2021</Timeline.Time>
          <Timeline.Title>Godot: GDScript & coding fundamentals</Timeline.Title>
          <Timeline.Body className='text-slate-900'>
            <div>
              I learned basics of coding through learning game development as a
              hobby,
            </div>
            <div>
              with a mix of 2D game scripting and 3D model design and rendering.
            </div>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className='border-y-2 py-2'>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className='text-cyan-950'>2022</Timeline.Time>
          <Timeline.Title>Business Information Technology</Timeline.Title>
          <Timeline.Body className='text-slate-900'>
            <div>
              I started studying at JAMK, learning JS/TS, HTML and CSS during
              the first year.
            </div>
            <div>
              Studies focused on frontend, design and basic functionality.
            </div>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item className='border-y-2 py-2'>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time className='text-cyan-950'>2023</Timeline.Time>
          <Timeline.Title>
            Frontend development & Cloud platforms
          </Timeline.Title>
          <Timeline.Body className='text-slate-900'>
            <div>
              During the 2nd year, I focused on learning frameworks, design and
              cloud utilization.
            </div>
            <div>
              Studies also included fundamentals of backend & databases.
            </div>
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
