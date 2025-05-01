import React from "react";
import ImgMahmoud from "../assets/mahmoud.jpeg";
import { calculateAge } from "../utils/calculateAge";

const About = () => {
  const age = calculateAge("1995-01-09");

  return (
      <section id="about" className="bg-gray-950 py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">

          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
                src={ImgMahmoud}
                alt="Mahmoud Al Jarad"
                className="w-72 md:w-80 rounded-xl border-4 border-indigo-500 shadow-lg object-cover"
            />
          </div>

          {/* Information Card */}
          <div className="bg-gray-900 w-full p-8 rounded-xl shadow-2xl text-white space-y-6">
            <h2 className="text-4xl font-bold text-indigo-400 tracking-tight">
              Mahmoud Al Jarad
            </h2>

            <div className="space-y-3 text-lg leading-relaxed">
              <p><span className="font-semibold">Age:</span> {age}</p>
              <p><span className="font-semibold">Position:</span> Fullstack Developer at LivEye GmbH <br /><span className="text-sm text-gray-400">(since October 2024)</span></p>
              <p><span className="font-semibold">Degree:</span> B.Sc. in Computer Science</p>
              <p><span className="font-semibold">University:</span> Trier University of Applied Sciences</p>
              <p className="font-semibold">Nationalities:</p>
              <div className="flex gap-3 mt-2">
                <span className="bg-green-700 text-sm px-3 py-1 rounded-full">Syrian</span>
                <span className="bg-blue-600 text-sm px-3 py-1 rounded-full">German</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;
