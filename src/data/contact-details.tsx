import {FaEnvelope, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaXing} from "react-icons/fa";
import React from "react";

export const contactDetails = [
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