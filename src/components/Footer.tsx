import React from "react";
import { Container } from "./container";
import { contactDetails } from "../data/contact-details";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-gray-400 pt-4 border-t-2 border-green-700">
            <Container className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                <p className="text-sm">
                    &copy; Mahmoud Al Jarad {year}. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    {contactDetails.map(({ icon, url }, idx) => (
                        <a
                            key={idx}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-transform duration-300 hover:-translate-y-1"
                        >
                            {icon}
                        </a>
                    ))}
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
