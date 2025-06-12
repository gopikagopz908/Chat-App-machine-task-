import React from "react";
import { FaShoppingCart, FaUserFriends, FaUser } from "react-icons/fa";

const TopNavbar = () => {
  return (
    <nav className="bg-primary w-full flex items-center justify-between px-3 py-1 relative m-0">
      <div className="flex items-center space-x-6 text-white font-semibold text-sm">
        <span className="hover:underline cursor-pointer">Join Us</span>
        <span className="flex items-center gap-1 hover:underline cursor-pointer">
          <FaShoppingCart /> Store
        </span>
        <span className="flex items-center gap-1 hover:underline cursor-pointer">
          <FaUserFriends /> Plans
        </span>
      </div>

      {/* Center Logo */}
       <div className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-primary rounded-t-full p-2 shadow-lg">
    <img
      src="/logo.png" // replace with your logo path
      alt="Logo"
      className="w-20 h-11 object-contain"
    />
  </div>

      {/* Right Items */}
      <div className="flex items-center space-x-6 text-white font-semibold text-sm">
        <span className="hover:underline cursor-pointer">Comics</span>
        <span className="hover:underline cursor-pointer">Podcasts</span>
        <span className="hover:underline cursor-pointer">Audio Comics</span>
        <span className="text-purple-600 bg-white rounded-full p-2">
          <FaUser />
        </span>
      </div>
    </nav>
  );
};

export default TopNavbar;
