import React from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-violet-400 to-indigo-500 py-6 shadow-lg " >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">

      <img className='h-8' src={assets.userprofile} alt="" />
        
        <ul className="flex items-center gap-10 text-white">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>

        <div className='flex items-center gap-8'>
          <img className='h-8' src={assets.cart} alt="" />
          <img className='h-8' src={assets.searchbar} alt="" />
          <img className='h-8' src={assets.wishlist} alt="" />
          <img className='h-8' src={assets.userprofile} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Navbar;
