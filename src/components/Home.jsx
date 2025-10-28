
import React from 'react'

const Home = () => {
    return (

        // left column with name and tag line
        // container mx-auto  = width will remain the same for all screens
        // added padding top, bottom and y-axis
        // - to pull elements to the opposite direction 

        <section className="container mx-auto pt-20 pb-6 px-5 sm:px-5 lg:px-7">
            <div className="w-full md:w-1/2 space-y-6">
                <h1 className="text-4xl-sm font-bold"> Hi, my name is Amkelwe Lubavu</h1>
                <h2 className="text-3xl md:text-4xl lg:*:text-6xl font-bold">I Build Smarter Solutions</h2>
                <p className="text-medium md:text-xl max-w-xl">I am an aspiring software developer passionate about building clean, efficient, and user-focused digital solutions. I enjoy transforming ideas into functional applications and continuously improving my skills to create meaningful technology that solves real-world problems.</p>
            </div>


            {/* PROJECTS AND SKILLS BUTTONS */}

            {/* increase margin top (mt-4) to create space between buttons and <p></p>*/}
            {/* gap-4 to create space between the two buttons */}

            <div className="mt-4 gap-4 flex">
                <a href="#" className="w-32 h-12 bg-white text-gray-800 font-bold px-6 py-2 border-2 border-yellow-500 hover:bg-yellow-500 transition cursor-pointer">Projects</a>
                <a href="#" className="w-32 h-12 bg-yellow-500 text-gray-800 font-bold px-6 py-2 hover:bg-yellow-600 transition cursor-pointer">Skills</a>
            </div>
        </section>


// right side of the column with a picture





    )
}

export default Home