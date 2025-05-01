import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ to, text }: {to: string, text:string}) => {
    return (
        <Link
            to={to}
            className="block text-white hover:text-green-400 transition-colors duration-200"
        >
            {text}
        </Link>
    );
};

export default NavbarLink;
