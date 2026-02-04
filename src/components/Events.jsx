import React from "react";

const events = [
    {
        id: 1,
        title: "Eco Hackathon",
        description: "Join us for a 24-hour hackathon dedicated to sustainable solutions.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Eco+Hackathon",
        link: "https://drive.google.com/drive/" // Placeholder link
    },
    {
        id: 2,
        title: "Tech Summit 2024",
        description: "Explore the latest in AI, Blockchain, and Cloud Computing.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Tech+Summit",
        link: "https://drive.google.com/drive/" // Placeholder link
    },
    {
        id: 3,
        title: "Design Workshop",
        description: "Learn the fundamentals of UI/UX design from industry experts.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Design+Workshop",
        link: "https://drive.google.com/drive/" // Placeholder link
    },
    {
        id: 4,
        title: "Gaming Championship",
        description: "Battle it out in the ultimate gaming tournament of the year.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Gaming+Champ",
        link: "https://drive.google.com/drive/" // Placeholder link
    },
    {
        id: 5,
        title: "Startup Pitch",
        description: "Pitch your ideas to top VCs and angel investors.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Startup+Pitch",
        link: "https://drive.google.com/drive/" // Placeholder link
    },
];

function Events() {
    return (
        <div className="w-full relative bg-[#1e409c] py-16 md:py-24">
            {/* Background Image Wrapper - Prepared for future bg image */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                {/* <img src="/path/to/bg-image.jpg" alt="Background" className="w-full h-full object-cover" /> */}
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Upcoming Events</h2>
                    <div className="w-24 h-1 bg-white/50 mx-auto rounded-full"></div>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory">
                    <div className="flex gap-4 md:gap-8 w-max px-4">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="w-[85vw] sm:w-80 md:w-96 snap-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl flex flex-col"
                            >
                                {/* Poster Image */}
                                <div className="h-64 overflow-hidden">
                                    <img
                                        src={event.poster}
                                        alt={event.title}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
                                    <p className="text-white/80 mb-6 text-sm leading-relaxed line-clamp-3">
                                        {event.description}
                                    </p>

                                    <div className="mt-auto">
                                        <a
                                            href={event.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-6 py-2 bg-white text-[#1e409c] font-bold rounded-full hover:bg-opacity-90 transition-colors duration-200"
                                        >
                                            More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CSS to hide scrollbar but keep functionality */}
            <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
        </div>
    );
}

export default Events;
