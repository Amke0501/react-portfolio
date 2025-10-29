import React from 'react'
import { Mail, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12 text-center md:text-left">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">Contact Me</h3>
      </div>

      {/* contact details */}
      <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 pb-8">
        <a href="mailto:lubavuamkelwe@gmail.com"
          className="flex items-center gap-2 hover:text-yellow-500 transition">
          <Mail size={20} />
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/amkelwe-lubavu-815086237/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-yellow-500 transition">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/Amke0501"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-yellow-500 transition">
          <Github size={20} />
          <span>GitHub</span>
        </a>
      </div>


      {/*  copyright*/}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} <span className="font-semibold">Amkelwe Lubavu</span>.
        All rights reserved.
      </p>
    </div>

    </footer >


  );

};

export default Footer;
