
import React from 'react';

interface AboutPageProps {
    images: {
        hero: string;
        history: string;
        estate: string;
    }
}

const ValueCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="flex flex-col items-center text-center p-6">
        <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-cream mb-4 shadow-inner">
            <svg className="w-8 h-8 text-brand-brass" fill="none" stroke="currentColor" viewBox="0 L 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={icon}></path>
            </svg>
        </div>
        <h3 className="text-xl font-semibold font-serif text-brand-text mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{children}</p>
    </div>
);

const TimelineItem: React.FC<{ year: string; title: string; children: React.ReactNode }> = ({ year, title, children }) => (
    <div className="relative pl-8 sm:pl-12 py-4 group">
        <div className="absolute top-5 left-0 w-px h-full bg-brand-brass/30"></div>
        <div className="absolute top-5 left-[-4.5px] w-3 h-3 rounded-full bg-brand-brass group-hover:scale-125 transition-transform duration-300"></div>
        <p className="text-sm font-semibold text-brand-brass-dark mb-1">{year}</p>
        <h4 className="font-serif text-xl text-brand-text mb-2">{title}</h4>
        <p className="text-gray-600 text-sm">{children}</p>
    </div>
);


const AboutPage: React.FC<AboutPageProps> = ({ images }) => {
    return (
        <div className="fade-in pt-24 pb-20 bg-transparent">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* --- Hero Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 md:mb-32">
                    <div className="order-2 lg:order-1">
                        <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-6">A Legacy of Unforgettable Stays</h1>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Born from a vision to blend luxury hospitality with the sublime beauty of the UK landscape, Highest View Hotel is more than a destination—it's an experience. We are founded on the principles of exceptional service and timeless elegance, creating a sanctuary designed to inspire and rejuvenate.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            From the meticulously curated design of our interiors to the panoramic vistas from every window, each detail is thoughtfully crafted to ensure your stay is nothing short of extraordinary. This is our promise.
                        </p>
                    </div>
                     <div className="order-1 lg:order-2">
                        <img 
                            src={images.hero} 
                            alt="The majestic exterior of Highest View Hotel, a grand UK manor house, illuminated at dusk" 
                            className="rounded-lg shadow-2xl object-cover h-80 sm:h-96 md:h-[500px] w-full"
                        />
                    </div>
                </div>

                {/* --- Philosophy Section --- */}
                <div className="text-center py-16 md:py-20 bg-brand-greige/60 rounded-lg">
                     <div className="max-w-3xl mx-auto px-6">
                        <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-4">Our Guiding Philosophy</h2>
                        <p className="text-lg text-gray-700 mb-12">
                            To be the most sought-after luxury hotel in the United Kingdom, guided by our core values of integrity, excellence, and a deep respect for our guests and the environment.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
                        <ValueCard icon="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" title="Heartfelt Hospitality">
                            Personalized service that anticipates your needs and exceeds expectations.
                        </ValueCard>
                        <ValueCard icon="M5 13l4 4L19 7" title="Timeless Elegance">
                            An atmosphere of sophisticated comfort where classic design meets modern luxury.
                        </ValueCard>
                         <ValueCard icon="M14.12 10.47L12 12.59l-2.12-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" title="Sustainable Luxury">
                            A commitment to protecting our beautiful surroundings for generations to come.
                        </ValueCard>
                    </div>
                </div>

                {/* --- History Timeline Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-20 md:mt-32">
                     <div className="max-w-md mx-auto lg:max-w-none">
                        <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-8">Our History</h2>
                        <div className="relative">
                            <TimelineItem year="1923" title="Foundation Laid">
                                The original manor house was constructed, serving as a private residence for nobility.
                            </TimelineItem>
                            <TimelineItem year="1985" title="A New Vision">
                                Acquired and lovingly restored, with the vision of creating the UK's premier luxury hotel.
                            </TimelineItem>
                            <TimelineItem year="1990" title="Grand Opening">
                                Highest View Hotel officially opens its doors, setting a new standard for luxury hospitality.
                            </TimelineItem>
                            <TimelineItem year="Today" title="Continued Excellence">
                                Decades later, we continue our legacy of providing unparalleled service and unforgettable experiences.
                            </TimelineItem>
                        </div>
                    </div>
                     <div className="row-start-1 lg:col-start-2">
                         <img 
                            src={images.history}
                            alt="An elegant and classic hotel lounge area with bookshelves, conveying a sense of history" 
                            className="rounded-lg shadow-2xl object-cover h-80 sm:h-96 md:h-[500px] w-full"
                        />
                    </div>
                </div>

                {/* --- Estate Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mt-20 md:mt-32">
                    <div className="order-2 lg:order-2">
                         <img 
                            src={images.estate}
                            alt="A sprawling, perfectly manicured lawn and garden path on the hotel estate" 
                            className="rounded-lg shadow-2xl object-cover h-80 sm:h-96 md:h-[500px] w-full"
                        />
                    </div>
                    <div className="order-1 lg:order-1">
                        <h2 className="text-3xl md:text-4xl font-serif text-brand-text mb-6">An Estate of Natural Beauty</h2>
                        <p className="text-gray-700 leading-relaxed">
                           Our hotel is nestled within acres of pristine private parkland. We invite you to explore the manicured gardens, tranquil walking paths, and secluded spots that make our estate a true escape from the everyday. It is the perfect backdrop for a memorable stay, a romantic wedding, or an inspiring corporate retreat.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutPage;