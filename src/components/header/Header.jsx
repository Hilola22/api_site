import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { name: "Home", path: "/" },
    { name: "Users", path: "/users" },
    { name: "Posts", path: "/posts" },
    { name: "Login", path: "/login" },
    { name: "Sign up", path: "/signup" },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md fixed top-0 left-0 z-50 select-none">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <div className="flex items-center gap-4">
          <h2 className="font-bold text-xl md:text-2xl">LOGO</h2>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
            <span className="block w-6 h-0.5 bg-white mb-1 rounded"></span>
            <span className="block w-6 h-0.5 bg-white rounded"></span>
          </button>
        </div>
        <nav
          className={`flex-col md:flex-row md:flex gap-6 absolute md:static top-20 left-0 w-full md:w-auto p-6 md:p-0 
            ${
              isOpen
                ? "flex bg-gradient-to-r from-blue-500 to-purple-500 md:bg-transparent"
                : "hidden"
            }`}
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `uppercase font-medium text-white hover:text-yellow-300 transition ${
                  isActive ? "underline text-yellow-300" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
