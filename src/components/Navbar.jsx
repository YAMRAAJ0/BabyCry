import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSearch, FaShoppingCart, FaUser, FaPhone } from 'react-icons/fa';
import { CgMail } from 'react-icons/cg';
import logo from '../logo/devopsfarm-logo-1500x1500 (1).png';
import { Link } from 'react-router-dom';
import { PiBabyBold } from "react-icons/pi";
const Navbar = () => {
  return (
    <header className="bg-yellow-500 p-2 text-white">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-4 flex-grow">
          <a href="mailto:support@toyzone.in" className="flex items-center">
            <CgMail className='mr-1 mt-1' />
            devopsfarmer@gmail.com
          </a>
        </div>
        <span className="flex-grow text-center">100% Replacement Available T&C Applied</span>
        <div className="flex space-x-4 flex-grow justify-end">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      <nav className="bg-white p-4 shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto space-y-2 md:space-y-0">
          <a href="/" className="flex items-center space-x-2">
            <img src={logo} alt="Toyzone Logo" className="h-12" />
            <h1 className="text-blue-600 font-bold text-4xl italic whitespace-nowrap flex items-center" >B<PiBabyBold className='h-7 mt-2 mx-0' />byCry</h1>

          </a>
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="flex space-x-6">
            <a href="#"><FaShoppingCart className="text-yellow-500" /></a>
            <a href="#"><FaUser className="text-yellow-500" /></a>
            <a href="#"><FaPhone className="text-yellow-500" /></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto mt-4">
          <div className="flex space-x-4 text-red-500">
            <a href="#" className="hover:text-yellow-500">Category</a>
            <a href="#" className="hover:text-yellow-500">Age</a>
            <a href="#" className="hover:text-yellow-500">Character</a>
            <a href="#" className="hover:text-yellow-500">Blogs</a>
            <a href="#" className="hover:text-yellow-500">Our Story</a>
            <a href="#" className="hover:text-yellow-500">Support</a>
            <Link to='/' className="hover:text-yellow-500">Product</Link>
            <Link to='/admin' className="hover:text-yellow-500">Admin</Link>
            <Link to='/' className="hover:text-yellow-500">Product</Link>
            <Link to='/products' className="hover:text-yellow-500">Products</Link>
            <Link to='/login' className="hover:text-yellow-500">Login</Link>
            <Link to='/register' className="hover:text-yellow-500">Register</Link>
          </div>
          <a href="#" className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">Bulk Orders</a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
