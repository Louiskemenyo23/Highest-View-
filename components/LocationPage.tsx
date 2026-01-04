
import React from 'react';

const AttractionItem: React.FC<{ name: string; distance: string; description: string }> = ({ name, distance, description }) => (
    <div className="border-l-4 border-brand-brass pl-6 py-2">
        <h3 className="text-xl font-semibold text-brand-text">{name}</h3>
        <p className="text-brand-brass-dark font-semibold mb-2">{distance}</p>
        <p className="text-gray-700">{description}</p>
    </div>
);

const LocationPage: React.FC = () => {
    return (
        <div className="fade-in pt-24 pb-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">Our Prestigious Location</h1>
                    <p className="text-lg text-gray-700">
                        Perfectly positioned to offer both serene seclusion and convenient access to the UK's finest attractions and transport links.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Map */}
                    <div className="h-96 lg:h-full rounded-lg shadow-2xl overflow-hidden">
                         <iframe
                            src="https://maps.google.com/maps?q=G60%205AF&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            title="Highest View Hotel Location"
                        ></iframe>
                    </div>

                    {/* Attractions & Transport */}
                    <div>
                        <div className="mb-10">
                            <h2 className="text-3xl font-serif text-brand-text mb-6">Nearby Attractions</h2>
                            <div className="space-y-6">
                                <AttractionItem name="Scenic National Park" distance="5 miles" description="Explore miles of hiking trails, stunning lakes, and diverse wildlife." />
                                <AttractionItem name="Historic Castle" distance="12 miles" description="Step back in time at this beautifully preserved medieval fortress." />
                                <AttractionItem name="Charming Local Village" distance="2 miles" description="Discover quaint shops, traditional pubs, and local craftsmanship." />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-3xl font-serif text-brand-text mb-6">Transport Accessibility</h2>
                             <div className="space-y-6">
                                <AttractionItem name="Glasgow International Airport" distance="20 miles / 30-min drive" description="Easily accessible for our international and domestic guests." />
                                <AttractionItem name="Central Train Station" distance="8 miles / 15-min drive" description="Direct connections to major cities across the United Kingdom." />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LocationPage;