import React from "react";
import thestrand from "../assets/thestrand.png";
import clock from "../assets/clock.png";
import mcdonalds from "../assets/mcdonalds.png";
import reservation from "../assets/reservation.png";
import geoquiz from "../assets/Geoquiz.png";

const projects = [
  {
    title: "Booking Reservation System",
    image: reservation,
    description:
      "Full-stack restaurant booking platform with in-memory data management and RESTful API. Built with Express backend and React/Tailwind frontend deployed on Vercel.",
    technologies: ["React", "Node.js", "Express", "Tailwind CSS"],
    github: "https://github.com/Amke0501/Booking-Reservation-The-Strand-Diner",
  },
  {
    title: "GeoQuiz",
    image: geoquiz,
    description:
      "Collaborative team project: Interactive geography quiz application with multiple question categories. Implemented dynamic scoring and responsive UI.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Khaya-ux/GeoQuiz",
  },
  {
    title: "McDonald's Clone",
    image: mcdonalds,
    description:
      "Pixel-perfect recreation of McDonald's website demonstrating attention to detail and CSS mastery. Fully responsive with smooth animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Amke0501/McDonald-Clone",
  },
  {
    title: "The Strand Diner",
    image: thestrand,
    description:
      "Responsive restaurant website with modern design principles. Mobile-first approach with clean HTML structure and custom CSS styling.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Amke0501/the-strand-diner",
  },
  {
    title: "Digital Clock",
    image: clock,
    description:
      "Real-time digital clock application demonstrating JavaScript date/time manipulation and DOM updates. Clean, minimal interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
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
          Featured Projects
        </h2>
        <p className="text-gray-700 mt-3 text-lg">
          A selection of projects demonstrating my full-stack development skills and problem-solving abilities.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col h-full"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-2.5 border-2 border-yellow-500 text-gray-800 font-semibold rounded-lg hover:bg-yellow-500 hover:text-white transition-colors"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
