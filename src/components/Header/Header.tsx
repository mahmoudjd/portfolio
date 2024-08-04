import React from "react";
import img1 from "../../assets/mahmoud.jpeg";
import Navbar from "./Navbar";
import Avatar from "./Avatar";

const Header = () => {
  return (
    <div className="w-full bg-gray-800 flex items-center justify-between border-b-4 border-green-500 sticky top-0 right-0 left-0 py-4 px-4 shadow-lg">
      <Avatar image={img1} name="Mahmoud Al Jarad" />
      <Navbar />
    </div>
  );
};
export default Header;
