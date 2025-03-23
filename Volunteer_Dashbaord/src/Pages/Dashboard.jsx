import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

// Dashboard components
import WelcomeHeader from '../components/Dashboard/WelcomeHeader';
import ActiveProjects from '../components/Dashboard/ActiveProjects';
import UpcomingEvents from '../components/Dashboard/UpcomingEvents';
import ImpactStats from '../components/Dashboard/ImpactStats';
import QuickActions from '../components/Dashboard/QuickActions';

// Data
import { userData } from '../data/userData';
import { projectsData } from '../data/projectsData';
import { eventsData } from '../data/eventsData';

const Dashboard = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    // Redirect to login if not authenticated
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated) {
        return null; // Don't render anything while redirecting
    }

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Welcome Header */}
                <WelcomeHeader userData={userData} />

                {/* Dashboard Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                    {/* Main Column - Projects and Events */}
                    <div className="lg:col-span-2 space-y-6">
                        <ActiveProjects projects={projectsData} />
                        <UpcomingEvents events={eventsData} />
                    </div>

                    {/* Side Column - Stats and Actions */}
                    <div className="space-y-6">
                        <ImpactStats stats={userData} />
                        <QuickActions />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;