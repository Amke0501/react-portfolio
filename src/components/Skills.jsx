import React from "react";

function Skills() {
  const skills = [
    "HTML & CSS",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Python",
    "Git & GitHub",
    "Problem Solving",
  ];

  return (
    <section id="skills" className="py-16 px-5 sm:px-10 md:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Skills
        </h2>
        <p className="text-gray-700 text-lg">
          Here are some of the technologies and tools I work with.
        </p>
      </div>

      {/* Skills grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="py-3 px-4 text-gray-800 font-semibold border-2 border-yellow-500 rounded-lg 
                       hover:bg-yellow-500 hover:text-gray-900 transition text-center shadow-sm"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
