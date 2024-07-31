import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { useMoodsContext } from '../hooks/useMoodContext';
import { useGoalsContext } from '../hooks/useGoalContext';
import { useActivitiesContext } from '../hooks/useActivityContext';
import '../styles/Dashboard.css';
import MoodBar from '../components/MoodBar';
import ActivityBar from '../components/ActivityBar';
import GoalDetails from '../components/GoalDetails';


const Dashboard = () => {
    const { user } = useAuthContext();
    const {moods, dispatch: moodsDispatch} = useMoodsContext();
    const {goals, dispatch: goalsDispatch} = useGoalsContext();
    const {activities, dispatch: activitiesDispatch} = useActivitiesContext();
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';

    

    useEffect(() => {
        const fetchMoods = async () => {
            const response = await fetch(`${API_URL}/api/moods`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                moodsDispatch({type: 'SET_MOODS', payload: json});
            }
        };

        const fetchActivities = async () => {
            const response = await fetch(`${API_URL}/api/activities`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                activitiesDispatch({type: 'SET_ACTIVITIES', payload: json});
            }
        };

        const fetchGoals = async () => {
            const response = await fetch(`${API_URL}/api/goals`, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                goalsDispatch({type: 'SET_GOALS', payload: json});
            }
        };

        if (user) {
            fetchMoods();
            fetchActivities();
            fetchGoals();
        }
    }, [user, moodsDispatch, activitiesDispatch, goalsDispatch]);

    return (
        <div className="dashboard">
            <section className="greeting">
                <h1>Welcome</h1>
            </section>
            <div className="dash-top-section">
                <section className='moods-dash'>
                    <Link to="/mood"><h2>Moods</h2></Link>
                    <div className='moods-chart'>
                        {moods && moods.map((mood) => (
                            <MoodBar key={mood._id} mood={mood}/>
                        ))}
                    </div>
                </section>
                <section className='activities-dash'>
                    <Link to="/activity"><h2>Activities</h2></Link>
                    <div className='activity-chart'>
                        {activities && activities.map((activity) => (
                            <ActivityBar key={activity._id} activity={activity} />
                        ))}
                    </div>
                </section>
            </div>
            
            <section className='goals-dash'>
                <Link to="/goal"><h2>Goals</h2></Link>
                <div className="goal-chart">
                    {goals && goals.map((goal) => (
                        <GoalDetails key={goal._id} goal={goal} />
                    ))}
                </div>
            </section>

        </div>
    );
};

export default Dashboard;