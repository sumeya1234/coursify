import "../../../src/App.css";
import { AlignRight, LaptopMinimal, X } from 'lucide-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggle = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <div className="sticky top-0 z-50 shadow-md customLight">
        {/* Desktop Header */}
        <div className="flex items-center justify-between h-16 px-8">
          <div className="logo">
            <Link
              to="/"
              className="flex items-center gap-2 text-2xl font-bold text-gray-800"
            > 
              <div className="p-1 text-white rounded customOrange">
                <LaptopMinimal />
              </div>
              Coursify
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggle}>
              {menuOpen ? <X size={26} /> : <AlignRight size={26} />}
            </button>
          </div>
          <ul className="items-center hidden gap-8 textGray md:flex">
            <li>
              <Link to="/" className="block py-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block py-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/courses" className="block py-2">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/signup" className="block my-2">
                <button className="p-2 text-white rounded customPurple">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-60" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center px-4 pb-4 textGray">
            <li>
              <Link to="/" className="block my-2">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block my-2">
                About
              </Link>
            </li>
            <li>
              <Link to="/courses" className="block my-2">
                Courses
              </Link>
            </li>
            <li>
              <Link to="/signup" className="block my-2">
                <button className="p-2 text-white rounded customPurple">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header