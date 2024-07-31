import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  return (
    <div className="w-screen flex justify-normal px-10 py-1 mb-5  sm:mt-8 md:mt-3">
      <div className="items-center">
        <Link to={"/"}>
          <img src={Logo} className="w-12 h-12 mx-5 my-2" alt="Logo" />
        </Link>
      </div>

      <div>
        <ul className="flex items-center pt-2 text-2xl align-sub px-20">
          <li className="p-5 hover:text-[#fa5f55]">
            <Link
              to="/"
              className="decoration-0 text-[#3A1212] border-b-4 border-[#FF2625] "
            >
              Home
            </Link>
          </li>
          <li>
            <a href="#exercises" className="decoration-0 text-[#3A1212]">
              Exercises
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
