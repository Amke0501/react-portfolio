
import React from 'react'

const Home = () => {
    return (

        // added padding and increased margins in order to justify home content centre

        <div className="w-full h-screen bg-white px-8 m-70 ml-30 mr-30">
            <div className="text-centre">
                <h1 className="font-bold text-lg"> Hi, I am Amkelwe Lubavu</h1>
                <p>I am a software engineering student passionate about building web applications and creating efficient, scalable software solutions</p>
            </div>


            {/* PROJECTS AND SKILLS BUTTONS */}

            {/* increase margin top (mt-4) to create space between buttons and <p></p>*/}
            {/* gap-4 to create space between the two buttons */}

            <div className="mt-4 gap-4 flex content-center">
                <a href="#" className="bg-yellow-400 text-white font-bold px-4 py-2 hover:bg-yellow-600 transition cursor-pointer">Projects</a>
                <a href="#" className="bg-yellow-400 text-white font-bold px-4 py-2 hover:bg-yellow-600 transition cursor-pointer">Skills</a>
            </div>
        </div>
    )
}

export default Home