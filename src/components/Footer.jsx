import React from "react";

function Footer() {
    return (
        <footer className="w-full relative h-101 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://res.cloudinary.com/ddpdocy8k/image/upload/v1770204306/dome_landscape_uyo8yo.png')",
                    backgroundPosition: "center 40%"
                }}
            >
                {/* Overlay for better text readability if needed, currently set to transparent/subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full h-full flex flex-col items-center justify-end pb-12 md:pb-16 text-center px-4">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-wider uppercase font-serif" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>
                    Wheels of Celebration
                </h2>
                <div className="w-32 h-1 bg-white/70 mt-6 rounded-full"></div>

                <p className="text-white/60 text-sm mt-8">
                    © {new Date().getFullYear()} Horizon. All rights reserved.
                </p>

                <p className="text-white/60 text-sm mt-8">
                    Made with 🩷 by <a href="https://github.com/Savoryx" className="text-white/60 hover:text-white transition-colors">Savoryx</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
