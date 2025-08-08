import React from 'react'
import Image from 'next/image'
import {FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaFigma, FaCode, FaPython } from 'react-icons/fa';
import {SiMysql, SiMongodb, SiTailwindcss, SiPostman, SiExpress} from 'react-icons/si';


const SkillsSection = () => {
  return (
      <section id="skills" className="min-h-screen rounded-3xl bg-gray-900 text-white">
     <div className="container mx-auto">
    
<h2 className="text-4xl text-cyan-400 font-extrabold text-center relative top-4">
  Skills
</h2>

   
   <div className="grid  md:grid-cols-3 gap-4 text-white p-7">
  <div className='mt-10 w-60 bg-gray-600 text-white rounded-xl shadow-lg p-6'>
    <h4 className="font-bold text-cyan-400 mb-2">Frontend</h4>
    <ul>
          <li className="flex items-center gap-2"><FaHtml5 /> HTML</li>
          <li className="flex items-center gap-2"><FaCss3Alt /> CSS</li>
          <li className="flex items-center gap-2"><FaJs /> JavaScript</li>
          <li className="flex items-center gap-2"><FaReact /> React.js</li>
          <li className="flex items-center gap-2"><SiTailwindcss /> Tailwind CSS</li>
    </ul>
  </div>
<div className='mt-10 w-60 bg-gray-600 text-white rounded-xl shadow-lg p-6'>
    <h4 className="font-bold text-cyan-400 mb-2">Backend</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><FaNodeJs /> Node.js</li>
          <li className="flex items-center gap-2"><SiExpress /> Express.js</li>
          <li className="flex items-center gap-2"><SiMongodb /> MongoDB</li>
          <li className="flex items-center gap-2"><SiMysql /> SQL</li>
        </ul>
  </div>
<div className='mt-10 w-60 bg-gray-600 text-white rounded-xl shadow-lg p-6'>
    <h4 className="font-bold text-cyan-400 mb-2">Tools</h4>
        <ul className="space-y-2">
          <li className="flex items-center gap-2"><FaGithub /> Git & GitHub</li>
          <li className="flex items-center gap-2"><SiPostman /> Postman</li>
          <li className="flex items-center gap-2"><FaFigma /> Figma</li>
        </ul>
  </div>
<div className='mt-10 w-60 bg-gray-600 text-white rounded-xl shadow-lg p-6'>
  <h4 className="font-bold text-cyan-400 mb-2">Other Languages</h4>
  <ul>
    <li className="flex items-center gap-2"><FaCode /> C++</li>
    <li className="flex items-center gap-2"><FaPython /> Python</li>
  </ul>
</div>
</div>
</div>
   </section>
   
  )
}

export default SkillsSection