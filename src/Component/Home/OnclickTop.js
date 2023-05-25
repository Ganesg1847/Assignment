import { useEffect } from "react";

import { useState } from "react";

import React from "react";

import { IoIosArrowUp } from "react-icons/io";
import "animate.css";
export default function OnclickTop() {
  useEffect(() => {
    if (typeof window == undefined) {
      return;
    }
    window.addEventListener("scroll", scroll);
  });

  const [scrolled, setScrolled] = useState(false);

  const scroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 250) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <div>
      {scrolled && (
        <button
          // className="animate-bounce"
          onClick={() => {
            window.scrollTo({ top: 0, right: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "40px",
          }}
          aria-label="bottom to top "
        >
          <IoIosArrowUp
            className="text-white rounded-full bg-[#003358] text-6xl p-3 h-[45px]
            w-[45px] "
          />
        </button>
      )}
    </div>
  );
}
