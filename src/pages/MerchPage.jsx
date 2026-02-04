import React from "react";
import Footer from "../components/Footer";

const products = [
    {
        id: 1,
        name: "Horizon Official T-Shirt",
        price: "₹250.00",
        image: "https://via.placeholder.com/400x400/1e3a8a/ffffff?text=Horizon+T-Shirt",
        link: "https://shop.example.com/t-shirt"
    },
    {
        id: 2,
        name: "Horizon Hoodie",
        price: "₹450.00",
        image: "https://via.placeholder.com/400x400/1e3a8a/ffffff?text=Horizon+Hoodie",
        link: "https://shop.example.com/hoodie"
    },
];

function MerchPage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-white pt-24">
            {/* Header */}
            <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                    Official Merchandise
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Grab your exclusive Horizon gear and show your support!
                </p>
            </div>

            {/* Product Grid */}
            <div className="max-w-7xl mx-auto px-4 pb-20">
                <div className="flex flex-wrap justify-center gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl flex flex-col group"
                        >
                            {/* Image Container */}
                            <div className="aspect-square overflow-hidden relative">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                                <p className="text-cyan-400 text-xl mb-6 font-medium">{product.price}</p>

                                <div className="mt-auto">
                                    <a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-8 py-3 bg-white text-[#1e409c] font-bold rounded-full hover:bg-opacity-90 transition-all duration-200 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
                                    >
                                        Buy Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default MerchPage;
