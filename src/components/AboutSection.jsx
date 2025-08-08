import React from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen rounded-3xl bg-gray-800 text-white py-20 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
      
        <div className="flex-shrink-0">
          <div className="rounded-full border-4 border-cyan-400 p-2">
            <Image
              src="/Images/pfp.png" 
              alt="About me"
              width={300}
              height={300}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl text-center md:text-left">
          <h2 className="text-4xl font-extrabold">
            ABOUT <span className="text-cyan-400">ME</span>
          </h2>

          <p className="text-base mt-8">
            Hey there! I’m Fatima Bilal — part developer, part designer, and a full-time creative thinker.
            With a degree in BS Information Technology from GGC, Sahiwal, I build more than just websites —
            I craft digital experiences that connect, inspire, and engage. Whether it’s coding a seamless 
            interface, sketching out a sleek UI, or brewing up digital marketing strategies, I love blending 
            logic with aesthetics. Every pixel has a purpose, every line of code a story — and I’m here to 
            bring ideas to life on the web. Let’s build something unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
