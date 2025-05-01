import React from "react";
import {projects} from "../data/projects";
import {FaGithub} from "react-icons/fa";

const Projects = () => {
    return (
        <div
            id="projects"
            className="w-full bg-gradient-to-b from-gray-900 to-black py-16 px-8"
        >
            <h1 className="text-4xl font-extrabold text-white text-center mb-16">
                My Projects
            </h1>

            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/40 transition-transform duration-300 hover:-translate-y-1"
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-60 object-contain"
                        />

                        <div className="flex flex-col justify-between p-4">
                            <div>
                                <h2 className="text-2xl font-bold text-green-400 mb-2">
                                    {project.title}
                                </h2>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-gray-700 text-green-300 px-3 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 font-medium"
                                >
                                    <FaGithub className="text-lg"/>
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
