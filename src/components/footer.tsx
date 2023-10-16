"use client";

import { Footer } from "flowbite-react";
import { SocialIcon } from "react-social-icons";

export default function DefaultFooter() {
  return (
    <Footer
      container
      className="bg-black rounded-none shadow-inner shadow-slate-700"
    >
      <Footer.Copyright by="Severi Boesen" href="#" year={2023} />
      <Footer.LinkGroup>
        <SocialIcon
          className="m-4 hover:bg-white rounded-full"
          url="https://www.instagram.com/jytkypappa555/"
        />
        <SocialIcon
          className="m-4 hover:bg-white rounded-full"
          url="www.linkedin.com/in/severi-boesen-71a0b31a7"
        />
        <SocialIcon
          className="m-4 hover:bg-white rounded-full"
          url="https://youtube.com/@scionicmusic?si=EmIedtZ0OimnZpVK"
        />
        <SocialIcon
          className="m-4 hover:bg-white rounded-full"
          url="https://github.com/AugustBoesen"
        />
      </Footer.LinkGroup>
    </Footer>
  );
}
