import React from "react";
import BannerItem from "./BannerItem";

import bgImg from "../Images/bannerbg.png";

const Banner = () => {
  return (
    <div>
      <img src={bgImg} className=" w-full  md:h-[750px] h=[400px] relative" />
      <div className="">
        <BannerItem />
      </div>
    </div>
  );
};

export default Banner;
