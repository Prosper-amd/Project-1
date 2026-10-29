
import React from "react";
import Abosede from "../assets/Abosede.png";

const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 lg:gap-32 bg-lime-100 px-4 py-12 md:px-8">

        {/* LEFT DIV - IMAGE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Abosede}
            alt="Abosede"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full hover:shadow-2xl transition duration-300"
          />
        </div>

        {/* RIGHT DIV - TEXT */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            ABOUT ME
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
            I am a beginner Software Engineering student.
            <br />
            I am currently learning Full Stack Development.
          </p>
        </div>
      </section>

      {/* RESPONSIVE SECTION */}
      <section className="px-4 py-12 sm:px-8 md:px-16 lg:px-32">
        <div className="w-full max-w-5xl mx-auto bg-amber-100 text-center py-10 px-5 sm:px-10 md:py-16 md:px-12 border border-blue-800 rounded-2xl">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            RESPONSIVE
          </h2>

          <p className="text-base sm:text-lg font-bold text-black mb-6">
            LEARN WEB DEVELOPMENT
          </p>

          <div className="flex justify-center">
            <button className="bg-red-500 hover:bg-amber-300 transition duration-300 text-black font-semibold py-3 px-8 rounded-full">
              ENROL
            </button>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
