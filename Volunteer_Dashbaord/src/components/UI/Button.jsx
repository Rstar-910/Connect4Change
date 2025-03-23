import React from 'react';

const Button = ({
    children,
    variant = 'default',
    size = 'md',
    className = '',
    ...props
}) => {
    // Variant styles
    const variantClasses = {
        default: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        primary: 'bg-indigo-600 text-white hover:bg-indigo-700',
        secondary: 'bg-indigo-100 hover:bg-indigo-200 text-indigo-700',
        success: 'bg-green-600 text-white hover:bg-green-700',
        danger: 'bg-red-600 text-white hover:bg-red-700',
        warning: 'bg-yellow-500 text-white hover:bg-yellow-600',
        outline: 'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50'
    };

    // Size styles
    const sizeClasses = {
        sm: 'py-1 px-3 text-sm',
        md: 'py-2 px-4 text-sm',
        lg: 'py-2 px-6 text-base'
    };

    const variantClass = variantClasses[variant] || variantClasses.default;
    const sizeClass = sizeClasses[size] || sizeClasses.md;

    return (
        <button
            className={`font-medium rounded-lg transition duration-150 ${variantClass} ${sizeClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;