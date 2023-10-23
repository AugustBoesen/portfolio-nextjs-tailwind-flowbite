'use client';

import { Navbar } from 'flowbite-react';
import Image from 'next/image';

export default function Header() {
  return (
    <Navbar
      fluid
      className='fixed z-50 w-full border-b-2 !border-slate-900 !bg-slate-950'
    >
      <Navbar.Brand href='/#hero'>
        <Image
          alt='Flowbite React Logo'
          className='mr-3 h-6 sm:h-9'
          src='https://flowbite.com/docs/images/logo.svg'
          width={30}
          height={30}
        />
        <span className='self-center whitespace-nowrap text-xl font-semibold text-white'>
          BOESEN.DEV
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <div className='w-12 hover:bg-slate-700 rounded-3xl transition-full duration-300'>
          <div className=' backdrop-blur-sm rounded'>
            <Navbar.Link href='/#music'>Music</Navbar.Link>
          </div>
        </div>

        <div className='w-12 hover:bg-slate-700 rounded-3xl transition-full duration-300'>
          <div className=' backdrop-blur-sm rounded'>
            <Navbar.Link href='/#events'>Events</Navbar.Link>
          </div>
        </div>
        <div className='w-12 hover:bg-slate-700 rounded-3xl transition-full duration-300'>
          <div className=' backdrop-blur-sm rounded'>
            <Navbar.Link href='/#code'>Code</Navbar.Link>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
