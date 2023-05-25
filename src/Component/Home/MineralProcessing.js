import React from "react";
import MineralProcessingImage from "../Images/MineralProcessing.jpg";
import "./Home.css";

const MineralProcessing = () => {
  return (
    <div className="md:px-16 px-10">
      <div className=" lg:flex items-center font-medium gap-10 space-y-6">
        <div className="space-y-6">
          <h2 className="xl:text-[43px]  md:text-[33px] sm:text-[28px]  text-[22px] text-[#ff3a2d]">
            Mineral Processing
          </h2>
          <p>
            NTWIST offers a number of solutions for mills, concentrators, and
            leach plants. Our solutions help operations to reduce the effect of
            feed variability, avoid downtime and increase peak throughput while
            decreasing energy and reagent consumption.
          </p>
          <button className="bg-[#ff3a2d] py-2 px-4 text-white rounded-md text-center">
            Read More
          </button>
        </div>

        <img
          src={MineralProcessingImage}
          className="lg:w-[650px] w-full bg-black/10 opacity-100 "
        />
      </div>
    </div>
  );
};

export default MineralProcessing;
