import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api';
import Navbar from '../Navbar';


const Goals = () => {
    const { token } = useContext(AuthContext);
    const [goals, setGoals] = useState([]);
    const [goal, setGoal] = useState('');
    const [targetDate, setTargetDate] = useState('');

    useEffect(() => {
        const fetchGoals = async () => {
            const data = await api.getGoals(token);
            setGoals(data);
        };
        fetchGoals();
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newGoal = { goal, targetDate };
        await api.addGoal(newGoal, token);
        setGoal('');
        setTargetDate('');
        const data = await api.getGoals(token);
        setGoals(data);
    };

    return (
        <div className="goals">
            <Navbar />
            <h2>Goals</h2>
            <form onSubmit={handleSubmit}>
                <label>Goal</label>
                <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} required />
                <label>Target Date</label>
                <input type="Date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} required />
                <button type="submit">Add Goal</button>
            </form>
            <ul>
                {goals.map((goal) => (
                    <li key={goal._id}>{goal.goal} - {goal.targetDate}</li>
                ))}
            </ul>
        </div>
    );
};

export default Goals;