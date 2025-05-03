import React from "react";
import {projects} from "../data/projects";
import {FaGithub} from "react-icons/fa";
import {List} from "./list";
import {Card} from "./card";
import {Badge} from "./badge";
import {Container} from "./container";

const Projects = () => {
    return (
        <Container>
            <h1 className="text-4xl font-extrabold text-white text-center mb-16">
                My Projects
            </h1>

            <List grid>
                {projects.map((project, index) => (
                    <Card key={index}>
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            className="w-full h-64 object-contain rounded-lg"
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
                                        <Badge key={i} variant="secondary" title={tech}/>
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
                    </Card>
                ))}
            </List>
        </Container>
    );
};

export default Projects;
