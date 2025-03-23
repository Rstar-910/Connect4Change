import React from 'react';

const ProgressBar = ({ value, color = 'indigo', height = 2, className = '' }) => {
    // Color variations
    const colorClasses = {
        indigo: 'bg-indigo-600',
        green: 'bg-green-600',
        red: 'bg-red-600',
        yellow: 'bg-yellow-500',
        blue: 'bg-blue-600',
        purple: 'bg-purple-600',
        gray: 'bg-gray-600'
    };

    const colorClass = colorClasses[color] || colorClasses.indigo;

    return (
        <div className={`w-full bg-gray-200 rounded-full h-${height} ${className}`}>
            <div
                className={`${colorClass} h-${height} rounded-full`}
                style={{ width: `${value}%` }}
            ></div>
        </div>
    );
};

export default ProgressBar;