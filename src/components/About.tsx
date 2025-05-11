import React from "react";
import ImgMahmoud from "../assets/mahmoud.jpeg";
import { calculateAge } from "../utils/calculateAge";
import {
    FaBirthdayCake,
    FaCode,
    FaBriefcase,
    FaGlobeEurope,
    FaLanguage,
    FaClock,
} from "react-icons/fa";
import { Badge } from "./ui/badge";
import { Container } from "./ui/container";
import { Card } from "./ui/card";

const About = () => {
    const age = calculateAge("1995-01-09");

    return (
        <Container className="py-16 px-4 md:px-12 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-start">
                {/* Profile Image */}
                <div className="md:col-span-1 flex justify-center">
                    <div className="w-64 h-80 rounded-3xl overflow-hidden shadow-xl">
                        <img
                            src={ImgMahmoud}
                            alt="Mahmoud Al Jarad"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Profile Info */}
                <div className="md:col-span-2 space-y-8">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-green-400">
                        Mahmoud Al Jarad
                    </h2>

                    {/* Position */}
                    <Card>
                        <div className="flex items-center gap-3 mb-2">
                            <FaBriefcase className="text-yellow-500" />
                            <h3 className="text-xl font-semibold">Position</h3>
                        </div>
                        <p className="font-medium">
                            Junior Full Stack Developer at LivEye GmbH
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Since October 2024
                        </p>
                        <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            I immediately started contributing to real projects and
                            independently developed the customer app during my probation
                            period. I quickly adapted to the tech stack and took ownership of
                            critical components.
                        </p>
                    </Card>

                    {/* Tech Stack */}
                    <Card>
                        <div className="flex items-center gap-3 mb-2">
                            <FaCode className="text-cyan-500" />
                            <h3 className="text-xl font-semibold">Tech Stack</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <p className="font-medium text-gray-700 dark:text-gray-200">
                                    Frontend:
                                </p>
                                <ul className="list-disc ml-4 mt-1 text-gray-600 dark:text-gray-300">
                                    <li>Next.js</li>
                                    <li>React</li>
                                    <li>NextAuth</li>
                                    <li>Radix UI</li>
                                    <li>Tailwind CSS</li>
                                    <li>TanStack Query</li>
                                </ul>
                            </div>
                            <div>
                                <p className="font-medium text-gray-700 dark:text-gray-200">
                                    Backend:
                                </p>
                                <ul className="list-disc ml-4 mt-1 text-gray-600 dark:text-gray-300">
                                    <li>Flask (Python)</li>
                                    <li>Node.js & TypeScript</li>
                                    <li>MongoDB</li>
                                    <li>RESTful APIs</li>
                                </ul>
                            </div>
                        </div>
                    </Card>

                    {/* Education */}
                    <Card>
                        <div className="flex items-center gap-3 mb-2">
                            <FaCode className="text-purple-500" />
                            <h3 className="text-xl font-semibold">Education</h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                            B.Sc. in Computer Science – Trier University of Applied Sciences
                            (July 2024)
                        </p>
                        <p className="text-sm text-gray-400 dark:text-gray-500">
                            Final grade: 2.2 – Thesis: 1.3
                        </p>
                    </Card>

                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <div className="flex items-center gap-3 mb-2">
                                <FaBirthdayCake className="text-pink-400" />
                                <h3 className="text-xl font-semibold">Age</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                {age} years
                            </p>
                        </Card>

                        <Card>
                            <div className="flex items-center gap-3 mb-2">
                                <FaClock className="text-red-400" />
                                <h3 className="text-xl font-semibold">Notice Period</h3>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                3 months
                            </p>
                        </Card>

                        <Card>
                            <div className="flex items-center gap-3 mb-2">
                                <FaGlobeEurope className="text-blue-400" />
                                <h3 className="text-xl font-semibold">Nationalities</h3>
                            </div>
                            <div className="flex gap-2 flex-wrap mt-1">
                                <Badge title="Syrian" variant="info" />
                                <Badge title="German" variant="info" />
                            </div>
                        </Card>

                        <Card>
                            <div className="flex items-center gap-3 mb-2">
                                <FaLanguage className="text-green-400" />
                                <h3 className="text-xl font-semibold">Languages</h3>
                            </div>
                            <div className="flex gap-2 flex-wrap mt-1">
                                <Badge title="German (DSH-2)" variant="info" />
                                <Badge title="English (B1)" variant="info" />
                                <Badge title="Arabic (native)" variant="info" />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;
