import React from "react";
import Hat from "../assets/hat.png";

const Hero = () => {
  return (
    <main className=" min-h-screen py-20 flex flex-col lg:flex-row w-full items-center justify-center lg:gap-20 lg:px-20 gap-5 px-5">
      {/* // left div // */}
      <div className="flex justify-center items-center flex-col gap-5">
        <h1 className="lg:text-6xl text-2xl font-bold text-cyan-600">
          Welcome on board
        </h1>
        <p className="text-center text-sm ">
          {" "}
          This is a website where you can order for different categories of
          hats. It can be Fascinator, Pop cap, or Bolar cap
        </p>
        <div className="flex lg:flex-row flex-col gap-10 justify-center items-center">
         <div>
           <button className="bg-amber-900 hover:bg-amber-600 transition-300 text-white py-2 px-4 rounded-lg gap-20">
            Order Now
          </button>
         </div>
         <div>
           <button className="bg-cyan-600 hover:bg-lime-400 transition-300 text-white py-2 px-4 rounded-lg">
            Submit
          </button>
         </div>
        </div>
      </div>

      {/* // right div // */}
      <div className=" w-full">
        <div className="w-full">
          <img src={Hat} alt="Picture" className="w-full" />
        </div>
      </div>
    </main>
  );
};

export default Hero;
