import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between px-4 sm:px-10 py-3 mb-5 sm:mt-8 md:mt-3 items-center">
      <Link to="/">
        <img src={Logo} className="w-10 h-10 sm:w-12 sm:h-12" alt="Logo" />
      </Link>

      <div>
        <ul className="flex items-center space-x-4 sm:space-x-10 text-xl sm:text-2xl">
          <li className="hover:text-[#fa5f55]">
            <Link
              to="/"
              className="decoration-0 text-[#3A1212] border-b-4 border-[#FF2625]"
            >
              Home
            </Link>
          </li>
          <li className="hover:text-[#fa5f55]">
            <a
              href="#Showing_Exercises"
              className="decoration-0 text-[#3A1212]"
            >
              Exercises
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
