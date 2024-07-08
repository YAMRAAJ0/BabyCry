import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import { GiIndiaGate } from "react-icons/gi";
import { SiAirtel } from "react-icons/si";
import { FaCcAmex } from "react-icons/fa6";
import { FaCcMastercard } from "react-icons/fa6";
import { SiPaytm } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="bg-yellow-500 p-2 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h2 className="font-bold text-lg">Categories</h2>
            <ul className="mt-4 space-y-2">
              <li>Baby Walker</li>
              <li>Bath Tub</li>
              <li>Board Games</li>
              <li>Bump N Go</li>
              <li>Chairs</li>
              <li>Cubes</li>
              <li>Drum</li>
            
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg">Company</h2>
            <ul className="mt-4 space-y-2">
              <li>About Us</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg">Useful links</h2>
            <ul className="mt-4 space-y-2">
              <li>Privacy Policy</li>
              <li>Return & Cancellation Policy</li>
              <li>Shipping Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-lg">Follow Us</h2>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white"><FaFacebook size={24} /></a>
              <a href="#" className="text-white"><FaTwitter size={24} /></a>
              <a href="#" className="text-white"><FaInstagram size={24} /></a>
              <a href="#" className="text-white"><FaYoutube size={24} /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-100">
          <p className="mb-4 md:mb-0">&copy; 2024 Toyzone. All rights reserved.</p>
          <div className="flex space-x-4">
          <SiAirtel  alt="Payment Method" className="h-6 w-6"  />
          <FaCcAmex  alt="Payment Method" className="h-6 w-6" />
          <FaCcMastercard alt="Payment Method" className="h-6 w-6" />
          <SiPaytm />
          </div>
          <GiIndiaGate alt="Make in India" className="h-10 w-10 mt-4 md:mt-0" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
