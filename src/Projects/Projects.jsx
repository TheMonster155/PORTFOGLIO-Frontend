// src/components/Projects.js
import React from "react";

const Projects = () => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 transform scale-110 transition duration-300 ease-in-out hover:scale-[1.15]">
      <img
        className="w-full h-52 object-cover"
        src="https://res.cloudinary.com/dzdxelv4m/image/upload/v1738189643/Capture_hgpwqz.png"
        alt="Project Image"
      />
      <div className="p-4 flex flex-col items-center">
        <p className="text-xl font-semibold text-white">AnimesAndMangas</p>
        <p className="text-base text-gray-400 mt-2 text-center text-white">
          It's not just a website: it's my passion transformed into code.
        </p>
        <a
          href="https://animes-and-mangas-xi.vercel.app"
          className="mt-4 px-4 py-2 -600 text-white rounded-lg text-lg font-medium transition duration-300"
        >
          Animes and Mangas
        </a>
      </div>
    </div>
  );
};

export default Projects;
