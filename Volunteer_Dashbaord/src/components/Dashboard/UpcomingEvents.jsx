import React from 'react';
import Card from '../UI/Card';
import { format } from 'date-fns';

const UpcomingEvents = ({ events }) => {
    // Function to format date into parts
    const formatDateParts = (dateString) => {
        const date = new Date(dateString);
        return {
            month: format(date, 'MMM'),
            day: format(date, 'd'),
            time: format(date, 'h:mm a')
        };
    };

    return (
        <Card>
            <Card.Header>
                <h2 className="text-lg font-semibold text-gray-800">Upcoming Events</h2>
            </Card.Header>
            <div className="divide-y divide-gray-200">
                {events.map(event => {
                    const { month, day, time } = formatDateParts(event.date);
                    return (
                        <div key={event.id} className="p-6 hover:bg-gray-50 transition duration-150">
                            <div className="flex items-start">
                                <div className="bg-indigo-100 rounded-lg p-3 mr-4 text-center min-w-[60px]">
                                    <div className="text-xs text-indigo-700 font-medium">{month}</div>
                                    <div className="text-xl font-bold text-indigo-800">{day}</div>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-900">{event.title}</h3>
                                    <p className="text-sm text-gray-600 mt-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {time}
                                    </p>
                                    {event.location && (
                                        <p className="text-sm text-gray-600 mt-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {event.location}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Card.Footer>
                <button className="text-sm text-indigo-600 font-medium hover:text-indigo-800">
                    View All Events
                </button>
            </Card.Footer>
        </Card>
    );
};

export default UpcomingEvents;