import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-primary text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-xl font-bold">E-Commerce</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="hover:text-gray-300 transition duration-300"
            >
              Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
  