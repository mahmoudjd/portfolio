import React from "react";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div id="projects" className="w-full bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-2xl font-bold text-green-500 mt-4">
              {project.title}
            </h2>
            <p className="text-gray-300 mt-2">{project.description}</p>
            <p className="text-gray-400 mt-2">
              Technologies: {project.technologies.join(", ")}
            </p>
            <a href={project.link} className="text-green-500 mt-4 inline-block">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
