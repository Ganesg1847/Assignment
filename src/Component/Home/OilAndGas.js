import React from "react";
import Gas from "../Images/GasAndOil.png";

const OilAndGas = () => {
  return (
    <div className="md:px-16 px-10">
      <div className=" lg:flex items-center font-medium gap-20 space-y-6">
        <img
          src={Gas}
          className="lg:w-[650px] w-full bg-black/10 opacity-100 "
        />

        <div className="space-y-6">
          <h2 className="xl:text-[43px]  md:text-[33px] sm:text-[28px]  text-[22px] text-[#ff3a2d]">
            Oil & Gas
          </h2>
          <p>
            Oil and Gas plants require a high level of control and robustness in
            their operation due to the high risks to people and environment.
          </p>
          <p>
            NTWIST helps Oil & Gas customers to analyze historical data,
            identify opportunities for process control improvements, and reduce
            variability in any part of the process, thus providing enhanced
            reliability and safety.
          </p>
          <button className="bg-[#ff3a2d] py-2 px-4 text-white rounded-md text-center">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OilAndGas;
