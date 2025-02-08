// components/Navbar.js
"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-400 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-3xl">
          Portfolio
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-white text-2xl" onClick={handleToggle}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>

        {/* Desktop Menu */}
        <ul className={`md:flex space-x-6 hidden`}>
          <li>
            <Link href="/" className="text-white hover:text-[#d4ff88]">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-[#d4ff88]">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="text-white hover:text-[#d4ff88]">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-[#d4ff88]">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden fixed top-16 left-0 w-full bg-gradient-to-r from-green-600 to-green-400 p-6 space-y-4 z-50">
            <li>
              <Link href="/" onClick={handleToggle} className="text-white hover:text-[#d4ff88]">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={handleToggle} className="text-white hover:text-[#d4ff88]">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" onClick={handleToggle} className="text-white hover:text-[#d4ff88]">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={handleToggle} className="text-white hover:text-[#d4ff88]">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;