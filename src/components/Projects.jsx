import React from "react";
import thestrand from "../assets/thestrand.png";
import clock from "../assets/clock.png";
import mcdonalds from "../assets/mcdonalds.png";

const projects = [
  {
    title: "The Strand Diner",
    image: thestrand,
    description:
      "A fully responsive restaurant website built with HTML and CSS.",
    github: "https://github.com/Amke0501/the-strand-diner",
  },
  {
    title: "McDonald Clone",
    image: mcdonalds,
    description:
      "A pixel-perfect clone of the McDonald's website built with HTML, CSS, and JS.",
    github: "https://github.com/Amke0501/McDonald-Clone",
  },
  {
    title: "The Clock",
    image: clock,
    description:
      "A real-time digital clock built with HTML, CSS, and JavaScript.",
    github: "https://github.com/Amke0501/Clock",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-gray-50 py-16 px-6 sm:px-10 md:px-20 text-center"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Projects
        </h2>
        <p className="text-gray-700 mt-3 text-lg">
          A few of my projects showcasing my growing skills in web development.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-5 py-2 border-2 border-yellow-500 text-gray-800 font-medium rounded-md hover:bg-yellow-500 hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
