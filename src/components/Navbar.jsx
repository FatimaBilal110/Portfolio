import React from 'react'
import Link from 'next/link' 

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-400/80 shadow-md z-50">
    <div className='flex flex-wrap items-center justify-center mx-auto p-5'>
     <Link href={"#hero"} className='text-4xl text-white font-serif'> 
    Fatima.
     </Link>
     <div className='flex flex-wrap space-x-6 items-center justify-center mx-auto'>
        <ul className='flex flex-wrap gap-4 mt-4 md:mt-0'>
            <li> <Link href={"#about"} className='block py-1 pl-2 pr-3 text-white hover:text-green-800'>About</Link></li>
    
     
            <li> <Link href={"#services"} className='block py-1 pl-2 pr-3 text-white hover:text-purple-500'>Services</Link></li>

            <li> <Link href={"#skills"} className='block py-1 pl-2 pr-3 text-white hover:text-cyan-400'>Skills</Link></li>
        
            <li> <Link href={"#contact"} className='block py-1 pl-2 pr-3 text-white hover:text-cyan-400'>Contact</Link></li>
        </ul>        
     </div>
     </div>
    </nav>
  )
}

export default Navbar;