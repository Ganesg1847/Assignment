import React from "react";
import BannerItem from "./BannerItem";
import Navbar from "./Navbar";
import bgImg from "../Images/bgImage.png";

const Banner = () => {
  return (
    <div>
      <img
        src={bgImg}
        className="relative w-full md:h-[750px] h=[400px] relative"
      />
      <div>
        <Navbar />
        <BannerItem />
      </div>
    </div>
  );
};

export default Banner;
