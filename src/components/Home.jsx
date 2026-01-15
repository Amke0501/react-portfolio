
import React from 'react';
import heroImage from "../assets/hero.jpg";

const Home = () => {
    return (

        // left column with name and tag line
        // container mx-auto  = width will remain the same for all screens
        // added padding top, bottom and y-axis
        // - to pull elements to the opposite direction 

        <section className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-8">
            <div className="w-full md:w-1/2 space-y-4 text-center md:text-left mt-6 md:mt-0">
                <h1 className="text-xl sm:text-2xl font-semibold text-gray-700">Hi, I'm Amkelwe Lubavu</h1>
                  <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-yellow-500 leading-tight">FULL-STACK DEVELOPER</h2>
                <p className="text-medium md:text-xl max-w-xl text-gray-600">Specializing in React, Node.js, and secure full-stack applications. I transform ideas into scalable, production-ready solutions with clean code and modern best practices.</p>

                {/* PROJECTS AND SKILLS BUTTONS */}

                {/* increase margin top (mt-4) to create space between buttons and <p></p>*/}
                {/* gap-4 to create space between the two buttons */}

                <div className="mt-6 flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
                    <a href="#projects" className="w-40 h-12 bg-yellow-500 text-gray-900 font-bold px-6 py-2 rounded-lg hover:bg-yellow-600 transition cursor-pointer text-center flex items-center justify-center shadow-md">View Projects</a>
                    <a href="#contact" className="w-40 h-12 bg-white text-gray-800 font-bold px-6 py-2 border-2 border-yellow-500 rounded-lg hover:bg-yellow-500 transition cursor-pointer text-center flex items-center justify-center">Contact Me</a>
                </div>
            </div>

            {/*  right hand column*/}
           <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
  <img
    src={heroImage}
    alt="Hero"
    className="w-64 sm:w-80 md:w-[400px] lg:w-[450px] rounded-2xl shadow-lg object-cover hover:scale-105 transition-transform duration-300"
  />
</div>
        </section>

    );
};

export default Home;