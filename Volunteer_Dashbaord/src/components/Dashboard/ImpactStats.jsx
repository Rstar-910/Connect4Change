import React from 'react';
import Card from '../UI/Card';

const ImpactStats = ({ stats }) => {
    return (
        <Card>
            <Card.Header>
                <h2 className="text-lg font-semibold text-gray-800">Your Impact</h2>
            </Card.Header>
            <Card.Body>
                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-indigo-50 rounded-lg">
                        <span className="block text-2xl font-bold text-indigo-700">{stats.hoursContributed}</span>
                        <span className="text-sm text-gray-600">Hours</span>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                        <span className="block text-2xl font-bold text-green-700">{stats.projectsJoined}</span>
                        <span className="text-sm text-gray-600">Projects</span>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <span className="block text-2xl font-bold text-yellow-700">{stats.upcomingEvents}</span>
                        <span className="text-sm text-gray-600">Events</span>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <span className="block text-2xl font-bold text-purple-700">{stats.impactPoints}</span>
                        <span className="text-sm text-gray-600">Impact Points</span>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default ImpactStats;