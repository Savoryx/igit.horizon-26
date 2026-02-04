import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const technicalEvents = [
    {
        id: 101,
        title: "Eco Hackathon",
        description: "24-hour hackathon for sustainable tech solutions.",
        poster: "https://via.placeholder.com/300x400/1e3a8a/ffffff?text=Eco+Hackathon",
        link: "https://drive.google.com/drive/"
    },
    {
        id: 102,
        title: "Code Wars",
        description: "Competitive programming contest for algorithm wizards.",
        poster: "https://via.placeholder.com/300x400/1e3a8a/ffffff?text=Code+Wars",
        link: "https://drive.google.com/drive/"
    }
];

const funEvents = [
    {
        id: 201,
        title: "Gaming Championship",
        description: "Battle it out in this year's biggest e-sports tournament.",
        poster: "https://via.placeholder.com/300x400/1e3a8a/ffffff?text=Gaming+Champ",
        link: "https://drive.google.com/drive/"
    },
    {
        id: 202,
        title: "Scavenger Hunt",
        description: "Solve riddles and find clues across the campus.",
        poster: "https://via.placeholder.com/300x400/1e3a8a/ffffff?text=Scavenger+Hunt",
        link: "https://drive.google.com/drive/"
    }
];

const culturalEvents = [
    {
        id: 301,
        title: "Battle of Bands",
        description: "Live music competition featuring top college bands.",
        poster: "https://via.placeholder.com/300x400/1e3a8a/ffffff?text=Battle+of+Bands",
        link: "https://drive.google.com/drive/"
    },
    {
        id: 302,
        title: "Open Mic Night",
        description: "Showcase your talent in poetry, comedy, or music.",
        poster: "https://via.placeholder.com/300x400/1e3a8a/ffffff?text=Open+Mic",
        link: "https://drive.google.com/drive/"
    }
];

const workshops = [
    {
        id: 401,
        title: "Design Workshop",
        description: "Learn UI/UX fundamentals from industry experts.",
        poster: "https://via.placeholder.com/300x400/1e3a8a/ffffff?text=Design+Workshop",
        link: "https://drive.google.com/drive/"
    },
    {
        id: 402,
        title: "AI & ML Bootcamp",
        description: "Hands-on session on Artificial Intelligence basics.",
        poster: "https://via.placeholder.com/300x400/1e3a8a/ffffff?text=AI+Bootcamp",
        link: "https://drive.google.com/drive/"
    }
];

const EventSection = ({ title, events }) => (
    <div className="mb-16">
        <div className="flex items-center gap-4 mb-8">
            <div className="h-8 w-1 bg-cyan-400 rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event) => (
                <div
                    key={event.id}
                    className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl flex flex-col"
                >
                    <div className="h-64 overflow-hidden relative">
                        <img
                            src={event.poster}
                            alt={event.title}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                        <p className="text-gray-400 mb-6 text-sm leading-relaxed line-clamp-3">
                            {event.description}
                        </p>

                        <div className="mt-auto">
                            <a
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 bg-white text-[#1e3a8a] font-bold rounded-full hover:bg-opacity-90 transition-colors duration-200 text-sm"
                            >
                                More Details
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

function EventPage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] overflow-x-hidden">
            <div className="h-20"></div>

            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                        All Events
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Discover and participate in a wide range of activities designed to challenge, entertain, and inspire you.
                    </p>
                </div>

                <EventSection title="Technical Events" events={technicalEvents} />
                <EventSection title="Fun Events" events={funEvents} />
                <EventSection title="Cultural Events" events={culturalEvents} />
                <EventSection title="Workshops" events={workshops} />
            </div>

            <Footer />
        </div>
    );
}

export default EventPage;
