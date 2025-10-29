
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
                <h1 className="text-xl sm:text-2xl font-semibold"> Hi, my name is Amkelwe Lubavu</h1>
                  <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-yellow-500 leading-tight">I BUILD SMARTER SOLUTIONS</h2>
                <p className="text-medium md:text-xl max-w-xl">I am an aspiring software developer passionate about building clean, efficient, and user-focused digital solutions.</p>

                {/* PROJECTS AND SKILLS BUTTONS */}

                {/* increase margin top (mt-4) to create space between buttons and <p></p>*/}
                {/* gap-4 to create space between the two buttons */}

                <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center md:items-start justify-center md:justify-start">
                    <a href="#" className="w-32 h-12 bg-white text-gray-800 font-bold px-6 py-2 border-2 border-yellow-500 hover:bg-yellow-500 transition cursor-pointer">Projects</a>
                    <a href="#" className="w-32 h-12 bg-yellow-500 text-gray-800 font-bold px-6 py-2 hover:bg-yellow-600 transition cursor-pointer">Skills</a>
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