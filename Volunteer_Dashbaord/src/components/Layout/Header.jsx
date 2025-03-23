import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../VolunteerDashboard/src/context/AuthContext';
import Button from '../UI/Button';

const Header = () => {
    const { currentUser, isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };

    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and Brand */}
                    <div className="flex items-center">
                        <Link to="/" className="text-xl font-bold text-indigo-600">
                            VolunteerHub
                        </Link>
                    </div>

                    {/* Navigation */}
                    {isAuthenticated && (
                        <nav className="hidden md:flex space-x-8">
                            <Link to="/dashboard" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                                Dashboard
                            </Link>
                            <Link to="/projects" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                                Projects
                            </Link>
                            <Link to="/profile" className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium">
                                Profile
                            </Link>
                        </nav>
                    )}

                    {/* Auth Buttons */}
                    <div className="flex items-center">
                        {isAuthenticated ? (
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <img
                                        src={currentUser?.profileImage}
                                        alt="Profile"
                                        className="h-8 w-8 rounded-full object-cover"
                                    />
                                    <span className="ml-2 text-sm font-medium text-gray-700">
                                        {currentUser?.name}
                                    </span>
                                </div>
                                <Button variant="outline" size="sm" onClick={handleLogout}>
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <Button variant="primary" size="sm" onClick={() => navigate('/')}>
                                Sign In
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;