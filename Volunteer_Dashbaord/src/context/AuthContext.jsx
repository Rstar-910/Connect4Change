import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Custom hook to use the auth context
export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Mock login function
    const login = (email, password) => {
        // For demo purposes, accept any credentials
        const userData = {
            id: 1,
            name: "Alex Rivera",
            email: email,
            role: "Active Volunteer",
            profileImage: "/images/profiles/alex.jpg"
        };

        setCurrentUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem('user', JSON.stringify(userData));
        return Promise.resolve(userData);
    };

    // Logout function
    const logout = () => {
        setCurrentUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem('user');
        return Promise.resolve();
    };

    // Check if user is already logged in
    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            setCurrentUser(JSON.parse(user));
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const value = {
        currentUser,
        isAuthenticated,
        login,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};