import React from "react";
import ImgMahmoud from "../assets/mahmoud.jpeg";

const calculateAge = (birthDateString: string): number => {
  const birthDate = new Date(birthDateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust age if the birthday hasn't occurred yet this year
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-transparent p-8 flex flex-col items-center justify-center space-y-8 relative"
    >
      <h1 className="text-4xl font-bold text-white self-start md:self-center md:text-5xl">
        About
      </h1>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-x-16 md:space-y-0 mt-8">
        <img
          src={ImgMahmoud}
          alt="Mahmoud Al Jarad"
          className="w-96 rounded-lg shadow-2xl"
        />
        <div className="text-white max-w-2xl space-y-4 text-center md:text-left bg-gray-800 bg-opacity-75 p-8 rounded-lg shadow-lg">
          <p className="text-3xl font-semibold">Mahmoud Al Jarad</p>
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
            <b>Nationalities:</b> German, Syrian
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
