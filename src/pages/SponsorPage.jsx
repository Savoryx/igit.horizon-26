import React from "react";
import Footer from "../components/Footer";

// Sample data for sponsors
const sponsors = {
    diamond: [
        { name: "Diamond Sponsor 1", logo: "https://via.placeholder.com/300x150/ffffff/000000?text=Diamond+1" },
        { name: "Diamond Sponsor 2", logo: "https://via.placeholder.com/300x150/ffffff/000000?text=Diamond+2" },
    ],
    platinum: [
        { name: "Platinum Sponsor 1", logo: "https://via.placeholder.com/250x120/ffffff/000000?text=Platinum+1" },
        { name: "Platinum Sponsor 2", logo: "https://via.placeholder.com/250x120/ffffff/000000?text=Platinum+2" },
        { name: "Platinum Sponsor 3", logo: "https://via.placeholder.com/250x120/ffffff/000000?text=Platinum+3" },
    ],
    gold: [
        { name: "Gold Sponsor 1", logo: "https://via.placeholder.com/200x100/ffffff/000000?text=Gold+1" },
        { name: "Gold Sponsor 2", logo: "https://via.placeholder.com/200x100/ffffff/000000?text=Gold+2" },
        { name: "Gold Sponsor 3", logo: "https://via.placeholder.com/200x100/ffffff/000000?text=Gold+3" },
        { name: "Gold Sponsor 4", logo: "https://via.placeholder.com/200x100/ffffff/000000?text=Gold+4" },
    ],
    silver: [
        { name: "Silver Sponsor 1", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Silver+1" },
        { name: "Silver Sponsor 2", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Silver+2" },
        { name: "Silver Sponsor 3", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Silver+3" },
        { name: "Silver Sponsor 4", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Silver+4" },
        { name: "Silver Sponsor 5", logo: "https://via.placeholder.com/150x80/ffffff/000000?text=Silver+5" },
    ]
};

function SponsorPage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white pt-24">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Our Sponsors
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    We are proud to be supported by these amazing organizations who help make our vision a reality.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 pb-20 space-y-24">
                {/* Diamond Tier */}
                <section className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <div className="h-[1px] w-12 bg-cyan-400/50"></div>
                        <h2 className="text-3xl font-bold text-cyan-400 uppercase tracking-widest">Diamond Sponsors</h2>
                        <div className="h-[1px] w-12 bg-cyan-400/50"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-12">
                        {sponsors.diamond.map((sponsor, idx) => (
                            <div key={idx} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                                <div className="relative w-80 h-48 bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 flex items-center justify-center p-8 hover:transform hover:scale-105 transition-all duration-300">
                                    <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain filter hover:brightness-110" />
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Platinum Tier */}
                <section className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="h-[1px] w-12 bg-slate-300/50"></div>
                        <h2 className="text-2xl font-bold text-slate-300 uppercase tracking-widest">Platinum Sponsors</h2>
                        <div className="h-[1px] w-12 bg-slate-300/50"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10">
                        {sponsors.platinum.map((sponsor, idx) => (
                            <div key={idx} className="w-72 h-40 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain opacity-90 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Gold Tier */}
                <section className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-amber-400/50"></div>
                        <h2 className="text-xl font-bold text-amber-400 uppercase tracking-widest">Gold Sponsors</h2>
                        <div className="h-[1px] w-12 bg-amber-400/50"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {sponsors.gold.map((sponsor, idx) => (
                            <div key={idx} className="w-60 h-32 bg-white/5 backdrop-blur-sm rounded-lg border border-white/5 flex items-center justify-center p-4 hover:border-amber-400/30 transition-all duration-300">
                                <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain opacity-80 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* Silver Tier */}
                <section className="text-center">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-12 bg-gray-400/50"></div>
                        <h2 className="text-lg font-bold text-gray-400 uppercase tracking-widest">Silver Sponsors</h2>
                        <div className="h-[1px] w-12 bg-gray-400/50"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {sponsors.silver.map((sponsor, idx) => (
                            <div key={idx} className="w-48 h-24 bg-white/5 backdrop-blur-sm rounded-md border border-white/5 flex items-center justify-center p-4 hover:bg-white/10 transition-all duration-300">
                                <img src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity" />
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
}

export default SponsorPage;
