import React from "react";
import { skills } from "../data/skills";

interface Skill {
  category: string;
  details: string[];
}

const Skills: React.FC = () => {
  return (
    <div id="skills" className="w-full bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
};

export default Skills;
