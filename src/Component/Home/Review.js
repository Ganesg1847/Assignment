import React from "react";
import star from "../Images/star.png";
import Lolla from "../Images/Lolla.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Review = () => {
  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    },
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },

      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="px-48 mt-56">
      <div className="space-y-4">
        <h2 className="text-[44px] font-bold">Review from customers</h2>
        <p className="w-[400px] text-[14px] font-medium ">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry
        </p>
      </div>
      <div className="mt-5">
        <Carousel responsive={responsive} showDots={true}>
          {data.map((item) => (
            <div className="shadow-lg bg-white rounded-sm space-y-[24px] w-[400px] px-[36px] py-[48px] ">
              <div className="flex space-x-[16px]">
                <img src={Lolla} className="w-[70px] h-[70px]" />
                <div className="space-y-[3px]">
                  <p>Lolla Smith</p>
                  <p>Microsoft</p>
                  <img src={star} />
                </div>
              </div>
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Review;
