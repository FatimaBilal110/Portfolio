import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  return (
   <section id="services" className="min-h-screen rounded-3xl bg-gray-700 text-white py-20 px-10">
  <div className="container mx-auto">
    
    {/* Centered Heading */}
    <h2 className="text-4xl text-cyan-400 font-extrabold text-center">
      Services
    </h2>

    <div className="mt-12 flex flex-col md:flex-row items-center gap-10 justify-center">
   
      <div className="w-[300px] bg-gray-600 text-white rounded-xl shadow-lg p-6 border-4 border-gray-600 hover:border-cyan-400">
        <h3 className="text-3xl text-center font-bold mb-2">UI UX Designing</h3>
         <div className="w-full h-9 bg-pink-400 mb-4 flex justify-center items-center">
             <Image
                          src="/Images/ui.png" 
                          alt="web"
                          width={60}
                          height={60}
                        />
         </div>
        <p className="text-base">
          I'm a passionate UI/UX Developer dedicated to crafting intuitive and visually stunning
          digital experiences. With expertise in user-centered design, wireframing, and
          prototyping, I bridge the gap between aesthetics and functionality.
        </p>
      </div>

      {/* Card 2 */}
      <div className="w-[300px] bg-gray-600 hover:bg-gray-700 text-white rounded-xl shadow-lg p-6 border-4 border-gray-600 hover:border-pink-400">
        <h3 className="text-3xl text-center font-bold mb-2">Web Developing</h3>
           <div className="w-full h-9 bg-cyan-400 mb-4 flex justify-center items-center">
             <Image
                          src="/Images/web.png" 
                          alt="web"
                          width={80}
                          height={80}
                        />
         </div>
        <p className="text-base">
        I'm a skilled Web Developer focused on building robust and dynamic digital solutions. With hands-on
        experience in JavaScript, React, Node.js, and database integration, I create seamless frontend and
        backend systems that power modern web applications.
        </p>
      </div>

      <div className="w-[300px] bg-gray-600 text-white rounded-xl shadow-lg p-6 border-4 border-gray-600 hover:border-cyan-400">
        <h3 className="text-3xl text-center font-bold mb-2">Digital Marketing</h3>
            <div className="w-full h-9 bg-pink-400 mb-4 flex justify-center items-center">
             <Image
                          src="/Images/digi.png" 
                          alt="web"
                          width={35}
                          height={35}
            />
         </div>
        <p className="text-base">
         I'm a results-driven Digital Marketer passionate about boosting online presence and engagement. From SEO 
         and content strategy to social media and analytics, I craft data-backed campaigns that connect brands with 
         their audience effectively.
        </p>
      </div>

    </div>
  </div>
</section>
  );
};

export default ServicesSection;
