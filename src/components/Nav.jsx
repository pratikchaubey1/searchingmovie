import React from 'react';
import { IoMdHome } from "react-icons/io";

function Nav({ search, setsearch }) {
  

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex gap-6 text-base font-medium">
          <a href="/" className="hover:underline">
             <IoMdHome /> 
          </a>
          <a href="/" className="hover:underline">
            About Us
          </a>
          <a href="/" className="hover:underline">
            Contact
          </a>
        </div>

        <form
         
          className="w-full md:w-auto flex flex-1 items-center gap-2 max-w-xl"
        >
          <input
            type="text"
            placeholder="Search movies..."
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
          />
        </form>

        <div className="flex gap-6 text-base font-medium">
          <a href="/" className="hover:underline">Login</a>
          <a href="/" className="hover:underline">Sign Up</a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
