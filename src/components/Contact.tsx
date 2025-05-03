import React from "react";
import {
    FaLinkedin,
    FaFacebook,
    FaInstagram,
    FaGithub,
    FaXing,
    FaEnvelope,
} from "react-icons/fa";
import {Container} from "./container";

const contactDetails = [
    {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/in/mahmoud-al-jarad-9b3b982a9/",
        icon: <FaLinkedin className="text-blue-600"/>,
    },
    {
        platform: "Facebook",
        url: "https://www.facebook.com/profile.php?id=100009929853073",
        icon: <FaFacebook className="text-blue-800"/>,
    },
    {
        platform: "Instagram",
        url: "https://www.instagram.com/mahmoudaljarad",
        icon: <FaInstagram className="text-pink-600"/>,
    },
    {
        platform: "GitHub",
        url: "https://github.com/mahmoudjd",
        icon: <FaGithub className="text-gray-600"/>,
    },
    {
        platform: "Xing",
        url: "https://www.xing.com/profile/Mahmoud_AlJarad068136",
        icon: <FaXing className="text-green-600"/>,
    },
    {
        platform: "Email",
        url: "mailto:mahmoudjd452@gmail.com",
        icon: <FaEnvelope className="text-red-600"/>,
    },
];

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
