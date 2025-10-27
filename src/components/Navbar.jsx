import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between items-centre px-10 py-3 bg-white
 font-bold text-black-400  shadow-md h-13">
        {/* display logo to the left */}
<h1 className="font-bold text-xl hover:text-yellow-600 hover:underline cursor-pointer">Portfolio</h1>

     {/* navlinks */}
     <div className="flex space-x-10 text-l">
                <a href="#" className="hover:text-yellow-600 hover:border cursor-pointer">Home</a>
                <a href="#"className="hover:text-yellow-600 hover:border cursor-pointer">About</a>
                <a href="#"className="hover:text-yellow-600 hover:border cursor-pointer">Projects</a>
                <a href="#"className="hover:text-yellow-600 hover:border cursor-pointer">Contact</a>
        </div>
        <div className="w-20"></div>

        {/* get in touch button */}
        <div>
            <a href="#" className="bg-yellow-400 text-white font-bold px-4 py-2 hover:bg-yellow-600 transition cursor-pointer">
            Contact Me
            </a>
        </div>
    </nav>
  )
}

export default Navbar