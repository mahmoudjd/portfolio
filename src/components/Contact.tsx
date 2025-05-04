import React from "react";
import {Container} from "./container";
import { contactDetails } from "../data/contact-details";


const Contact: React.FC = () => {
    return (
        <Container>
            <h1 className="text-4xl font-bold text-white text-center mb-8">
                Contact
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
                {contactDetails.map((contact) => (
                    <a
                        key={contact.platform}
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 p-5 bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition duration-300"
                    >
                        <div className="w-6 h-6 flex items-center justify-center">
                            {contact.icon}
                        </div>
                        <span className="text-gray-300">{contact.platform}</span>
                    </a>
                ))}
            </div>
        </Container>
    );
};

export default Contact;
