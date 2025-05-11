import React from "react";
import {skills} from "../data/skills";
import {List, ListItem} from "./ui/list";
import {Container} from "./ui/container";
import {Badge} from "./ui/badge";

interface Skill {
    category: string;
    details: string[];
}

const Skills: React.FC = () => {
    return (
        <Container>
            <h1 className="text-4xl font-bold text-white text-center mb-8">Skills</h1>
            <List>
                {skills.map((skill: Skill, index) => (
                    <ListItem
                        key={index}
                        className="flex flex-col bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-green-400">
                            {skill.category}
                        </h3>
                        <List wrap>
                            {skill.details.length >= 1 && skill.details.map((detail, i) =>
                                <Badge title={detail} variant="secondary" key={i}/>
                            )}
                        </List>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
};

export default Skills;
