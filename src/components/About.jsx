import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-5 py-16 sm:px-10 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* About title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">About Me</h2>

        {/* Bio text */}
        <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
          I am a passionate software engineering student
          with a strong interest in building innovative and efficient applications. 
          I enjoy learning new technologies, solving challenging problems, and applying logical thinking 
          to create practical solutions. 
          My career goal is to grow as a software developer, 
          contribute to impactful projects, and continuously improve my skills in programming, 
          data handling, and software design.
        </p>
      </div>
    </section>
  );
};

export default About;
