import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between font-medium w-full lg:w-full sm:w-full  bg-gradient-to-r from-violet-400 to-indigo-500 py-6 shadow-lg sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        <img className="h-8" src={assets.logo} alt="" />

        <ul className="hidden sm:flex gap-5  text-sm text-gray-700">
          <li cursor-pointer>
            <a href="#home">Home</a>
          </li>
          <li cursor-pointer>
            <a href="#services">Services</a>
          </li>
          <li cursor-pointer>
            <a href="#contact">Contact</a>
          </li>
          <li cursor-pointer>
            <a href="#about">About</a>
          </li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-2">
          <img className="h-8" src={assets.cart} alt="" />
          <img className="h-8" src={assets.searchbar} alt="" />
          <img className="h-8" src={assets.wishlist} alt="" />
          <img className="h-8" src={assets.userprofile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
