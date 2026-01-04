
import React, { useState, useEffect } from 'react';
import { Page, Room, Amenity } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import RoomsPage from './components/RoomsPage';
import AmenitiesPage from './components/AmenitiesPage';
import LocationPage from './components/LocationPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import AdminPage from './components/AdminPage';

// Initial Data
const initialRooms: Room[] = [
    { name: 'Deluxe Twin Room', description: 'An elegant twin room offering supreme comfort and stunning views, perfect for friends or colleagues.', price: 'From £250/night', imageUrl: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&q=80&auto=format&fit=crop', amenities: ['Two Twin Beds', 'Rainfall Shower', '4K Smart TV', 'Nespresso Machine', 'High-speed Wi-Fi'] },
    { name: 'Superior Suite', description: 'Spacious and sophisticated, our Superior Suite features a separate living area, providing ample space for work or relaxation.', price: 'From £450/night', imageUrl: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&q=80&auto=format&fit=crop', amenities: ['Separate Living Area', 'Soaking Tub', 'Dual Vanities', 'Walk-in Closet', 'Complimentary Minibar'] },
    { name: 'Family Garden Suite', description: 'Ideal for families, this suite offers two separate sleeping areas and direct access to our private gardens.', price: 'From £550/night', imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&h=600&q=80&auto=format&fit=crop', amenities: ['Two Bedrooms', 'Garden Access', 'Kids Welcome Pack', 'Connecting Room Option', 'Kitchenette'] },
    { name: 'The Highest View Penthouse', description: 'The pinnacle of luxury. This expansive penthouse offers panoramic 360-degree views, a private terrace, and bespoke services.', price: 'Price on request', imageUrl: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=800&h=600&q=80&auto=format&fit=crop', amenities: ['Private Terrace & Jacuzzi', 'Full Kitchen & Dining', 'Personal Butler Service', 'In-suite Cinema', 'Designer Furnishings'] }
];

const initialAmenities: Amenity[] = [
    { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Restaurant & Bar", description: "Savor exquisite culinary creations and artisanal cocktails at our award-winning restaurant with panoramic views.", imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&q=80&auto=format=fit=crop" },
    { icon: "M16 8v8m-3-5v3m-3-1v1m-4-3v5m5-10l-2-2-2 2m4 0c-1.333-1.333-2.667-2-4-2S8 4.667 6 6m12 0c-1.333-1.333-2.667-2-4-2s-2.667.667-4 2", title: "Spa & Wellness", description: "Rejuvenate your body and soul with our extensive menu of treatments, sauna, and infinity pool.", imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&q=80&auto=format=fit=crop" },
    { icon: "M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M15 12a3 3 0 11-6 0 3 3 0 016 0z", title: "Free High-Speed Wi-Fi", description: "Stay connected throughout the hotel with our complimentary, ultra-fast wireless internet access.", imageUrl: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?w=800&h=600&q=80&auto=format=fit=crop" },
    { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "Conference & Meeting Rooms", description: "Host your events in our state-of-the-art facilities, equipped with the latest technology and tailored catering.", imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&q=80&auto=format=fit=crop" }
];

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<Page>(Page.Home);
    const [isVisible, setIsVisible] = useState(false);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);

    // Centralized content state
    const [homePageImages, setHomePageImages] = useState({
        hero: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1920&auto=format&fit=crop"
    });
    const [aboutPageImages, setAboutPageImages] = useState({
        hero: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&h=800&q=80&auto=format&fit=crop",
        history: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&h=600&q=80&auto=format&fit=crop",
        estate: "https://images.unsplash.com/photo-1600121714173-76a8d2b33104?w=800&h=600&q=80&auto=format&fit=crop",
    });
    const [rooms, setRooms] = useState<Room[]>(initialRooms);
    const [amenities, setAmenities] = useState<Amenity[]>(initialAmenities);


    useEffect(() => {
        const token = sessionStorage.getItem('authToken');
        if (token === 'dummy-secret-admin-token') setIsAdmin(true);
    }, []);

    useEffect(() => {
        setIsVisible(false);
        const timer = setTimeout(() => {
            window.scrollTo(0, 0);
            setIsVisible(true);
        }, 300);
        return () => clearTimeout(timer);
    }, [currentPage]);

    const handleLogin = () => {
        sessionStorage.setItem('authToken', 'dummy-secret-admin-token');
        setIsAdmin(true);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('authToken');
        setIsAdmin(false);
        setCurrentPage(Page.Home);
    };

    const renderPage = () => {
        switch (currentPage) {
            case Page.Home:
                return <HomePage setCurrentPage={setCurrentPage} images={homePageImages} />;
            case Page.Rooms:
                return <RoomsPage rooms={rooms} setCurrentPage={setCurrentPage} />;
            case Page.Amenities:
                return <AmenitiesPage amenities={amenities} />;
            case Page.Location:
                return <LocationPage />;
            case Page.About:
                return <AboutPage images={aboutPageImages} />;
            case Page.Contact:
                return <ContactPage />;
            case Page.Admin:
                return <AdminPage 
                            isAdmin={isAdmin}
                            login={handleLogin}
                            content={{
                                home: { state: homePageImages, setter: setHomePageImages },
                                about: { state: aboutPageImages, setter: setAboutPageImages },
                                rooms: { state: rooms, setter: setRooms },
                                amenities: { state: amenities, setter: setAmenities },
                            }}
                        />;
            default:
                return <HomePage setCurrentPage={setCurrentPage} images={homePageImages} />;
        }
    };

    return (
        <div className={`relative flex flex-col min-h-screen ${currentPage !== Page.Home ? 'bg-brand-greige' : ''}`}>
            <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isAdmin={isAdmin} logout={handleLogout} />
            <main className={`flex-grow transition-opacity duration-500 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                {renderPage()}
            </main>
            <Footer setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default App;