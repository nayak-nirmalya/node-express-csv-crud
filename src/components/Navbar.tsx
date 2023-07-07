import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full h-16 flex items-center px-14 justify-between bg-gray-800">
      <Link
        to={"/"}
        className="text-3xl text-white hover:text-gray-400 font-semibold font-Montesarrat"
      >
        HOME
      </Link>
      <Link
        to={"/add-user"}
        className="hover:bg-gray-600 hover:border-2 hover:border-white hover:text-white hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"
      >
        Add User
      </Link>
    </div>
  );
}

export default Navbar;
