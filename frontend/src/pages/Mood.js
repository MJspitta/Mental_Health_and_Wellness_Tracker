import { useEffect, useState } from 'react';
import MoodDetails from '../components/MoodDetails';
import { useMoodsContext } from '../hooks/useMoodContext';
import { useAuthContext } from '../hooks/useAuthContext';
import '../styles/Mood.css';

const Mood = () => {
    const {moods, dispatch} = useMoodsContext();
    const {user} = useAuthContext();
    const [moodType, setMoodType] = useState('');
    const [intensity, setIntensity] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState(null);
    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:4000';


    useEffect(() => {
        const fetchMoods = async () => {
            const response = await fetch('${API_URL}/api/moods', {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            });
            const json = await response.json();

            if (response.ok) {
                dispatch({type: 'SET_MOODS', payload: json});
            }
        };

        if (user) {
            fetchMoods();
        }
    }, [dispatch, user]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user) {
            setError('You must be logged in');
            return;
        }
        
        const mood = {moodType, intensity, notes};

        const response = await fetch('${API_URL}/api/moods', {
            method: 'POST',
            body: JSON.stringify(mood),
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
            setMoodType('');
            setIntensity('');
            setNotes('');
            setError(null);
            console.log('new mood added', json);
            dispatch({type: 'CREATE_MOOD', payload: json});
        }

    };

    return (
        <div className="mood-page">
            <h2>Moods</h2>
            <form onSubmit={handleSubmit} className="mood-form">
                
                <div className="mood-input">
                    <label>Mood Type</label>
                    <input type="text" value={moodType} onChange={(e) => setMoodType(e.target.value)} />
                </div>
                <div className="mood-input">
                    <label>Intensity (1 - 10)</label>
                    <input type="number" value={intensity} onChange={(e) => setIntensity(e.target.value)} />
                </div>
                <div className="mood-input">
                    <label>Notes</label>
                    {/* <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} /> */}
                    <textarea rows={5} value={notes} onChange={(e) => setNotes(e.target.value)} />
                </div>
                <button type="submit" className="mood-btn">Add Mood</button>
            </form>
            {/* {error && <div className="error">{error}</div>} */}
            <div className="moods">
                {moods && moods.map((mood) => (
                    <MoodDetails key={mood._id} mood={mood} />
                ))}
            </div>
        </div>
    );
};

export default Mood;