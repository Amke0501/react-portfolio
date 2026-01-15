import React from "react";

function Skills() {
  const skillCategories = {
    "Frontend": ["HTML & CSS", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Design"],
    "Backend": ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
    "Database": ["Supabase", "PostgreSQL"],
    "Tools & Practices": ["Git & GitHub", "VS Code", "Vercel Deployment", "Agile/Scrum"],
  };

  return (
    <section id="skills" className="py-16 px-5 sm:px-10 md:px-20 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-700 text-lg">
          Proficient in modern web development technologies with a focus on full-stack JavaScript.
        </p>
      </div>

      {/* Skills by Category */}
      <div className="max-w-6xl mx-auto space-y-8">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-left">
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="py-3 px-4 bg-white text-gray-800 font-medium border-2 border-yellow-400 rounded-lg 
                           hover:bg-yellow-500 hover:border-yellow-500 hover:text-gray-900 hover:shadow-md transition text-center"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
