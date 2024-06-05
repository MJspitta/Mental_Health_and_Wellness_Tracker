import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const MoodDetails = ({ mood }) => {
    return (
        <div className="mood-details">
            <h4><strong>Mood: </strong>{mood.moodType}</h4>
            <p><strong>Intensity: </strong>{mood.intensity}</p>
            <p><strong>Notes: </strong>{mood.notes}</p>
            <p>{formatDistanceToNow(new Date(mood.createdAt), { addSuffix: true })}</p>
        </div>
    );
};

export default MoodDetails;