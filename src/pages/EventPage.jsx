import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const technicalEvents = [
    {
        id: 101,
        title: "Eco Hackathon",
        description: "24-hour hackathon for sustainable tech solutions.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Eco+Hackathon",
        link: "https://drive.google.com/drive/"
    },
    {
        id: 102,
        title: "Code Wars",
        description: "Competitive programming contest for algorithm wizards.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Code+Wars",
        link: "https://drive.google.com/drive/"
    }
];

const funEvents = [
    {
        id: 201,
        title: "Gaming Championship",
        description: "Battle it out in this year's biggest e-sports tournament.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Gaming+Champ",
        link: "https://drive.google.com/drive/"
    },
    {
        id: 202,
        title: "Scavenger Hunt",
        description: "Solve riddles and find clues across the campus.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Scavenger+Hunt",
        link: "https://drive.google.com/drive/"
    }
];

const culturalEvents = [
    {
        id: 301,
        title: "Battle of Bands",
        description: "Live music competition featuring top college bands.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Battle+of+Bands",
        link: "https://drive.google.com/drive/"
    },
    {
        id: 302,
        title: "Open Mic Night",
        description: "Showcase your talent in poetry, comedy, or music.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Open+Mic",
        link: "https://drive.google.com/drive/"
    }
];

const workshops = [
    {
        id: 401,
        title: "Design Workshop",
        description: "Learn UI/UX fundamentals from industry experts.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=Design+Workshop",
        link: "https://drive.google.com/drive/"
    },
    {
        id: 402,
        title: "AI & ML Bootcamp",
        description: "Hands-on session on Artificial Intelligence basics.",
        poster: "https://via.placeholder.com/300x400/1e409c/ffffff?text=AI+Bootcamp",
        link: "https://drive.google.com/drive/"
    }
];

const EventSection = ({ title, events }) => (
    <div className="mb-16">
        <div className="flex items-center gap-4 mb-8">
            <div className="h-8 w-1 bg-white rounded-full"></div>
            <h3 className="text-2xl md:text-3xl font-bold text-white">{title}</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event) => (
                <div
                    key={event.id}
                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl flex flex-col"
                >
                    <div className="h-64 overflow-hidden relative">
                        <img
                            src={event.poster}
                            alt={event.title}
                            className="w-full h-full object-cover relative z-0"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow relative z-20">
                        <h4 className="text-xl font-bold text-white mb-2">{event.title}</h4>
                        <p className="text-white/80 mb-6 text-sm leading-relaxed line-clamp-3">
                            {event.description}
                        </p>
                        <div className="mt-auto">
                            <a
                                href={event.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-6 py-2 bg-white text-[#1e409c] font-bold rounded-full hover:bg-opacity-90 transition-colors duration-200 text-sm"
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
        <div className="w-full min-h-screen bg-[#1e409c] overflow-x-hidden">
            {/* Navbar is typically global, but ensuring spacing if it's fixed */}
            <div className="h-20"></div>

            <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 relative z-10">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">All Events</h1>
                    <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto">
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
