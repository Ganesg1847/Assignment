import React, { useState } from "react";
import "./Home.css";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
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

const Navbar = () => {
  return (
    <div className=" px-10">
      <div className="flex justify-between py-2">
        <div>
          <p className="text-white">Logo</p>
        </div>
        <div>
          <ul className="flex gap-10 navmain mt-2 font-semibold ">
            {NavbarData?.map((list, id) => (
              <li key={id} className=" ">
                {list.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
