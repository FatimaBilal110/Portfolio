"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "About", href: "/#about", hover: "hover:text-green-800" },
    { name: "Services", href: "/#services", hover: "hover:text-purple-500" },
    { name: "Skills", href: "#/skills", hover: "hover:text-cyan-400" },
    { name: "Contact", href: "/#contact", hover: "hover:text-purple-500" },
    { name: "Blog", href: "/blog", hover: "hover:text-cyan-400" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-400/80 shadow-md z-50">
      <div className="flex items-center justify-between mx-auto p-5 max-w-7xl">

        <Link href={"/#hero"} className="text-4xl text-white font-serif">
          Fatima.
        </Link>

        <ul className="hidden md:flex gap-6">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className={`block py-1 px-3 text-white ${link.hover}`}
              >
                {link.name}
              </Link>
              
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none" >
            
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-400/90 shadow-lg border-t border-gray-300">
          <ul className="flex flex-col p-4 space-y-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`block py-2 px-3 text-white ${link.hover}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
