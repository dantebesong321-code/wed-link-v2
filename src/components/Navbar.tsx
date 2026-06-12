import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,

 
} from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}

        <Link
          to="/"
          className="font-bold text-2xl"
        >
          WedLink
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden md:flex items-center gap-8">

          <Link
            to="/about"
            className="hover:text-zinc-500 transition"
          >
            About
          </Link>

  
          <Link to="/vendors" className="hover:text-zinc-500 transition">
          Vendors
          </Link>

          <Link
            to="/vendors/new"
            className="
              bg-black
              text-white
              px-4
              py-2
              rounded-md
              hover:bg-zinc-800
              transition
            "
          >
            Add Vendor
          </Link>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() =>
            setMenuOpen(!menuOpen)
          }
          className="md:hidden text-xl"
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div
          className="
            md:hidden
            border-t
            bg-white
          "
        >
          <div className="px-6 py-4 flex flex-col gap-4">

            <Link
              to="/about"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              About
            </Link>

           

             <Link to="/vendors" className="hover:text-zinc-500 transition">
          Vendors
          </Link>

            <Link
              to="/vendors/new"
              onClick={() =>
                setMenuOpen(false)
              }
              className="
                bg-black
                text-white
                rounded-md
                py-3
                text-center
              "
            >
              Add Vendor
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}