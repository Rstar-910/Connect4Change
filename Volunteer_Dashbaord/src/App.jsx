import React, { useState } from 'react';
import { Calendar, ChevronRight, Clock, Users, Award, BarChart2, Bell, MessageSquare } from 'lucide-react';

const App = () => {
  // Volunteer user data
  const [userData] = useState({
    name: "Jane Smith",
    role: "Volunteer",
    hoursContributed: 45,
    projectsJoined: 3,
    upcomingEvents: 2,
    impactPoints: 320,
    joined: "January 2025"
  });

  // Projects data
  const [myProjects] = useState([
    {
      id: 1,
      title: "Community Garden Restoration",
      role: "Team Member",
      status: "In Progress",
      nextMeeting: "March 25, 2025",
      progress: 65,
      category: "Environment"
    },
    {
      id: 2,
      title: "Digital Literacy for Seniors",
      role: "Coordinator",
      status: "Active",
      nextMeeting: "March 28, 2025",
      progress: 42,
      category: "Education"
    },
    {
      id: 3,
      title: "Youth Mentorship Program",
      role: "Mentor",
      status: "Starting Soon",
      nextMeeting: "April 2, 2025",
      progress: 0,
      category: "Community"
    }
  ]);

  // Upcoming events
  const upcomingEvents = [
    {
      id: 1,
      title: "Garden Planting Day",
      date: "March 25, 2025",
      time: "9:00 AM - 12:00 PM",
      location: "Community Garden",
      project: "Community Garden Restoration"
    },
    {
      id: 2,
      title: "Senior Tech Workshop",
      date: "March 28, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "Community Center",
      project: "Digital Literacy for Seniors"
    }
  ];

  // Recent activities
  const recentActivities = [
    { id: 1, activity: "You logged 3 hours for Community Garden Restoration", time: "2 days ago" },
    { id: 2, activity: "Maria Rodriguez commented on your garden design", time: "3 days ago" },
    { id: 3, activity: "You joined Youth Mentorship Program", time: "1 week ago" },
    { id: 4, activity: "You achieved the 'Getting Started' badge", time: "1 week ago" }
  ];

  // Impact stats
  const impactStats = [
    { label: "People Helped", value: 47 },
    { label: "Trees Planted", value: 12 },
    { label: "Classes Taught", value: 8 }
  ];

  // Status color mapping
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress': return 'bg-blue-500';
      case 'active': return 'bg-green-500';
      case 'starting soon': return 'bg-yellow-500';
      case 'completed': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  // Progress bar component
  const ProgressBar = ({ percent }) => (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <div
        className="bg-blue-600 h-2.5 rounded-full"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Top Navigation */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">⟳</span>
            <span className="text-xl font-semibold">Connect4Change</span>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <Bell size={20} className="text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-medium">
                JS
              </div>
              <span className="font-medium">{userData.name}</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Welcome section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome back, {userData.name}!</h1>
              <p className="text-gray-600">Here's what's happening in your volunteer world</p>
            </div>
            <div className="bg-blue-50 px-4 py-2 rounded-lg">
              <p className="text-sm text-blue-800">Member since {userData.joined}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content - left 2/3 */}
          <div className="lg:col-span-2 space-y-6">
            {/* Stats cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <Clock size={24} className="text-blue-500 mb-2" />
                <span className="text-2xl font-bold">{userData.hoursContributed}</span>
                <span className="text-sm text-gray-600">Hours</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <Users size={24} className="text-green-500 mb-2" />
                <span className="text-2xl font-bold">{userData.projectsJoined}</span>
                <span className="text-sm text-gray-600">Projects</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <Calendar size={24} className="text-purple-500 mb-2" />
                <span className="text-2xl font-bold">{userData.upcomingEvents}</span>
                <span className="text-sm text-gray-600">Events</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                <Award size={24} className="text-yellow-500 mb-2" />
                <span className="text-2xl font-bold">{userData.impactPoints}</span>
                <span className="text-sm text-gray-600">Impact Points</span>
              </div>
            </div>

            {/* My Projects */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h2 className="text-lg font-semibold">My Projects</h2>
                <button className="text-blue-500 text-sm flex items-center">
                  View All <ChevronRight size={16} />
                </button>
              </div>
              <div className="divide-y divide-gray-100">
                {myProjects.map(project => (
                  <div className="p-4 hover:bg-gray-50 transition-colors" key={project.id}>
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{project.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(project.status)} text-white`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <span className="mr-4">Role: {project.role}</span>
                      <span>Category: {project.category}</span>
                    </div>
                    <div className="flex justify-between items-center mb-1 text-sm">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-800 font-medium">{project.progress}%</span>
                    </div>
                    <ProgressBar percent={project.progress} />
                    <div className="mt-3 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" /> Next Meeting: {project.nextMeeting}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Upcoming Events</h2>
              </div>
              {upcomingEvents.length > 0 ? (
                <div className="divide-y divide-gray-100">
                  {upcomingEvents.map(event => (
                    <div className="p-4 hover:bg-gray-50 transition-colors" key={event.id}>
                      <h3 className="font-medium">{event.title}</h3>
                      <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar size={14} className="mr-2" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock size={14} className="mr-2" />
                          <span>{event.time}</span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-blue-600">{event.project}</span>
                        </div>
                      </div>
                      <button className="mt-2 bg-blue-50 hover:bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded transition-colors">
                        Add to Calendar
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 text-center text-gray-500">
                  <p>No upcoming events scheduled.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar - right 1/3 */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Quick Actions</h2>
              </div>
              <div className="p-4 grid grid-cols-2 gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md transition-colors text-sm flex items-center justify-center">
                  <Clock size={16} className="mr-2" /> Log Hours
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-md transition-colors text-sm flex items-center justify-center">
                  <Users size={16} className="mr-2" /> Find Projects
                </button>
                <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-3 rounded-md transition-colors text-sm flex items-center justify-center">
                  <MessageSquare size={16} className="mr-2" /> Message Team
                </button>
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-3 rounded-md transition-colors text-sm flex items-center justify-center">
                  <Calendar size={16} className="mr-2" /> View Calendar
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Recent Activity</h2>
              </div>
              <div className="divide-y divide-gray-100">
                {recentActivities.map(activity => (
                  <div key={activity.id} className="p-4">
                    <p className="text-sm">{activity.activity}</p>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Your Impact</h2>
              </div>
              <div className="p-4 grid grid-cols-3 gap-2 text-center">
                {impactStats.map((stat, index) => (
                  <div key={index} className="p-2">
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;