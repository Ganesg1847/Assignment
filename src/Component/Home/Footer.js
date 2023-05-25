import React from "react";
import { AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
  const NavData = [
    "Home",
    "About Us",
    "Contact Us",
    "Privacy Policy ",
    "Sitemap",
  ];
  return (
    <div className="bg-[#080C1F]  py-12">
      <div className="grid justify-center items-center space-y-16 text-white">
        <div className="text-center space-y-6">
          <div className="ml-28">
            <img
              src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
              className="w-[140px]"
            />
          </div>

          <div>
            <ul className="flex space-x-4">
              {NavData.map((item, id) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[#6F7F92]">
              9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada
            </p>
          </div>
          <div className="flex justify-center space-x-6 text-lg">
            <AiOutlineTwitter />
            <AiFillLinkedin />
          </div>
          <div>
            <p className="text-[#6F7F92]">© 2022. Ntwist Inc.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
