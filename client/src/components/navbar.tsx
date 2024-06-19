"use client";

import { useState } from "react";
import CTAButton from "./button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [white, setWhite] = useState(30);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setWhite(white === 100 ? 30 : 100);
  };

  return (
    <div
      className={`sticky top-0 z-50 h-20 w-full items-center backdrop-blur shadow-sm px-2 flex justify-between bg-white`}
      style={{ backgroundColor: `rgba(255, 255, 255, ${white / 100})` }}
    >
      <div className="container w-[98%] md:p-0 m-auto flex items-center justify-between">
        <a href="/">
          <img src="flair_logo.svg" width="120px" alt="Logo" />
        </a>
        <div className="gap-20 font-medium hidden md:flex">
          <div>About</div>
          <div>For Patients</div>
          <div>For Clinics</div>
        </div>
        <CTAButton title="Contact Us" />
        <button
          className="md:hidden flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-black hover:border-black"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white shadow-sm gap-4 h-screen p-4 absolute w-full top-20 left-0">
          <div>About</div>
          <div>For Patients</div>
          <div>For Clinics</div>
          <CTAButton title="Contact Us" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
