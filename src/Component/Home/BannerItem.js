import React from "react";
import banner from "../Images/banner.png";
const BannerItem = () => {
  const NavbarData = [
    {
      id: 1,
      name: "About",
    },
    {
      id: 2,
      name: "Picing",
    },
    {
      id: 3,
      name: "Review",
    },
  ];
  return (
    <div className=" ">
      <div className="absolute top-3 w-[100%] px-48 py-[19px]">
        <div className="flex justify-between text-[18px] text-white font-bold">
          <div>
            <p className="">Logo</p>
          </div>
          <div className="text-white">
            <ul className="flex gap-10   font-semibold ">
              {NavbarData?.map((list, id) => (
                <li key={id} className=" ">
                  {list.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div
        className="flex items-center   px-48 gap-5  top-10
       absolute
      "
      >
        <div className="space-y-10 w-[600px] text-white">
          <h1 className="xl:text-[48px] lg:text-[32px] md:text-[33px] sm:text-4xl  text-xl font-bold text-white">
            Learn how to launch a successful podcast
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting in
            ustry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s
          </p>
          <button
            type="button"
            style={{
              background: "linear-gradient(90deg, #4776E6 0%, #8E54E9 100%)",
            }}
            className=" px-16 py-5 rounded-[10px] font-bold text-[20px]  text-white text-center"
          >
            Sign up Now
          </button>
        </div>
        <div className=" mt-16 w-[650px]">
          <img src={banner} className="" />
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
