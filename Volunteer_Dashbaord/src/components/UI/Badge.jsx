import React from 'react';

const Badge = ({ children, color = 'default', className = '' }) => {
    // Color variations
    const colorClasses = {
        default: 'bg-gray-100 text-gray-800',
        primary: 'bg-indigo-100 text-indigo-800',
        secondary: 'bg-gray-100 text-gray-800',
        success: 'bg-green-100 text-green-800',
        danger: 'bg-red-100 text-red-800',
        warning: 'bg-yellow-100 text-yellow-800',
        info: 'bg-blue-100 text-blue-800',
        purple: 'bg-purple-100 text-purple-800'
    };

    const colorClass = colorClasses[color] || colorClasses.default;

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass} ${className}`}>
            {children}
        </span>
    );
};

export default Badge;