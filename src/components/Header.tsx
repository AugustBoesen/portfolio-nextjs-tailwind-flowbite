"use client";

import { Navbar } from "flowbite-react";
import Image from "next/image";
export default function Header() {
  return (
    <Navbar fluid className="bg-slate-900 fixed z-50 w-full">
      <Navbar.Brand href="/#hero">
        <Image
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://flowbite.com/docs/images/logo.svg"
          width={30}
          height={30}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          BOESEN.DEV
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/#music">Music</Navbar.Link>
        <Navbar.Link href="/#events">Events</Navbar.Link>
        <Navbar.Link href="/#code">Code</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
