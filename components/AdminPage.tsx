
import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Room, Amenity } from '../types';

interface AdminPageProps {
    isAdmin: boolean;
    login: () => void;
    content: {
        home: { state: { hero: string }, setter: React.Dispatch<React.SetStateAction<{ hero: string }>> };
        about: { state: { hero: string; history: string; estate: string; }, setter: React.Dispatch<React.SetStateAction<{ hero: string; history: string; estate: string; }>> };
        rooms: { state: Room[], setter: React.Dispatch<React.SetStateAction<Room[]>> };
        amenities: { state: Amenity[], setter: React.Dispatch<React.SetStateAction<Amenity[]>> };
    }
}

type AboutImageKey = 'hero' | 'history' | 'estate';
type HomeImageKey = 'hero';

const AdminPage: React.FC<AdminPageProps> = ({ isAdmin, login, content }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [confirmationMessage, setConfirmationMessage] = useState('');
    const [isConfirmationVisible, setIsConfirmationVisible] = useState(false);

    useEffect(() => {
        if (confirmationMessage) {
            setIsConfirmationVisible(true);
            const visibilityTimer = setTimeout(() => {
                setIsConfirmationVisible(false);
                // Reset message after animation out to allow re-triggering with the same message
                const resetTimer = setTimeout(() => setConfirmationMessage(''), 500);
                return () => clearTimeout(resetTimer);
            }, 3000); // Message visible for 3 seconds
            return () => clearTimeout(visibilityTimer);
        }
    }, [confirmationMessage]);

    const handleLoginAttempt = (e: React.FormEvent) => {
        e.preventDefault();
        const adminUsername = process.env.ADMIN_USERNAME || 'admin';
        const adminPassword = process.env.ADMIN_PASSWORD || 'password123';

        if (username === adminUsername && password === adminPassword) {
            login();
            setError('');
        } else {
            setError('Invalid username or password.');
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: any, key: AboutImageKey | HomeImageKey) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string;
            setter((prevState: any) => ({
                ...prevState,
                [key]: result,
            }));
            setConfirmationMessage('Image successfully updated!');
        };
        reader.readAsDataURL(file);
    };
    
    const handleArrayFileChange = (e: React.ChangeEvent<HTMLInputElement>, setter: any, index: number) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            const result = reader.result as string;
            setter((prevArray: any[]) => {
                const newArray = [...prevArray];
                newArray[index] = { ...newArray[index], imageUrl: result };
                return newArray;
            });
            setConfirmationMessage('Image successfully updated!');
        };
        reader.readAsDataURL(file);
    };

    if (!isAdmin) {
        return (
            <div className="fade-in pt-32 pb-20 bg-transparent flex items-center justify-center">
                <div className="w-full max-w-md">
                    <form onSubmit={handleLoginAttempt} className="bg-white shadow-2xl rounded-lg px-8 pt-10 pb-8 mb-4">
                        <h1 className="text-3xl font-serif text-brand-text mb-6 text-center">Admin Login</h1>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-brand-brass"
                                id="username"
                                type="text"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-brand-brass"
                                id="password"
                                type="password"
                                placeholder="******************"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                             {error && <p className="text-red-500 text-xs italic">{error}</p>}
                        </div>
                        <div className="flex items-center justify-between">
                            <Button type="submit" variant="primary" className="w-full">
                                Sign In
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    const ImageManagerCard: React.FC<{ title: string; imageKey: any; src: string; setter: any; }> = ({ title, imageKey, src, setter }) => (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold font-serif text-brand-text mb-4">{title}</h3>
            <img src={src} alt={`${title} preview`} className="w-full h-48 object-cover rounded-md mb-4" />
            <label htmlFor={imageKey} className="w-full text-center cursor-pointer bg-brand-green text-white px-4 py-2 text-sm font-semibold rounded-sm shadow-md hover:bg-brand-green/90 transition-colors duration-300 block">
                Change Image
            </label>
            <input type="file" id={imageKey} accept="image/*" className="hidden" onChange={(e) => handleFileChange(e, setter, imageKey)} />
        </div>
    );

    const ArrayImageManagerCard: React.FC<{ title: string; src: string; index: number; setter: any; }> = ({ title, src, index, setter }) => (
        <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold font-serif text-brand-text mb-4 truncate">{title}</h3>
            <img src={src} alt={`${title} preview`} className="w-full h-48 object-cover rounded-md mb-4" />
            <label htmlFor={`${title}-${index}`} className="w-full text-center cursor-pointer bg-brand-green text-white px-4 py-2 text-sm font-semibold rounded-sm shadow-md hover:bg-brand-green/90 transition-colors duration-300 block">
                Change Image
            </label>
            <input type="file" id={`${title}-${index}`} accept="image/*" className="hidden" onChange={(e) => handleArrayFileChange(e, setter, index)} />
        </div>
    );

    const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
         <div className="mb-16">
            <h2 className="text-3xl font-serif text-brand-text mb-8 pb-3 border-b-2 border-brand-brass/40">{title}</h2>
            {children}
        </div>
    );

    return (
        <div className="fade-in pt-24 pb-20 bg-transparent">
             {/* Confirmation Dialog */}
            <div
                aria-live="polite"
                className={`fixed top-28 right-8 bg-green-600 text-white px-6 py-3 rounded-lg shadow-2xl z-50 transition-all duration-500 ease-in-out transform ${
                    isConfirmationVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
            >
                <div className="flex items-center">
                    <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{confirmationMessage}</span>
                </div>
            </div>

            <div className="container mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">Admin Dashboard</h1>
                    <p className="text-lg text-gray-700">
                        Manage website content here. Changes will be reflected on the live site immediately.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <Section title="Home Page">
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             <ImageManagerCard title="Hero Background" imageKey="hero" src={content.home.state.hero} setter={content.home.setter} />
                        </div>
                    </Section>

                    <Section title="'About Us' Page Images">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ImageManagerCard title="Main Welcome Image" imageKey="hero" src={content.about.state.hero} setter={content.about.setter} />
                            <ImageManagerCard title="Our History Image" imageKey="history" src={content.about.state.history} setter={content.about.setter} />
                            <ImageManagerCard title="Estate Image" imageKey="estate" src={content.about.state.estate} setter={content.about.setter} />
                        </div>
                    </Section>

                    <Section title="'Rooms & Suites' Page Images">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                           {content.rooms.state.map((room, index) => (
                               <ArrayImageManagerCard key={index} title={room.name} src={room.imageUrl} index={index} setter={content.rooms.setter} />
                           ))}
                        </div>
                    </Section>

                    <Section title="'Amenities' Page Images">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {content.amenities.state.map((amenity, index) => (
                               <ArrayImageManagerCard key={index} title={amenity.title} src={amenity.imageUrl} index={index} setter={content.amenities.setter} />
                           ))}
                        </div>
                    </Section>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;