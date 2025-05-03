import React from "react";
import {Link} from "react-router-dom";

interface NavbarLinkProps {
    to: string
    text: string
    handleClick?: () => void
}

const NavbarLink = ({to, text, handleClick}: NavbarLinkProps) => {
    return (
        <Link
            to={to}
            className="block text-white hover:text-green-400 transition-colors duration-200"
            onClick={handleClick}
        >
            {text}
        </Link>
    );
};

export default NavbarLink;
