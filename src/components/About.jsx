import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto px-5 py-16 sm:px-10 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* About title */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-900">About Me</h2>

        {/* Bio text */}
        <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
          <p>
            I'm a software engineering student with hands-on experience building <strong>full-stack web applications</strong> using modern technologies like React, Node.js, Express, and Supabase. I specialize in creating secure, scalable solutions with features like <strong>JWT authentication</strong>, real-time data management, and responsive UI design.
          </p>
          <p>
            My recent projects include a <strong>secure notes application</strong> with row-level security, a <strong>restaurant booking system</strong> with RESTful APIs, and collaborative development work. I focus on writing clean, maintainable code and implementing industry best practices.
          </p>
          <p className="text-yellow-600 font-semibold">
            Currently seeking junior developer opportunities where I can contribute to meaningful projects while continuing to grow my technical skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
