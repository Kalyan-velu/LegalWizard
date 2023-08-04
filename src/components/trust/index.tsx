import React from "react";
import "./styles/style.css";
import Testimonials from "./Testimonials";
import { firmData } from "./data/Testimonials";

const Trustee = () => {
  return (
    <section className="trustee">
      <div className="flex flex-col justify-center space-y-11">
        <div className="m-auto flex w-[90%] flex-col gap-3 md:w-[40%]">
          <h1 className="text-center text-3xl text-white sm:text-5xl">
            Relied on by 10,000+ law firms
          </h1>
          <p className="text-md text-center text-gray-light">
            Since 2013, Casetext has been making the difference for solo and
            small practices, Am Law 100 firms, and in-house legal departments.
          </p>
        </div>
        <div className="m-auto flex justify-center gap-4 md:m-auto md:w-[60%] md:flex-row md:justify-between md:gap-5">
          {firmData.map((firm) => (
            <React.Fragment key={firm.name}>
              <img
                src={firm.logo}
                alt={firm.alt}
                className="w-[4rem] text-white sm:w-[8rem]"
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Trustee;
