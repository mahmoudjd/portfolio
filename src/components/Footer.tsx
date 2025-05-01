import React from "react";

const Footer = () => {
    return (
        <footer className="w-full border-t border-green-500 bg-gray-800 text-center py-4">
            <p className="text-gray-300">&copy; Mahmoud Al Jarad {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
