import React from "react";
import mine from "../Images/mine.jpg";

const MineToMill = () => {
  return (
    <div className="md:px-16 px-10 ">
      <div className=" lg:flex items-center font-medium gap-10 space-y-6">
        <div className="space-y-6">
          <h2 className="xl:text-[43px]  md:text-[33px] sm:text-[28px] text-[22px] text-[#ff3a2d]">
            Mine-To-Mill-To-Mine
            <br /> Optimization
          </h2>
          <p>
            NTWIST’s newest product unlocks up to $250/oz in previously
            inaccessible value in open pit gold mines by connecting siloed data
            sources like block models, fleet management systems, stockpile
            surveys, and plant instruments. This allows your company to better
            track material flow, and feed properties, identify plan/production
            discrepancies, and correct resource models and production plans.
          </p>
          <button className="bg-[#ff3a2d] py-2 px-4 text-white rounded-md text-center">
            Read More
          </button>
        </div>

        <img
          src={mine}
          className="lg:w-[650px] w-full bg-black/10 opacity-100 "
        />
      </div>
    </div>
  );
};

export default MineToMill;
