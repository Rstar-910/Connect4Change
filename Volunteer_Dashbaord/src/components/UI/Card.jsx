import React from 'react';

const Card = ({ children, className = '' }) => {
    return (
        <div className={`bg-white rounded-xl shadow-sm overflow-hidden ${className}`}>
            {children}
        </div>
    );
};

// Card Header Component
const Header = ({ children, className = '' }) => {
    return (
        <div className={`px-6 py-5 border-b border-gray-200 ${className}`}>
            {children}
        </div>
    );
};

// Card Body Component
const Body = ({ children, className = '' }) => {
    return (
        <div className={`p-6 ${className}`}>
            {children}
        </div>
    );
};

// Card Footer Component
const Footer = ({ children, className = '' }) => {
    return (
        <div className={`bg-gray-50 px-6 py-3 border-t border-gray-200 ${className}`}>
            {children}
        </div>
    );
};

// Add subcomponents to Card
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;