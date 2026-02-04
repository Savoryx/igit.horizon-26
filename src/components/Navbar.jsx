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
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="w-full h-20 px-6 md:px-12 flex items-center justify-between
                      bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg">

        {/* Left Logo Placeholder */}
        <div className="flex-shrink-0">
          <div className="h-10 w-24 bg-white/20 rounded-md animate-pulse flex items-center justify-center text-xs text-white/50">
            Logo Left
          </div>
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

        {/* Right Logo Placeholder */}
        <div className="hidden md:block flex-shrink-0">
          <div className="h-10 w-24 bg-white/20 rounded-md animate-pulse flex items-center justify-center text-xs text-white/50">
            Logo Right
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
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
