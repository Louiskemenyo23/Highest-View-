
import React from 'react';
import { Amenity } from '../types';

interface AmenitiesPageProps {
    amenities: Amenity[];
}

const AmenityCard: React.FC<{ amenity: Amenity }> = ({ amenity }) => (
    <div className="bg-brand-cream rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <img src={amenity.imageUrl} alt={amenity.title} className="w-full h-56 object-cover" />
        <div className="p-8 flex flex-col flex-grow">
            <div className="flex items-center mb-4">
                 <svg className="w-8 h-8 text-brand-brass mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={amenity.icon}></path>
                </svg>
                <h3 className="text-xl font-semibold font-serif text-brand-text">{amenity.title}</h3>
            </div>
            <p className="text-gray-700 text-sm flex-grow">{amenity.description}</p>
        </div>
    </div>
);

const AmenitiesPage: React.FC<AmenitiesPageProps> = ({ amenities }) => {
    return (
        <div className="fade-in pt-24 pb-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">World-Class Amenities</h1>
                    <p className="text-lg text-gray-700">
                        We provide an extensive range of services and facilities to ensure your stay is comfortable, productive, and truly memorable.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {amenities.map(item => <AmenityCard key={item.title} amenity={item} />)}
                </div>
            </div>
        </div>
    );
};

export default AmenitiesPage;
