"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="bg-white text-black py-10 px-20">
      <div className="container mx-auto flex justify-between items-center">
        {/* Enlace de correo */}
        <a
          href="mailto:danielgutierrezcor@gmail.com"
          className="text-md mb-4 hover:underline transition-colors duration-300"
        >
          danielgutierrezcor@gmail.com
        </a>

        <div className="flex space-x-6 mb-6">
          <a
            href="https://github.com/OswaldDanielGutierrez"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-transform duration-300 transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/oswald-daniel-gutierrez-cortina-152366297/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400 transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <p className="mt-4 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Daniel Gutierrez. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
