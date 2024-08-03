import React from "react";
import img1 from "../../assets/mahmoud.jpeg";
import Navbar from "./Navbar";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="flex items-center justify-between py-4 px-4 bg-gray-800 shadow-lg  w-full">
      <Avatar image={img1} name="Mahmoud Al Jarad" />
      <Navbar />
    </div>
  );
};
export default Header;
