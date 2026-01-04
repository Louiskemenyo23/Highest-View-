
import React from 'react';
import Button from './Button';
import { Room, Page } from '../types';

interface RoomsPageProps {
    rooms: Room[];
    setCurrentPage: (page: Page) => void;
}

const RoomCard: React.FC<{ room: Room; setCurrentPage: (page: Page) => void }> = ({ room, setCurrentPage }) => (
    <div className="bg-brand-cream rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <img src={room.imageUrl} alt={`View of ${room.name}`} className="w-full h-64 object-cover" />
        <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-serif text-brand-text mb-2">{room.name}</h3>
            <p className="text-brand-brass-dark font-semibold mb-4">{room.price}</p>
            <p className="text-gray-700 mb-6 min-h-[60px] flex-grow">{room.description}</p>
            <div className="mb-6">
                <h4 className="font-semibold text-brand-text mb-2">Key Amenities:</h4>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm text-gray-700">
                    {room.amenities.map(amenity => (
                        <li key={amenity} className="flex items-center">
                             <svg className="w-4 h-4 text-brand-brass mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            {amenity}
                        </li>
                    ))}
                </ul>
            </div>
            <Button variant="primary" className="w-full mt-auto" onClick={() => setCurrentPage(Page.Contact)}>Book This Room</Button>
        </div>
    </div>
);

const RoomsPage: React.FC<RoomsPageProps> = ({ rooms, setCurrentPage }) => {
    return (
        <div className="fade-in pt-24 pb-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">Our Rooms & Suites</h1>
                    <p className="text-lg text-gray-700">
                        Each of our accommodations is a private haven of comfort and style, designed to provide an unparalleled guest experience.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {rooms.map(room => <RoomCard key={room.name} room={room} setCurrentPage={setCurrentPage} />)}
                </div>
            </div>
        </div>
    );
};

export default RoomsPage;