import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-centre px-6 py-3
 font-bold shadow-md h-14">
      {/* display logo to the left */}
      <h1 className="font-bold text-sm hover:text-yellow-500 hover: cursor-pointer">AMKELWE LUBAVU</h1>

      {/* navlinks */}
      <div className="flex space-x-10 text-l">
        <a href="#" className="bg-white text-gray-800 font-bold border-2 border-transparent 
               hover:border-yellow-500 transition cursor-pointer">HOME</a>
        <a href="#" className="bg-white text-gray-800 font-bold border-2 border-transparent 
               hover:border-yellow-500 transition cursor-pointer">ABOUT</a>
        <a href="#" className="bg-white text-gray-800 font-bold border-2 border-transparent 
               hover:border-yellow-500 transition cursor-pointer">PROJECTS</a>
        <a href="#" className="bg-white text-gray-800 font-bold border-2 border-transparent 
               hover:border-yellow-500 transition cursor-pointer">SKILLS</a>
      </div>
      <div className="w-20"></div>

      {/* get in touch button */}
      <div>
        <a href="#" className="w-32 h-12 bg-yellow-500 text-gray-800 font-bold px-6 py-2 hover:bg-yellow-600 transition cursor-pointer">
          Contact Me
        </a>
      </div>
    </nav>
  )
}

export default Navbar