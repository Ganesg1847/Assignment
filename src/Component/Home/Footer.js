import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { ImYoutube } from "react-icons/im";

import bgimg from "../Images/footbg.png";
const Footer = () => {
  const NavData = [
    "Home",
    "About Us",
    "Contact Us",
    "Privacy Policy ",
    "Sitemap",
  ];
  return (
    <div
      className="  px-48 mt-20 "
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100%",
        height: "540px",
      }}
    >
      <div className="grid justify-center items-center space-y-16 ">
        <div className="text-center   mt-10">
          <div className="ml-28">
            <div className="space-y-6">
              <h3 className="text-[32px] space-y-6 font-bold">
                We have what you’re looking for
              </h3>
              <p className="w-[700px] text-[14px] text-[#4776E6]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type a
              </p>
            </div>
            <button
              style={{
                background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
              }}
              className=" mt-16 text-[20px] font-bold rounded-[10px] text-white px-10 py-4"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around text-white  border-t-2 mt-28 p-5">
        <p>All Right Reserved @Copyright 2023</p>
        <div className="flex gap-[24px]">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Product</p>
        </div>
        <div className="flex  gap-[24px]">
          <BsFacebook className="h-[24px] w-[24px] font-bold   text-white " />
          <ImYoutube className="h-[24px] w-[24px] font-bold  text-white " />
          <BsInstagram className="h-[24px] w-[24px] font-bold   text-white " />
          <BsTwitter className="h-[24px] w-[24px] font-bold   text-white " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
