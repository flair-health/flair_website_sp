"use client";

import { useState } from "react";
import CTAButton from "./button"; // Import the ContactModal component
import { Link } from "react-scroll";
import { Sling } from "hamburger-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // State to manage modal visibility
  const [white, setWhite] = useState(30);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setWhite(white === 100 ? 30 : 100);
  };

  return (
    <div
      className={`sticky top-0 z-50 h-20 w-full items-center backdrop-blur shadow-sm px-2 flex justify-between bg-white`}
      style={{ backgroundColor: `rgba(255, 255, 255, ${white / 50})` }}
    >
      <div className="container md:w-[82%] md:p-0 m-auto flex items-center justify-between">
        <a href="/">
          <img src="flair_logo_white.png" width="85px" alt="Logo" />
        </a>
        <div className=" font-medium hidden md:flex w-[40%] justify-between text-[#14a8e1]">
          <a href="/forclinic" className="hover:underline cursor-pointer">
            For Clinics
          </a>
          <Link
            activeClass="active"
            smooth
            spy
            to="testimonials"
            className="hover:underline cursor-pointer"
          >
            For Pharma
          </Link>
          <a href="/about" className="hover:underline cursor-pointer">
            About Us
          </a>
          {/* <Link
            activeClass="active"
            smooth
            spy
            to="functionality"
            className="hover:underline cursor-pointer"
          >
            For Patients
          </Link> */}
        </div>
        <div className="hidden md:block">
          <CTAButton title="Learn more" />
        </div>
        <div onClick={toggleMenu}>
          <Sling size={25} color="#14a8e1" />
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center text-2xl mt-10 bg-white shadow-sm gap-4 text-[#14a8e1] h-screen p-4 absolute w-full top-10 left-0">
          <a href="/forclinic" className="hover:underline cursor-pointer">
            For Clinics
          </a>
          <Link
            activeClass="active"
            smooth
            spy
            to="testimonials"
            className="hover:underline cursor-pointer"
            onClick={() => {
              setIsMenuOpen(false);
            }}
          >
            For Pharma
          </Link>
          <a href="/about" className="hover:underline cursor-pointer">
            About Us
          </a>
        </div>
      )}
      {/* <ContactModal isOpen={isModalOpen} onClose={closeModal} />{" "} */}
      {/* Add the modal */}
    </div>
  );
};

export default Navbar;
