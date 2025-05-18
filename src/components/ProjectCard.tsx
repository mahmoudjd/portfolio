import {Link, useNavigate} from "react-router-dom";
import {Card} from "./ui/card";
import React from "react";

interface Project {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    link: string;
    images?: string[];
}

export function ProjectCard({project} : {project: Project}) {
    const navigation = useNavigate()
    return (
        <Card className="flex flex-col justify-between py-4">

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
            <button className="text-green-400 hover:text-green-300 cursor-pointer"
                    onClick={() => navigation(`/projects/${project.id}`)}>
                Open Project
            </button>
        </Card>
    )
}