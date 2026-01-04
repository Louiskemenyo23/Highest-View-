
import React from 'react';
import { Page } from '../types';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
    const navLinks = [Page.About, Page.Rooms, Page.Amenities, Page.Contact];

    const QuickLink: React.FC<{ page: Page }> = ({ page }) => (
        <li>
            <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); setCurrentPage(page); }} 
                className="hover:text-brand-brass transition-colors duration-300"
            >
                {page}
            </a>
        </li>
    );

    return (
        <footer className="bg-brand-green text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-xl font-serif font-bold mb-4">Highest View Hotel</h3>
                        <p className="text-gray-300 text-sm">
                            Discover a sanctuary of luxury and tranquility, where every stay is an unforgettable experience amidst the stunning landscapes of the United Kingdom.
                        </p>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                           {navLinks.map(page => <QuickLink key={page} page={page} />)}
                        </ul>
                    </div>
                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>G60 5AF Bowling, Glasgow, UK</li>
                            <li>+44 7934 198548</li>
                            <li>reservations@highestviewhotel.co.uk</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Highest View Hotel. All Rights Reserved.</p>
                     <a 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); setCurrentPage(Page.Admin); }}
                        className="mt-2 inline-block hover:text-brand-brass transition-colors duration-300"
                    >
                        Admin
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;