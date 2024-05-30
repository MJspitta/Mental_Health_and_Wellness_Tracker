import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext';
import api from '../../api';
import Navbar from '../Navbar';


const Moods = () => {
    const { token } = useContext(AuthContext);
    const [moods, setMoods] = useState([]);
    const [moodType, setMoodType] = useState('');
    const [intensity, setIntensity] = useState('');
    const [notes, setNotes] = useState('');

    useEffect(() => {
        const fetchMoods = async () => {
            const data = await api.getMoods(token);
            setMoods(data);
        };
        fetchMoods();
    }, [token]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMood = { moodType, intensity, notes };
        await api.addMood(newMood, token);
        setMoodType('');
        setIntensity('');
        setNotes('');
        const data = await api.getMoods(token);
        setMoods(data);
    };

    return (
        <div className="moods">
            <Navbar />
            <h2>Moods</h2>
            <form onSubmit={handleSubmit}>
                <label>Mood Type</label>
                <input type="text" value={moodType} onChange={(e) => setMoodType(e.target.value)} required />
                <label>Intensity</label>
                <input type="number" value={intensity} onChange={(e) => setIntensity(e.target.value)} required />
                <label>Notes</label>
                <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} required />
                <button type="submit">Add Mood</button>
            </form>
            <ul>
                {moods.map((mood) => (
                    <li key={mood._id}>{mood.moodType} - {mood.intensity} - {mood.notes}</li>
                ))}
            </ul>
        </div>
    );
};

export default Moods;