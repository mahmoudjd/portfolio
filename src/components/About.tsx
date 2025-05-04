import React from "react";
import ImgMahmoud from "../assets/mahmoud.jpeg";
import { calculateAge } from "../utils/calculateAge";
import {
    FaUniversity,
    FaBirthdayCake,
    FaCode,
    FaBriefcase,
    FaGlobeEurope,
    FaLanguage,
} from "react-icons/fa";
import { Badge } from "./badge";
import { Container } from "./container";

const About = () => {
    const age = calculateAge("1995-01-09");

    const infoItems = [
        {
            icon: <FaBirthdayCake className="text-pink-400" aria-hidden />,
            label: "Age",
            content: <span>{age}</span>,
        },
        {
            icon: <FaBriefcase className="text-yellow-400" aria-hidden />,
            label: "Position",
            content: (
                <span>
          Fullstack Developer at LivEye GmbH
          <br />
          <span className="text-sm text-gray-400 dark:text-gray-500">
            (since October 2024)
          </span>
        </span>
            ),
        },
        {
            icon: <FaCode className="text-cyan-400" aria-hidden />,
            label: "Degree",
            content: <span>B.Sc. in Computer Science</span>,
        },
        {
            icon: <FaUniversity className="text-purple-400" aria-hidden />,
            label: "University",
            content: <span>Trier University of Applied Sciences</span>,
        },
        {
            icon: <FaGlobeEurope className="text-blue-400" aria-hidden />,
            label: "Nationalities",
            content: (
                <div className="flex flex-wrap gap-2">
                    <Badge title="Syrian" variant="info" />
                    <Badge title="German" variant="info" />
                </div>
            ),
        },
        {
            icon: <FaLanguage className="text-green-400" aria-hidden />,
            label: "Languages",
            content: (
                <div className="flex flex-wrap gap-2">
                    <Badge title="German" variant="info" />
                    <Badge title="English" variant="info" />
                    <Badge title="Arabic" variant="info" />
                </div>
            ),
        },
    ];

    return (
        <Container className="py-20 px-4 md:px-8">
            <section className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
                <div className="bg-gray-100 dark:bg-gray-900 p-8 rounded-2xl shadow-lg w-full md:w-1/2">
                    <h2 className="text-4xl font-extrabold text-gray-800 dark:text-green-400 mb-6">
                        Mahmoud Al Jarad
                    </h2>
                    <ul className="space-y-5">
                        {infoItems.map(({ icon, label, content }) => (
                            <li key={label} className="flex items-start space-x-4">
                                <div className="mt-1">{icon}</div>
                                <div>
                                    <p className="font-medium text-gray-700 dark:text-gray-200">
                                        {label}:
                                    </p>
                                    <div className="mt-1 text-gray-600 dark:text-gray-400">
                                        {content}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl">
                    <img
                        src={ImgMahmoud}
                        alt="Portrait of Mahmoud Al Jarad"
                        className="object-cover w-full h-full"
                    />
                </div>
            </section>
        </Container>
    );
};

export default About;
