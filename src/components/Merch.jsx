import React from "react";

const merchItems = [
    {
        id: 1,
        name: "Horizon Official T-Shirt",
        price: " ₹250.00",
        image: "https://via.placeholder.com/400x400/1e3a8a/ffffff?text=Horizon+T-Shirt",
        link: "https://shop.example.com/t-shirt" // Placeholder link
    },
    {
        id: 2,
        name: "Horizon Hoodie",
        price: " ₹450.00",
        image: "https://via.placeholder.com/400x400/1e3a8a/ffffff?text=Horizon+Hoodie",
        link: "https://shop.example.com/hoodie" // Placeholder link
    }
];

function Merch() {
    return (
        <div className="w-full relative bg-[#1e409c] py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Official Merchandise</h2>
                    <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-12 items-center">
                    {merchItems.map((item) => (
                        <div
                            key={item.id}
                            className="w-full max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl flex flex-col group"
                        >
                            {/* Image Container */}
                            <div className="aspect-square overflow-hidden relative">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                                <p className="text-white/90 text-xl mb-6 font-medium">{item.price}</p>

                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-8 py-3 bg-white text-[#1e409c] font-bold rounded-full hover:bg-opacity-90 transition-all duration-200 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                                >
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Merch;
