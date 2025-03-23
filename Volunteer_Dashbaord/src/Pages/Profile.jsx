import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import Badge from '../components/UI/Badge';

const Profile = () => {
    const { currentUser, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const [editMode, setEditMode] = useState(false);
    const [profileData, setProfileData] = useState({
        name: '',
        email: '',
        bio: '',
        location: '',
        phone: '',
        skills: [],
        interests: []
    });

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/');
        } else if (currentUser) {
            // Populate profile with user data and some mock data
            setProfileData({
                name: currentUser.name,
                email: currentUser.email,
                bio: "Passionate volunteer dedicated to making a positive impact in the community.",
                location: "San Francisco, CA",
                phone: "(555) 123-4567",
                skills: ["Project Management", "Teaching", "Event Planning"],
                interests: ["Environmental Conservation", "Education", "Community Development"]
            });
        }
    }, [isAuthenticated, navigate, currentUser]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSkillChange = (e) => {
        const skills = e.target.value.split(',').map(skill => skill.trim());
        setProfileData(prev => ({
            ...prev,
            skills
        }));
    };

    const handleInterestChange = (e) => {
        const interests = e.target.value.split(',').map(interest => interest.trim());
        setProfileData(prev => ({
            ...prev,
            interests
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, you would save the changes to the backend here
        setEditMode(false);
    };

    if (!isAuthenticated || !currentUser) {
        return null;
    }

    return (
        <div className="bg-gray-50 min-h-screen py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Your Profile</h1>
                    {!editMode && (
                        <Button variant="secondary" onClick={() => setEditMode(true)}>
                            Edit Profile
                        </Button>
                    )}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Profile Summary Card */}
                    <div className="lg:col-span-1">
                        <Card>
                            <div className="relative">
                                <div className="h-32 bg-indigo-600"></div>
                                <div className="absolute top-16 left-0 w-full flex justify-center">
                                    <img
                                        src={currentUser.profileImage || "/images/profiles/default.jpg"}
                                        alt="Profile"
                                        className="h-32 w-32 rounded-full border-4 border-white shadow-md object-cover"
                                    />
                                </div>
                            </div>
                            <Card.Body className="mt-16 text-center">
                                <h2 className="text-xl font-bold text-gray-800">{profileData.name}</h2>
                                <p className="text-gray-600 mb-4">{currentUser.role}</p>
                                <div className="flex justify-center space-x-4 mt-4">
                                    <Button variant="outline" size="sm" onClick={() => navigate('/projects')}>
                                        Find Projects
                                    </Button>
                                    <Button variant="outline" size="sm" onClick={() => navigate('/messages')}>
                                        Messages
                                    </Button>
                                </div>
                            </Card.Body>
                        </Card>

                        {/* Impact Stats Card */}
                        <Card className="mt-6">
                            <Card.Header>
                                <h2 className="text-lg font-semibold text-gray-800">Your Impact</h2>
                            </Card.Header>
                            <Card.Body>
                                <div className="text-center py-4">
                                    <div className="mb-4">
                                        <span className="block text-3xl font-bold text-indigo-600">120</span>
                                        <span className="text-sm text-gray-600">Hours Contributed</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="text-center">
                                            <span className="block text-2xl font-bold text-indigo-600">6</span>
                                            <span className="text-sm text-gray-600">Projects</span>
                                        </div>
                                        <div className="text-center">
                                            <span className="block text-2xl font-bold text-indigo-600">450</span>
                                            <span className="text-sm text-gray-600">Impact Points</span>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* Profile Details */}
                    <div className="lg:col-span-2">
                        <Card>
                            <Card.Header>
                                <h2 className="text-lg font-semibold text-gray-800">Profile Information</h2>
                            </Card.Header>
                            <Card.Body>
                                {editMode ? (
                                    <form onSubmit={handleSubmit}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={profileData.name}
                                                    onChange={handleChange}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={profileData.email}
                                                    onChange={handleChange}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Phone</label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    value={profileData.phone}
                                                    onChange={handleChange}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700">Location</label>
                                                <input
                                                    type="text"
                                                    name="location"
                                                    value={profileData.location}
                                                    onChange={handleChange}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                                />
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700">Bio</label>
                                            <textarea
                                                name="bio"
                                                rows="3"
                                                value={profileData.bio}
                                                onChange={handleChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            ></textarea>
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700">Skills (comma separated)</label>
                                            <input
                                                type="text"
                                                name="skills"
                                                value={profileData.skills.join(', ')}
                                                onChange={handleSkillChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div className="mb-6">
                                            <label className="block text-sm font-medium text-gray-700">Interests (comma separated)</label>
                                            <input
                                                type="text"
                                                name="interests"
                                                value={profileData.interests.join(', ')}
                                                onChange={handleInterestChange}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                            />
                                        </div>
                                        <div className="flex justify-end space-x-4">
                                            <Button variant="outline" type="button" onClick={() => setEditMode(false)}>
                                                Cancel
                                            </Button>
                                            <Button variant="primary" type="submit">
                                                Save Changes
                                            </Button>
                                        </div>
                                    </form>
                                ) : (
                                    <div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-500">Name</h3>
                                                <p className="mt-1 text-sm text-gray-900">{profileData.name}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-500">Email</h3>
                                                <p className="mt-1 text-sm text-gray-900">{profileData.email}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-500">Phone</h3>
                                                <p className="mt-1 text-sm text-gray-900">{profileData.phone}</p>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-500">Location</h3>
                                                <p className="mt-1 text-sm text-gray-900">{profileData.location}</p>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <h3 className="text-sm font-medium text-gray-500">Bio</h3>
                                            <p className="mt-1 text-sm text-gray-900">{profileData.bio}</p>
                                        </div>
                                        <div className="mb-6">
                                            <h3 className="text-sm font-medium text-gray-500">Skills</h3>
                                            <div className="mt-1 flex flex-wrap gap-2">
                                                {profileData.skills.map((skill, index) => (
                                                    <Badge key={index} color="primary" className="font-normal">
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-medium text-gray-500">Interests</h3>
                                            <div className="mt-1 flex flex-wrap gap-2">
                                                {profileData.interests.map((interest, index) => (
                                                    <Badge key={index} color="secondary" className="font-normal">
                                                        {interest}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </Card.Body>
                        </Card>

                        {/* Volunteer History */}
                        <Card className="mt-6">
                            <Card.Header>
                                <h2 className="text-lg font-semibold text-gray-800">Volunteer History</h2>
                            </Card.Header>
                            <Card.Body>
                                <div className="space-y-4">
                                    {[
                                        {
                                            project: "Community Garden Revitalization",
                                            role: "Team Lead",
                                            hours: 45,
                                            date: "Jan - Mar 2024"
                                        },
                                        {
                                            project: "Youth Mentorship Program",
                                            role: "Mentor",
                                            hours: 32,
                                            date: "Apr - Jun 2024"
                                        },
                                        {
                                            project: "Food Bank Distribution",
                                            role: "Volunteer",
                                            hours: 28,
                                            date: "Jul - Sep 2024"
                                        }
                                    ].map((history, index) => (
                                        <div key={index} className="bg-gray-50 rounded-lg p-4">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="font-medium text-gray-900">{history.project}</h3>
                                                    <p className="text-sm text-gray-600">{history.role}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-medium text-gray-900">{history.hours} hours</p>
                                                    <p className="text-sm text-gray-600">{history.date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;