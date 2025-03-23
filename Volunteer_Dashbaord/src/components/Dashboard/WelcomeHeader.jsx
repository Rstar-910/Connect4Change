import React from 'react';

const WelcomeHeader = ({ userData }) => {
    return (
        <div className="mb-8">
            <div className="flex items-center gap-4">
                <img
                    src={userData.profileImage}
                    alt="Profile"
                    className="h-16 w-16 rounded-full border-4 border-white shadow-md object-cover"
                />
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">Welcome back, {userData.name}!</h1>
                    <p className="text-gray-600">{userData.role}</p>
                </div>
            </div>
        </div>
    );
};

export default WelcomeHeader;