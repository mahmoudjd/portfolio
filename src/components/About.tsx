import React from "react";
import ImgMahmoud from "../assets/mahmoud.jpeg";
import { calculateAge } from "../utils/calculateAge";
import { IoIosArrowForward } from "react-icons/io";

const About = () => {
  return (
    <div id="about" className="w-full bg-gray-900 p-8">
      <h1 className="text-4xl font-bold text-white text-center mb-8">About</h1>
      <div className="flex flex-col md:flex-row items-center md:justify-center md:items-start space-y-8 md:space-x-16 md:space-y-0 mt-8">
        <img
          src={ImgMahmoud}
          alt="Mahmoud Al Jarad"
          className="w-96 rounded-lg shadow-2xl"
        />
        <div className="text-white max-w-2xl space-y-4 text-left bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg">
          <p className="text-3xl text-center font-semibold uppercase">
            Mahmoud Al Jarad
          </p>
          <p className="text-xl">
            <b>Age:</b> {calculateAge("1995-01-09")}
          </p>
          <p className="text-xl">
            <b>Education:</b> Master of Science in Computer Science
          </p>
          <p className="text-xl">
            <b>Bachelor's Degree:</b> Bachelor of Science, successfully
            completed
          </p>
          <p className="text-xl">
            <b>University:</b> Trier University of Applied Science
          </p>
          <p className="text-xl">
            <b>Nationalities:</b>
            <ul className="list-none">
              <li className="flex items-center space-x-2">
                <IoIosArrowForward className="text-green-500 text-xl" />
                Syrian
              </li>
              <li className="flex items-center space-x-2">
                <IoIosArrowForward className="text-green-500 text-xl" />
                German
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
