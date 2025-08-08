"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col rounded-2xl justify-between items-center bg-gray-700 px-4 py-10 pt-[80px]"
    >
    
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-8 w-full max-w-6xl">
        <div className="text-white text-center md:text-left md:w-1/2 space-y-6 p-7">
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-green-500">
              I'm <br /> FATIMA BILAL
            </span>
          </h1>
          <div className="bg-gray-600 rounded-xl p-4 inline-block shadow-lg">
            <TypeAnimation
              sequence={[
                "Web Developer", 1500,
                "UI/UX Designer", 1500,
                "Digital Marketer", 1500
              ]}
              wrapper="span"
              speed={50}
              className="text-cyan-400 text-lg sm:text-xl font-mono"
              repeat={Infinity}
            />
          </div>
        </div>

        <div className="relative md:w-1/2 flex justify-center items-center">
          <Image
            src="/Images/pfp.png"
            alt="Profile Picture"
            width={350}
            height={300}
            className="border-4 border-cyan-400"
          />
          <div className="absolute md:top-4 md:right-10 top-[-20px] right-0 sm:right-5">
  <div className="relative bg-gray-600 text-cyan-400 rounded-2xl text-center font-mono shadow-lg p-3 text-sm">
    Hey, there
    <div className="absolute -bottom-2 left-3 w-0 h-0 border-t-8 border-t-gray-600 border-r-8 border-r-transparent" />
  </div>
</div>
</div>
      </div>
      <div className="flex space-x-8" >
        <a
          href="https://github.com/FatimaBilal110"
          target="_blank"
          className="flex items-center space-x-2  text-2xl text-pink-400 hover:text-cyan-400"
        >
           <FaGithub/>
           <span className="font-serif">GitHub</span>
        </a>
        <a
          href="mailto:fatimabilal9012l@gmail.com"
          target="_blank"
          className="flex items-center space-x-2 text-2xl text-pink-400 hover:text-cyan-400"
        >
          <MdEmail/>
          <span className="font-serif">Email</span>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
