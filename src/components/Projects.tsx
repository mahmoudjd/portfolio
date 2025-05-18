import React from "react";
import { projects } from "../data/projects";
import { Container } from "./ui/container";
import {List, ListItem} from "./ui/list";
import {ProjectCard} from "./ProjectCard";

const Projects = () => {
  return (
    <Container>
      <h1 className="text-4xl font-extrabold text-white text-center mb-16">
        My Projects
      </h1>

      <List grid>
        {projects.map((project, index) => (
            <ListItem key={index}>
                <ProjectCard project={project} />
            </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Projects;