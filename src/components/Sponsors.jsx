import React from "react";

const sponsors = [
    // Using placeholders for now as specific logos weren't provided
    { name: "Sponsor 1", logo: "https://via.placeholder.com/150/ffffff/000000?text=Sponsor+1" },
    { name: "Sponsor 2", logo: "https://via.placeholder.com/150/ffffff/000000?text=Sponsor+2" },
    { name: "Sponsor 3", logo: "https://via.placeholder.com/150/ffffff/000000?text=Sponsor+3" },
    { name: "Sponsor 4", logo: "https://via.placeholder.com/150/ffffff/000000?text=Sponsor+4" },
    { name: "Sponsor 5", logo: "https://via.placeholder.com/150/ffffff/000000?text=Sponsor+5" },
    { name: "Sponsor 6", logo: "https://via.placeholder.com/150/ffffff/000000?text=Sponsor+6" },
    { name: "Sponsor 7", logo: "https://via.placeholder.com/150/ffffff/000000?text=Sponsor+7" },
    { name: "Sponsor 8", logo: "https://via.placeholder.com/150/ffffff/000000?text=Sponsor+8" },
];

function Sponsors() {
    return (
        <div className="w-full py-12 md:py-32 overflow-hidden bg-[#1e409c]">
            <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Sponsors</h2>
                <div className="w-20 h-1 bg-white/30 mx-auto rounded-full"></div>
            </div>

            {/* Slider Container */}
            <div className="relative w-full overflow-hidden pause-on-hover before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-[100px] before:bg-gradient-to-r before:from-[#1e409c] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-[100px] after:bg-gradient-to-l after:from-[#1e409c] after:to-transparent">
                <div className="flex animate-scroll whitespace-nowrap w-max px-0">
                    <div className="flex items-center gap-12 md:gap-20 pr-12 md:pr-20">
                        {[...sponsors, ...sponsors].map((sponsor, index) => (
                            <div
                                key={`sponsor-${index}`}
                                className="w-40 h-30 md:w-72 md:h-40 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center p-4 hover:bg-white/20 transition-all duration-300 border border-white/5 shadow-lg group flex-shrink-0"
                            >
                                <span className="text-white font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                                    {sponsor.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
