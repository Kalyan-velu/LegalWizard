import React from "react";
import { Visions } from "./data";

const Visionaries = () => {
  return (
    <section
      id="about"
      className="m-auto h-[fit-content] w-[90%] py-12 md:my-12"
    >
      <div className="flex flex-col justify-center space-y-11">
        <div className="flex items-center justify-between md:py-12 ">
          <h1 className="text-left text-3xl font-bold sm:text-3xl md:text-5xl">
            The pioneers in AI for the law
          </h1>
          <button
            type="button"
            className="text-black rounded-full bg-orange-500 py-3 text-white hover:bg-orange-500/[50] sm:px-4"
          >
            Know More
          </button>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:justify-center md:space-x-10">
          {Visions.map((vision) => (
            <React.Fragment key={vision.header}>
              <div className="flex w-[100%] flex-col space-y-5 rounded-2xl bg-blue-100 px-6 py-12">
                <div className="h-[fit-content] w-[fit-content] rounded-full bg-[#ffff] p-2 md:p-4 [&>img]:h-[4rem] [&>img]:w-[4rem] md:[&>img]:h-[4rem] md:[&>img]:w-[4rem]">
                  <img src={vision.icon} alt="icon" />
                </div>
                <h2 className="text-left text-2xl font-bold md:text-3xl">
                  {vision.header}
                </h2>
                <p className="text-md text-left text-gray md:text-lg">
                  {vision.paragraph}
                </p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Visionaries;
