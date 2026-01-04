
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface HeaderProps {
    currentPage: Page;
    setCurrentPage: (page: Page) => void;
    isAdmin: boolean;
    logout: () => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage, isAdmin, logout }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = Object.values(Page).filter(p => p !== Page.Admin);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const NavLink: React.FC<{ page: Page, textColor: string, hoverColor: string }> = ({ page, textColor, hoverColor }) => (
        <a
            href="#"
            onClick={(e) => {
                e.preventDefault();
                setCurrentPage(page);
                setIsMenuOpen(false);
            }}
            className={`text-sm font-medium transition-colors duration-300 ${
                currentPage === page 
                ? 'text-brand-brass' 
                : `${textColor} ${hoverColor}`
            }`}
        >
            {page}
        </a>
    );
    
    const LogoutButton: React.FC<{className?: string}> = ({ className }) => (
        <button
            onClick={() => {
                logout();
                setIsMenuOpen(false);
            }}
            className={`text-sm font-medium transition-colors duration-300 ${className}`}
        >
            Logout
        </button>
    );

    const isHomePage = currentPage === Page.Home;
    const headerTextColor = (isScrolled || isHomePage) ? 'text-white' : 'text-brand-text';
    const navLinkHoverColor = (isScrolled || isHomePage) ? 'hover:text-brand-brass/80' : 'hover:text-brand-brass';

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-brand-green shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div 
                    className={`text-2xl font-bold font-serif cursor-pointer transition-colors duration-300 ${headerTextColor}`}
                    onClick={() => setCurrentPage(Page.Home)}
                >
                    Highest View Hotel
                </div>
                <nav className="hidden lg:flex items-center space-x-8">
                    {navLinks.map(page => <NavLink 
                        key={page} 
                        page={page} 
                        textColor={headerTextColor} 
                        hoverColor={navLinkHoverColor} 
                    />)}
                    {isAdmin && <LogoutButton className={`${headerTextColor} ${navLinkHoverColor}`} />}
                </nav>
                <div className="lg:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${headerTextColor} focus:outline-none transition-colors duration-300`}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden bg-brand-green/95 backdrop-blur-sm absolute top-full left-0 w-full">
                    <nav className="flex flex-col items-center space-y-4 py-4">
                         {navLinks.map(page => <NavLink 
                            key={page} 
                            page={page} 
                            textColor="text-white" 
                            hoverColor="hover:text-brand-brass/80" 
                        />)}
                        {isAdmin && <LogoutButton className="text-white hover:text-brand-brass/80" />}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;