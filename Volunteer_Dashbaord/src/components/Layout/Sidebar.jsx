import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();

    // Navigation items
    const navItems = [
        { name: 'Dashboard', path: '/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
        { name: 'Projects', path: '/projects', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
        { name: 'Calendar', path: '/calendar', icon: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
        { name: 'Messages', path: '/messages', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
        { name: 'Team', path: '/team', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' },
        { name: 'Profile', path: '/profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' }
    ];

    return (
        <aside className="bg-indigo-900 text-white w-64 min-h-screen hidden lg:block">
            <div className="p-6">
                <h2 className="text-2xl font-bold">VolunteerHub</h2>
                <p className="text-indigo-200 text-sm">Make an impact together</p>
            </div>

            <nav className="mt-6">
                <ul>
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    className={`flex items-center px-6 py-3 text-sm ${isActive
                                            ? 'bg-indigo-800 border-l-4 border-white'
                                            : 'hover:bg-indigo-800 border-l-4 border-transparent'
                                        }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 mr-3"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d={item.icon}
                                        />
                                    </svg>
                                    {item.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div className="absolute bottom-0 w-64 bg-indigo-800 p-4">
                <div className="flex items-center">
                    <div className="bg-indigo-500 rounded-full h-2 w-2 mr-2"></div>
                    <span className="text-sm">Help Center</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;