import { useEffect, useState } from 'react';
import MoodDetails from '../components/MoodDetails';
import { useMoodsContext } from '../hooks/useMoodContext';
import { useAuthContext } from '../hooks/useAuthContext';

const Mood = () => {
    const {moods, dispatch} = useMoodsContext();
    const {user} = useAuthContext();
    const [moodType, setMoodType] = useState('');
    const [intensity, setIntensity] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchMoods = async () => {
            const response = await fetch('/api/moods', {
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

        const response = await fetch('/api/moods', {
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
            <form onSubmit={handleSubmit}>
                <label>Mood Type</label>
                <input type="text" value={moodType} onChange={(e) => setMoodType(e.target.value)} />
                <label>Intensity</label>
                <input type="number" value={intensity} onChange={(e) => setIntensity(e.target.value)} />
                <label>Notes</label>
                <input type="text" value={notes} onChange={(e) => setNotes(e.target.value)} />
                <button type="submit">Add Mood</button>
            </form>
            {error && <div className="error">{error}</div>}
            <div className="moods">
                {moods && moods.map((mood) => (
                    <MoodDetails key={mood._id} mood={mood} />
                ))}
            </div>
        </div>
    );
};

export default Mood;