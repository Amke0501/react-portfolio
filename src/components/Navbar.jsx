import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-6 py-3 font-bold shadow-md h-14 bg-white z-50">
      {/* Logo to the left */}
      <h1 className="font-bold text-sm hover:text-yellow-500 cursor-pointer">
        AMKELWE LUBAVU
      </h1>

      {/* responsive desktoLinks */}
      <div className="hidden md:flex space-x-10 text-lg">
        <a href="#home" className="hover:border-b-2 hover:border-yellow-500 transition cursor-pointer">
          HOME
        </a>
        <a href="#about" className="hover:border-b-2 hover:border-yellow-500 transition cursor-pointer">
          ABOUT
        </a>
        <a href="#projects" className="hover:border-b-2 hover:border-yellow-500 transition cursor-pointer">
          PROJECTS
        </a>
        <a href="#skills" className="hover:border-b-2 hover:border-yellow-500 transition cursor-pointer">
          SKILLS
        </a>
      </div>

      {/* Contact Button */}
      <div className="hidden md:block">
        <a
          href="#contact"
          className="w-32 h-12 bg-yellow-500 text-gray-800 font-semipx-6 py-2 hover:bg-yellow-600 transition cursor-pointer flex items-center justify-center"
        >
          CONTACT ME
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-white flex flex-col items-center py-4 shadow-md md:hidden">
          <a href="#home" onClick={toggleMenu} className="py-2 hover:text-yellow-500 transition">HOME</a>
          <a href="#about" onClick={toggleMenu} className="py-2 hover:text-yellow-500 transition">ABOUT</a>
          <a href="#projects" onClick={toggleMenu} className="py-2 hover:text-yellow-500 transition">PROJECTS</a>
          <a href="#skills" onClick={toggleMenu} className="py-2 hover:text-yellow-500 transition">SKILLS</a>
          <a href="#contact" onClick={toggleMenu} className="mt-2 w-32 h-12 bg-yellow-500 text-gray-800 font-bold px-6 py-2 hover:bg-yellow-600 transition flex items-center justify-center">
            Contact Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
