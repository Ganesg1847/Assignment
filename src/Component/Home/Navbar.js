import React, { useState } from "react";
import "./Home.css";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
const NavbarData = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Industries",
    subNav: [
      {
        id: 1,
        name: "sustainability",
      },
      {
        id: 2,
        name: "Mineral Processing",
      },
      {
        id: 3,
        name: "Mine-To-Mill-To-Mine Optimization",
      },
      {
        id: 4,
        name: "Oil & Gas ",
      },
    ],
  },
  {
    id: 3,
    name: "AI Software",
  },
  {
    id: 4,
    name: "Blog",
  },
  {
    id: 5,
    name: "Contact Us",
  },
];

const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [open, setOpen] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <div
      className="md:px-16 px-10"
      style={{
        position: "fixed",
        backgroundColor: colorChange ? "white" : "",
        top: "-2px",
        width: "100%",
        display: "block",

        zIndex: "10",
      }}
    >
      <div className="flex justify-between py-2">
        <div>
          {colorChange ? (
            <img
              src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"
              className="w-[135px] h-[45px]"
            />
          ) : (
            <img
              src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
              className="w-[135px] h-[45px]"
            />
          )}
        </div>
        <div>
          <ul
            className="flex gap-10 relative navmain mt-2 font-semibold "
            style={{ color: colorChange ? "black" : "white" }}
          >
            {NavbarData?.map((list, id) => (
              <li key={id} className="md:block hidden  hover:underline">
                {list.name}

                <ul className="Subnav absolute space-y-2 px-3 w-[250px] text-black shadow-xl mt-3 rounded-md">
                  {list.subNav?.map((list, id) => (
                    <li key={id} className=" text-[18px] p-2">
                      {list.name}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="md:hidden block -mt-2 "
          style={{ backgroundColor: open ? "black" : null }}
        >
          {
            <button
              type="button"
              className="mt-3 p-2   text-2xl  text-white "
              onClick={() => setOpen(!open)}
              style={{ color: colorChange ? "#000" : "" }}
            >
              {open ? (
                <AiOutlineClose className="text-white" />
              ) : (
                <AiOutlineBars />
              )}
            </button>
          }

          {open ? (
            <div className="w-[50vh] bg-black">
              <div className="  h-[100vh] ">
                <ul className="grid justify-center gap-10 text-white  ">
                  {NavbarData?.map((list, id) => (
                    <li key={id}>{list.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
