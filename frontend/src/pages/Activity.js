import { useEffect, useState } from 'react';
import ActivityDetails from '../components/ActivityDetails';
import { useActivitiesContext } from '../hooks/useActivityContext';
import { useAuthContext } from '../hooks/useAuthContext';
import '../styles/Activity.css';


const Activity = () => {
    const {activities, dispatch} = useActivitiesContext();
    const {user} = useAuthContext();
    const [activityType, setActivityType] = useState('');
    const [duration, setDuration] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    useEffect(() => {
        const fetchActivities = async () => {
            const response = await fetch(`${API_URL}/api/activities`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_ACTIVITIES', payload: json});
            }
        };

        if (user) {
            fetchActivities();
        }
    }, [dispatch, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in');
            return;
        }
        
        const activity = {activityType, duration, description};

        const response = await fetch(`${API_URL}/api/activities`, {
            method: 'POST',
            body: JSON.stringify(activity),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        });
        const json = await response.json()

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setActivityType('');
            setDuration('');
            setDescription('');
            setError(null);
            console.log('new activity added', json);
            dispatch({type: 'CREATE_ACTIVITY', payload: json});
        }

    };

    return (
        <div className="activity-page">
            <h2>Activities</h2>
            <form onSubmit={handleSubmit} className="activity-form">
                <div className="activity-input">
                    <label>Activity Type</label>
                    <input type="text" value={activityType} onChange={(e) => setActivityType(e.target.value)} required />
                </div>
                <div className="activity-input">
                    <label>Duration</label>
                    <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} required />
                </div>
                <div className="activity-input">
                    <label>Description</label>
                    {/* <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /> */}
                    <textarea rows={5} value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" className="activity-btn">Add Activity</button>
            </form>
            {/* {error && <div className="error">{error}</div>} */}
            <ul className="activities">
                {activities && activities.map((activity) => (
                    <ActivityDetails key={activity._id} activity={activity} />
                ))}
            </ul>
        </div>
    );
};

export default Activity;