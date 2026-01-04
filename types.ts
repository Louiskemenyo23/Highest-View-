
export enum Page {
    Home = 'Home',
    Rooms = 'Rooms & Suites',
    Amenities = 'Amenities & Services',
    Location = 'Location & Attractions',
    About = 'About Us',
    Contact = 'Contact & Booking',
    Admin = 'Admin'
}

export interface Room {
    name: string;
    description: string;
    price: string;
    imageUrl: string;
    amenities: string[];
}

export interface Amenity {
    icon: string;
    title: string;
    description: string;
    imageUrl: string;
}