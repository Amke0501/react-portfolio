import React from "react";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import cvFile from "../assets/Amkelwe-Lubavu-CV.pdf"; 

const Contact = () => {
  return (
    <section id="contact" className="py-16 px-5 sm:px-10 md:px-20 bg-white">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Contact Me
        </h2>
        <p className="text-gray-700 text-lg">
          Have a question or want to work together? Let’s connect!
        </p>
      </div>

      {/* Contact Form */}
      <form
        action="#"
        method="POST"
        className="max-w-2xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          required
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 text-gray-800 font-semibold py-3 rounded-lg hover:bg-yellow-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-10">
        <a
          href="mailto:yourname@email.com"
          className="text-gray-700 hover:text-yellow-600 transition"
        >
          <Mail size={28} />
        </a>
        <a
          href="https://github.com/Amke0501"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-yellow-600 transition"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/amkelwe-lubavu"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-yellow-600 transition"
        >
          <Linkedin size={28} />
        </a>
      </div>

      {/* Download CV Button */}
      <div className="flex justify-center mt-8">
        <a
          href={cvFile}
          download
          className="flex items-center gap-2 bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          <Download size={20} />
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Contact;
