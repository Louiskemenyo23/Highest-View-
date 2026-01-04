
import React from 'react';
import { Page } from '../types';
import Button from './Button';

interface HomePageProps {
    setCurrentPage: (page: Page) => void;
    images: {
        hero: string;
    }
}

const HighlightIcon: React.FC<{ d: string }> = ({ d }) => (
    <svg className="w-12 h-12 text-brand-brass mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={d}></path>
    </svg>
);

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, images }) => {
    return (
        <div className="fade-in">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-white text-center">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <img src={images.hero} alt="Luxurious hotel room with a balcony overlooking a serene lake and mountains in the UK" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="relative z-10 p-6">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mb-4 leading-tight shadow-text">
                        Experience Luxury at the Highest View in the UK
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 shadow-text">
                        Indulge in unparalleled comfort, breathtaking vistas, and world-class service.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button variant="primary" onClick={() => setCurrentPage(Page.Contact)}>Book Now</Button>
                        <Button variant="secondary" onClick={() => setCurrentPage(Page.Rooms)}>View Rooms</Button>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-20 bg-brand-cream">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-6">A Sanctuary of Elegance and Serenity</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Nestled in the heart of the UK's most picturesque landscapes, Highest View Hotel offers an escape from the ordinary. Our commitment to excellence is evident in every detail, from our meticulously designed rooms to our bespoke guest services. We invite you to discover a new standard of luxury.
                    </p>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="py-20 bg-brand-greige">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        <div className="flex flex-col items-center">
                            <HighlightIcon d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v4m0 0h-4m4 0l-5-5" />
                            <h3 className="text-xl font-semibold text-brand-text mb-2">Panoramic Views</h3>
                            <p className="text-gray-600 text-sm">Wake up to breathtaking vistas of the surrounding countryside and iconic landmarks.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <HighlightIcon d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <HighlightIcon d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            <h3 className="text-xl font-semibold text-brand-text mb-2">Prime UK Location</h3>
                            <p className="text-gray-600 text-sm">Perfectly situated for exploring both natural wonders and cultural attractions.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <HighlightIcon d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            <h3 className="text-xl font-semibold text-brand-text mb-2">Luxury Rooms</h3>
                            <p className="text-gray-600 text-sm">Each room and suite is a masterpiece of design, comfort, and modern amenities.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <HighlightIcon d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            <h3 className="text-xl font-semibold text-brand-text mb-2">Exceptional Service</h3>
                            <p className="text-gray-600 text-sm">Our dedicated team is available 24/7 to ensure your stay is nothing short of perfect.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
