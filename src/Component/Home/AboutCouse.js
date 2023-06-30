import React from "react";
import carebg from "../Images/carebg.png";
import "./Home.css";

const AboutCouse = () => {
  const cardData = [
    {
      id: 1,
      title: "Interactive Features",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      id: 2,
      title: "Interactive Features",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
  ];
  return (
    <div>
      <div className="absolute right-0 -mt-52">
        <img src={carebg} className="w-[50  0px]" />
      </div>
      <div className="md:px-48 px-10 relative -mt-20">
        <div className=" flex  font-medium gap-28 space-y-6">
          <div className="flex gap-[16px] space-y-6  ">
            <div className="grid gap-[25px]">
              {cardData.map((item) => (
                <div className="border-[1px] border-[#7A3199]  grid  justify-center px-[20px] py-7 rounded-[10px]">
                  <h2 className="text-[20px] font-bold">{item.title}</h2>
                  <p className="text-[12px]">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-[16px] ">
              {cardData.map((item) => (
                <div className="border-[1px] border-[#7A3199] gap-[16px] grid justify-center p-[30px] rounded-[10px]">
                  <h2 className="text-[20px]">{item.title}</h2>
                  <p className="text-[12px]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-16">
            <div className="space-y-6">
              <h1 className="text-[48px] font-bold">About the Course</h1>
              <p className="text-[14px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unkno
              </p>
            </div>
            <button
              style={{
                background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
              }}
              className=" py-2 text-[20px]  px-4 w-[237px] h-[60px] text-white rounded-[10px] font-semibold text-center"
            >
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCouse;
