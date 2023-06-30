import React from "react";
import pod from "../Images/podbg.png";

const ChoosPlan = () => {
  const cardData = [
    {
      id: 1,
      title: "Basic Plan",
    },
    {
      id: 1,
      title: "Premium Plan",
      bgcolor: "#7A3199",
      colr: "#FFFFFF",
    },
    {
      id: 1,
      title: "Basic Plan",
    },
  ];
  return (
    <div>
      <div>
        <img src={pod} className="w-full absolute mt-10 " />
      </div>
      <div
        className="px-48 space-y-16  relative top-28"
        // style={{
        //   backgroundImage: `url(${pod})`,
        //   width: "100%",
        //   backgroundPositionX: "center",
        //   backgroundPosition: "none",
        //   backgroundSize: "cover",
        // }}
      >
        <div className="grid justify-center p-1 items-center gap-[24px]">
          <div className="w-[500px] text-center space-y-[16px]  ">
            <h2 className="text-[32px] font-bold">Choose your plan</h2>

            <p className="text-[16px] font-medium ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </p>
            <div className="flex gap-2 w-[170px] bg-white rounded-[10px] shadow-xl text-center p-2 ml-40 ">
              <p className="bg-[#E1A6FF] rounded-[10px] px-3 py-[1px]">
                monthly
              </p>
              <p className=" rounded-[10px]  px-3 py-[1px]">yearly</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between ">
            {cardData.map((item) => (
              <div
                className="rounded-[10px] w-[313px] shadow-sm space-y-[10px]  p-8 shadow-[#7A3199]"
                style={{
                  backgroundColor: item.bgcolor ? "#7A3199" : "white",
                  color: `${item.colr}`,
                }}
              >
                <h2 className="text-[16px] font-bold">{item.title}</h2>
                <p className="text-[16px] font-bold ">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting
                </p>
                <p
                  className="text-[32px] text-[#7A3199] py-[2px] gap-[16px] font-bold"
                  style={{
                    color: item.colr ? "white" : "black",
                  }}
                >
                  $ 54 <span className="text-[14px] font-thin">/month</span>
                </p>
                <>
                  <li>Free access to video class</li>
                  <li>Free access to video class</li>

                  <li>Free access to video class</li>
                </>
                <button
                  className="text-[#7A3199]  py-2 px-3  border-2"
                  style={{
                    backgroundColor: item.colr ? "white" : "",
                  }}
                >
                  Start Free Trial
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChoosPlan;
