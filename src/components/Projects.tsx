import React from "react";
import {projects} from "../data/projects";
import {List} from "./ui/list";
import {Card} from "./ui/card";
import {Container} from "./ui/container";
import {Link} from "react-router-dom"
import {FaGithub} from "react-icons/fa";

const Projects = () => {
    return (
        <Container>
            <h1 className="text-4xl font-extrabold text-white text-center mb-16">
                My Projects
            </h1>

            <List grid>
                {projects.map((project, index) => (
                    <Card key={index}>
                        <Link to={`/projects/${project.id}`} className="block h-full w-full">
                            <div className="flex flex-col justify-between p-4">
                                <h2 className="text-2xl font-bold text-green-400 mb-2">
                                    {project.title}
                                </h2>
                                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    </Card>
                ))}
            </List>
        </Container>
    );
};

export default Projects;
