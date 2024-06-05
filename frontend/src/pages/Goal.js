import { useEffect, useState } from 'react';
import GoalDetails from '../components/GoalDetails';
import { useGoalsContext } from '../hooks/useGoalContext';
import { useAuthContext } from '../hooks/useAuthContext';


const Goal = () => {
    const {goals, dispatch} = useGoalsContext();
    const {user} = useAuthContext();
    const [goalType, setGoalType] = useState('');
    const [target, setTarget] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGoals = async () => {
            const response = await fetch('/api/goals', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_GOALS', payload: json});
            }
        };

        if (user) {
            fetchGoals();
        }
    }, [dispatch, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in');
            return;
        }
        
        const goal = {goalType, target, description};

        const response = await fetch('/api/goals', {
            method: 'POST',
            body: JSON.stringify(goal),
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
            setGoalType('');
            setTarget('');
            setDescription('');
            setError(null);
            console.log('new goal added', json);
            dispatch({type: 'CREATE_GOAL', payload: json});
        }

    };

    return (
        <div className="goal-page">
            <h2>Goals</h2>
            <form onSubmit={handleSubmit}>
                <label>Goal:</label>
                <input type="text" value={goalType} onChange={(e) => setGoalType(e.target.value)} required />
                <label>Target:</label>
                <input type="text" value={target} onChange={(e) => setTarget(e.target.value)} required />
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                <button type="submit">Add Goal</button>
            </form>
            {error && <div className="error">{error}</div>}
            <ul className="goals">
                {goals && goals.map((goal) => (
                    <GoalDetails key={goal._id} goal={goal} />
                ))}
            </ul>
        </div>
    );
};

export default Goal;