import React from "react";
import banneritem from "../Images/banneritem.png";
const BannerItem = () => {
  return (
    <div className="md:px-16 px-10 ">
      <div
        className="flex items-center 2xl:space-x-44 md:space-x-16 space-x-12  justify-center  xl:top-28   sm:top-28 top-16
       absolute
      "
      >
        <div className="space-y-5">
          <h1 className="xl:text-[44px] lg:text-[32px] md:text-[33px] sm:text-4xl text-xl font-bold text-white">
            Data-Powered Solutions <br /> for Industrial Excellence
          </h1>
          <button
            type="button"
            className="bg-[#0693e3] p-2 text-white rounded-sm text-center"
          >
            Read More
          </button>
        </div>

        <img
          src={banneritem}
          className="xl:w-[700px] md:w-[580px]  sm:w-[400px] md:block hidden"
        />
      </div>
    </div>
  );
};

export default BannerItem;
