import React, { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full px-2 sm:px-4 bg-transparent">
      {/* MAIN BAR */}
      <div
        className="
          w-full
          flex
          items-center
          justify-between
          rounded-xl
          px-3
          py-2
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          shadow-md
        "
      >
        {/* LEFT LOGO */}
        <img
          src="https://res.cloudinary.com/ddpdocy8k/image/upload/dpr_auto,f_auto,q_auto:best/v1770139373/IGIT-Conference-2021-removebg-SOLID_COLOR_hfwzdd.png"
          alt="IGIT Logo"
          className="
            h-7
            sm:h-8
            md:h-9
            max-w-[120px]
            sm:max-w-[150px]
            md:max-w-[180px]
            object-contain
          "
        />

        {/* CENTER MENU (DESKTOP) */}
        <div className="hidden md:flex gap-6 lg:gap-8">
          <button className="text-white/90 hover:text-white transition">
            Home
          </button>
          <button className="text-white/90 hover:text-white transition">
            About
          </button>
          <button className="text-white/90 hover:text-white transition">
            Event
          </button>
          <button className="text-white/90 hover:text-white transition">
            Merch
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">
          <img
            src="https://res.cloudinary.com/ddpdocy8k/image/upload/dpr_auto,f_auto,q_auto:best/v1770139420/Asset_4_4x_2_ly7wkb.png"
            alt="Horizon Logo"
            className="
              h-7
              sm:h-8
              md:h-9
              max-w-[120px]
              sm:max-w-[150px]
              md:max-w-[180px]
              object-contain
            "
          />

          {/* HAMBURGER (MOBILE ONLY) */}
          <button
            className="md:hidden text-white text-xl leading-none"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            mt-2
            rounded-xl
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            shadow-md
            flex
            flex-col
            items-center
            py-3
            gap-3
            md:hidden
          "
        >
          <button className="text-white/90 hover:text-white transition">
            Home
          </button>
          <button className="text-white/90 hover:text-white transition">
            About
          </button>
          <button className="text-white/90 hover:text-white transition">
            Event
          </button>
          <button className="text-white/90 hover:text-white transition">
            Merch
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
