import React from "react";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-3 sm:px-4">
        <div
          className="
            flex h-14 sm:h-16 items-center justify-between
            rounded-2xl
            px-4
            bg-white/10
            backdrop-blur-xl
            border border-white/20
            shadow-lg
          "
        >
          {/* Left Logo */}
          <img
            src="https://res.cloudinary.com/ddpdocy8k/image/upload/f_auto,q_auto:best/v1770139373/IGIT-Conference-2021-removebg-SOLID_COLOR_hfwzdd.png"
            alt="IGIT Logo"
            className="h-[26px] sm:h-[30px] md:h-[34px] w-auto object-contain"
            loading="eager"
            decoding="async"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {["Home", "About", "Events", "Merch"].map((item) => (
              <button
                key={item}
                className="
                  text-sm lg:text-base
                  text-white/80
                  hover:text-white
                  transition-colors duration-200
                "
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Right Logo */}
          <img
            src="https://res.cloudinary.com/ddpdocy8k/image/upload/f_auto,q_auto:best/v1770139420/Asset_4_4x_2_ly7wkb.png"
            alt="Horizon Logo"
            className="h-[26px] sm:h-[30px] md:h-[34px] w-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
