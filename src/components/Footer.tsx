import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bottom-0  border-t-2 border-green-500 bg-gray-800">
      <p className="text-white text-center p-2">
        &copy; Mahmoud Al Jarad {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
