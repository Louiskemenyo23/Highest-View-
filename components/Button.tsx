
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', className = '', ...props }) => {
    const baseStyles = "px-8 py-3 text-sm font-semibold rounded-sm shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2";
    
    const variantStyles = {
        primary: "bg-brand-brass text-white hover:bg-brand-brass-dark focus:ring-brand-brass",
        secondary: "bg-transparent text-white border-2 border-white hover:bg-white hover:text-brand-green focus:ring-white"
    };

    return (
        <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Button;
