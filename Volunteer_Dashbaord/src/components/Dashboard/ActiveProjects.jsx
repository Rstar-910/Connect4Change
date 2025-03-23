// ActiveProjects.jsx
import React from 'react';
import Card from '../UI/Card';
import Badge from '../UI/Badge';
import ProgressBar from '../UI/ProgressBar';

const ActiveProjects = ({ projects }) => {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'success';
            case 'Starting Soon': return 'info';
            case 'Planning': return 'purple';
            case 'Completed': return 'secondary';
            default: return 'secondary';
        }
    };

    return (
        <Card className="shadow-lg bg-white rounded-xl overflow-hidden">
            <Card.Header>
                <h2 className="text-lg font-semibold text-gray-800">My Active Projects</h2>
            </Card.Header>
            <div className="divide-y divide-gray-200">
                {projects.map(project => (
                    <div key={project.id} className="p-6 hover:bg-gray-100 transition duration-150">
                        <div className="flex justify-between mb-2">
                            <h3 className="font-medium text-gray-900">{project.title}</h3>
                            <Badge color={getStatusColor(project.status)}>{project.status}</Badge>
                        </div>
                        <div className="text-sm text-gray-600 mb-3">
                            <p>Role: {project.role}</p>
                            <p>Location: {project.location}</p>
                        </div>
                        <div className="mt-2 mb-1 flex justify-between items-center">
                            <span className="text-xs font-medium text-gray-700">Progress: {project.progress}%</span>
                        </div>
                        <ProgressBar value={project.progress} />
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-sm text-gray-500">
                                <i className="far fa-calendar-alt mr-1"></i>
                                Next: {project.nextMeeting}
                            </span>
                            <button className="text-sm font-medium text-primary hover:text-primary-dark">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Card.Footer>
                <button className="text-sm text-primary font-medium hover:text-primary-dark">
                    Find More Projects
                </button>
            </Card.Footer>
        </Card>
    );
};

export default ActiveProjects;
