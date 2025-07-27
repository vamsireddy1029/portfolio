// @flow strict
"use client";

import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">

        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-2 text-[#16f2b3] text-3xl font-bold">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className="h-10 w-auto"
            />
            <p style={{ color: 'white', fontFamily: 'Poppins, sans-serif', 
            fontWeight: '600', 
            fontSize: '1.5rem'  }}>Vamsi Reddy</p>
          </Link>
        </div>



        <button
          className="block md:hidden text-[#16f2b3] font-bold focus:outline-none"
          onClick={toggleMenu}
        >
          ☰
        </button>

        <ul className="hidden md:flex md:flex-row md:space-x-1">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ABOUT</div>
            </Link>
          </li>
         
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">SKILLS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">PROJECTS</div>
            </Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">EDUCATION</div>
            </Link>
          </li>

          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#contact">
              <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">CONTACT</div>
            </Link>
          </li>
        </ul>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center topOfAll">
          <button
            className="absolute top-5 right-5 neon-text-orange font-bold text-3xl focus:outline-none"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                className="neon-text text-2xl font-bold no-underline outline-none hover:no-underline"
                href="/#about"
                onClick={closeMenu}
              >
                ABOUT 🔍
              </Link>
            </li>
            <li>
              <Link
                className="neon-text-yellow text-2xl font-bold no-underline outline-none hover:no-underline"
                href="/#experience"
                onClick={closeMenu}
              >
                EXPERIENCE 💼
              </Link>
            </li>
            <li>
              <Link
                className="neon-text-orange text-2xl font-bold no-underline outline-none hover:no-underline"
                href="/#skills"
                onClick={closeMenu}
              >
                SKILLS 🧠
              </Link>
            </li>
            <li>
              <Link
                className="neon-text-blue text-2xl font-bold no-underline outline-none hover:no-underline"
                href="/#projects"
                onClick={closeMenu}
              >
                PROJECTS 💡
              </Link>
            </li>
            <li>
              <Link
                className="neon-text-green text-2xl font-bold no-underline outline-none hover:no-underline"
                href="/#education"
                onClick={closeMenu}
              >
                EDUCATION 🎓
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
