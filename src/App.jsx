import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="text-gray-800 scroll-smooth">
      {/* navbar */}
      <Navbar />

      <main className="pt-16">
        {/* Home Section */}
        <section id="home">
          <Home />
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-5 sm:px-10 md:px-20">
          <About />
        </section>

      {/* skills */}
      <section id="skills" className="py-16 px-5 sm:px-10 md:px-20 bg-gray-50">
          <Skills />
        </section> 

        {/* Projects Section */} 
        <section id="projects" className="py-16 px-5 sm:px-10 md:px-20">
          <Projects />
        </section>

        {/* Contacts Section */}
        <section id="contact" className="py-16 px-5 sm:px-10 md:px-20 bg-gray-50">
          <Contacts/>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
