import {
  Heart,
  MagnifyingGlass,
  ShoppingCart,
  User,
} from "@phosphor-icons/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="bg-transparent shadow-md">
      {/* Navbar */}
      <nav className="flex justify-between items-center py-4 px-8">
        <p class="text-[#442D1C] font-Lato font-bold">ANGELIQUE</p>
        {/* Kategori Menu */}
        <div class=" justify-self-center ">
          <ul className="flex space-x-6 text-sm font-medium text-gray-700">
            <li className="hover:text-black cursor-pointer border-b-2 border-transparent hover:border-black">
              WOMEN
            </li>
            <li className="hover:text-black cursor-pointer border-b-2 border-transparent hover:border-black">
              MEN
            </li>
            <li className="hover:text-black cursor-pointer border-b-2 border-transparent hover:border-black">
              KIDS
            </li>
            <li className="hover:text-black cursor-pointer border-b-2 border-transparent hover:border-black">
              BRANDS
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="text-lg font-Lato font-bold text-[#442D1C]"></div>

        {/* Ikon */}
        <div className="flex space-x-6 text-gray-600">
          <MagnifyingGlass
            size={32}
            className="cursor-pointer hover:text-black"
          />
          <User size={32} className="cursor-pointer hover:text-black" />
          <Heart size={32} className="cursor-pointer hover:text-black" />
          <div className="relative">
            <Link to="/Keranjang">
            <ShoppingCart
              size={32}
              className="cursor-pointer hover:text-black"
            />
            </Link>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              2
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};
