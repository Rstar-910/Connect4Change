import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Card from '../components/UI/Card';
import Badge from '../components/UI/Badge';
import Button from '../components/UI/Button';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        } else {
            // Load projects data
            setProjects(projectsData);
        }
    }, [isAuthenticated, navigate]);

    const getStatusColor = (status) => {
        switch (status) {
            case 'Active': return 'success';
            case 'Starting Soon': return 'info';
            case 'Planning': return 'purple';
            case 'Completed': return 'secondary';
            default: return 'secondary';
        }
    };

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.status === filter);

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Explore Projects</h1>
                    <Button variant="primary">Create New Project</Button>
                </div>

                {/* Filters */}
                <div className="mb-8">
                    <div className="bg-white p-4 rounded-lg shadow-sm flex space-x-4">
                        <button
                            className={`px-4 py-2 rounded-md text-sm font-medium ${filter === 'all'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            onClick={() => setFilter('all')}
                        >
                            All Projects
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md text-sm font-medium ${filter === 'Active'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            onClick={() => setFilter('Active')}
                        >
                            Active
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md text-sm font-medium ${filter === 'Starting Soon'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            onClick={() => setFilter('Starting Soon')}
                        >
                            Starting Soon
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md text-sm font-medium ${filter === 'Planning'
                                ? 'bg-indigo-100 text-indigo-700'
                                : 'text-gray-600 hover:bg-gray-100'
                                }`}
                            onClick={() => setFilter('Planning')}
                        >
                            Planning
                        </button>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map(project => (
                        <Card key={project.id} className="h-full flex flex-col">
                            <div className="relative">
                                <img
                                    src={project.image || "/images/project-placeholder.jpg"}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <Badge color={getStatusColor(project.status)} className="absolute top-4 right-4">
                                    {project.status}
                                </Badge>
                            </div>
                            <Card.Body className="flex-grow">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm">{project.description || project.role}</p>
                                <div className="text-sm text-gray-600 mb-4">
                                    <p><span className="font-medium">Location:</span> {project.location}</p>
                                    <p><span className="font-medium">Next Meeting:</span> {project.nextMeeting}</p>
                                </div>
                            </Card.Body>
                            <Card.Footer className="bg-white border-t border-gray-200">
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-600">
                                        {project.participantsCount || '5'} participants
                                    </span>
                                    <Button variant="secondary" size="sm">View Details</Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">No projects found with the selected filter.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;