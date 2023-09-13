"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/images/LB.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-800 fixed w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <Image src={Logo} alt="logo" width={100} />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-4 text-white">
              <a href="/" className=" hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="/about" className=" hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/services" className=" hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Services
              </a>
              <a href="/contact" className=" hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar} className="text-white hover:bg-gray-700 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute left-[16rem] transform -translate-x-full bg-gray-900 w-64 h-screen overflow-y-auto transition-transform ease-in-out duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </a>
            <a href="/about" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              About
            </a>
            <a href="/services" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Services
            </a>
            <a href="/contact" className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </a>
            {/* Add your user-related or login/logout buttons here */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
