import React from 'react';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bottom-0 left-0 w-full bg-gray-800 shadow-md z-50">
      <div className="flex flex-wrap items-center justify-center mx-auto p-11 space-x-8">
                <a
                  href="https://github.com/FatimaBilal110"
                  target="_blank"
                  className="flex items-center space-x-2  text-xl text-pink-400 hover:text-cyan-400"
                >
                   <FaGithub/>
                   <span className="font-serif">GitHub</span>
                </a>
                <a
                  href="mailto:fatimabilal9012l@gmail.com"
                  target="_blank"
                  className="flex items-center space-x-2 text-xl text-pink-400 hover:text-cyan-400"
                >
                  <MdEmail/>
                  <span className="font-serif">Email</span>
                </a>
                <a
                  href="mailto:fatimabilal9012l@gmail.com"
                  target="_blank"
                  className="flex items-center space-x-2 text-xl text-pink-400 hover:text-cyan-400"
                >
                  <FaLinkedin/>
                  <span className="font-serif">Linkedin</span>
                </a>          
      </div>
    </footer>
  );
};

export default Footer;
