import React from "react";
import Sustainable from "../Images/Sustainability.jpg";

const Sustainability = () => {
  return (
    <div className="md:px-16 px-10">
      <div className=" lg:flex items-center font-medium gap-20 space-y-6">
        <img
          src={Sustainable}
          className="lg:w-[650px] w-full bg-black/10 opacity-100 "
        />

        <div className="space-y-4">
          <h2 className="xl:text-[43px]  md:text-[33px] sm:text-[28px]  text-[22px] text-[#ff3a2d]">
            Sustainability
          </h2>
          <p>
            Environmental stewardship is a priority for NTWIST. We help our
            customers to minimize their sustainability impact on the planet.
            Emissions or environmental targets are used alongside productivity
            targets to define success for our customers.
          </p>
          <p>
            With the increasing relevance of carbon accounting and emissions
            tracking, NTWIST offers a suite of tools to increase visibility into
            environmental performance and help processing plants track, manage,
            optimize, and report key metrics.
          </p>
          <button className="bg-[#ff3a2d] py-2 px-4 text-white rounded-md text-center">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
