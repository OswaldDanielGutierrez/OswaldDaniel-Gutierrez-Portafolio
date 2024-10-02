import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Links = () => {
  return (
    <div className="flex flex-col items-center space-y-4 mb-6 ">
      <h1 className="font-bold mt-10">Links</h1>
      <a
        href="https://github.com/OswaldDanielGutierrez"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white hover:bg-gray-400 transition-colors duration-300"
      >
        <FaGithub className="text-lg" />
      </a>
      <a
        href="https://www.linkedin.com/in/oswald-daniel-gutierrez-cortina-152366297/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-10 h-10 bg-primary rounded-full text-white hover:bg-gray-400 transition-colors duration-300"
      >
        <FaLinkedin className="text-lg" />
      </a>
    </div>
  );
};

export default Links;
