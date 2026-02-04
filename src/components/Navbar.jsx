import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Merch", path: "/merch" },
    { name: "Sponsors", path: "/sponsors" },
  ];

  return (
    <nav className="fixed top-2 left-0 w-full z-50 transition-all duration-300">
      <div className="w-full h-14 md:h-18 px-6 md:px-12 flex items-center justify-between
                      bg-transparent md:bg-white/5 shadow-lg md:rounded-full md:backdrop-blur-sm md:border-b md:border-white/10 md:shadow-lg">

        {/* Left Logo (Hidden on Mobile) */}
        <div className="flex-shrink-0 hidden md:block">
          <div className="h-7 w-16 bg-transparent rounded-md flex items-center justify-center text-xs text-white/50">
            <img src="https://res.cloudinary.com/ddpdocy8k/image/upload/v1770139420/Asset_4_4x_2_ly7wkb.png" alt="" />
          </div>
        </div>

        {/* Right Logo (Visible on Mobile - acting as Left Logo in flex) */}
        <div className="w-16 md:hidden flex-shrink-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <img className="h-10 w-auto" src="https://res.cloudinary.com/ddpdocy8k/image/upload/v1770139373/IGIT-Conference-2021-removebg-SOLID_COLOR_hfwzdd.png" alt="" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 bg-black/20 px-8 py-2 rounded-full border border-white/5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="relative text-white/80 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Right Logo (Desktop) */}
        <div className="hidden md:block flex-shrink-0">
          <div className="h-7 w-16 bg-transparent rounded-md flex items-center justify-center text-xs text-shadow-blue-50">
            <img src="https://res.cloudinary.com/ddpdocy8k/image/upload/v1770139373/IGIT-Conference-2021-removebg-SOLID_COLOR_hfwzdd.png" alt="" />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`md:hidden absolute top-20 left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-black/90 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-white/90 text-lg font-medium hover:text-sky-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          {/* Right Logo in Mobile Menu (optional placement) */}
          <div className="mt-2 h-8 w-20 bg-white/20 rounded-md flex items-center justify-center text-xs text-white/50">
            Logo Right
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
