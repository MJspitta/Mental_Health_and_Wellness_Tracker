import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api';
import Navbar from '../Navbar';


const Activities = () => {
    const { token } = useContext(AuthContext);
    const [activities, setActivities] = useState([]);
    const [activityType, setActivityType] = useState('');
    const [duration, setDuration] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        const fetchActivities = async () => {
            const data = await api.getActivities(token);
            setActivities(data);
        };
        fetchActivities();
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newActivity = { activityType, duration, notes };
        await api.addActivity(newActivity, token);
        setActivityType('');
        setDuration('');
        setNotes('');
        const data = await api.getActivities(token);
        setActivities(data);
    };

    return (
        <div className="activities">
            <Navbar />
            <h2>Activities</h2>
            <form onSubmit={handleSubmit}>
                <label>Activity Type</label>
                <input type="text" value={activityType} onChange={(e) => setActivityType(e.target.value)} required />
                <label>Duration</label>
                <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
                <label>Notes</label>
                <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} required />
                <button type="submit">Add Activity</button>
            </form>
            <ul>
                {activities.map((activity) => (
                    <li key={activity._id}>{activity.activityType} - {activity.duration} - {activity.notes}</li>
                ))}
            </ul>
        </div>
    );
};

export default Activities;