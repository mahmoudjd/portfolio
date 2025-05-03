import React from "react";
import {skills} from "../data/skills";
import {List} from "./list";
import {Container} from "./container";

interface Skill {
    category: string;
    details: string[];
}

const Skills: React.FC = () => {
    return (
        <Container>
            <h1 className="text-4xl font-bold text-white text-center mb-8">Skills</h1>
            <List grid>
                {skills.map((skill: Skill, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold text-green-400">
                            {skill.category}
                        </h3>
                        <p className="text-gray-300 mt-2">{skill.details.join(", ")}</p>
                    </div>
                ))}
            </List>
        </Container>
    );
};

export default Skills;
