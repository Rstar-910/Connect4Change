import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';

const QuickActions = () => {
    const navigate = useNavigate();

    const handleAction = (action) => {
        switch (action) {
            case 'logHours':
                // This would open a modal or navigate to a form in a real app
                alert('Log hours functionality would open here');
                break;
            case 'messageTeam':
                navigate('/messages');
                break;
            case 'findProjects':
                navigate('/projects');
                break;
            case 'viewCalendar':
                navigate('/calendar');
                break;
            default:
                break;
        }
    };

    return (
        <Card>
            <Card.Header>
                <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
            </Card.Header>
            <Card.Body>
                <div className="grid grid-cols-2 gap-3">
                    <Button variant="primary" onClick={() => handleAction('logHours')}>Log Hours</Button>
                    <Button variant="secondary" onClick={() => handleAction('messageTeam')}>Message Team</Button>
                    <Button variant="secondary" onClick={() => handleAction('findProjects')}>Find Projects</Button>
                    <Button variant="secondary" onClick={() => handleAction('viewCalendar')}>View Calendar</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default QuickActions;