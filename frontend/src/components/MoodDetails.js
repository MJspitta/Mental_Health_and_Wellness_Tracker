import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';

const MoodDetails = ({ mood }) => {
    return (
        <div className="mood-details">
            <p className='mood-timing'>{format(new Date(mood.createdAt), "h:mmaaa - EEEE, do MMMM yyyy")}</p>
            <h4><strong>Mood: </strong><span className='mood-display'>{mood.moodType}</span></h4>
            <p><strong>Intensity: </strong><span className='mood-display'>{mood.intensity}</span></p>
            <p><strong>Notes: </strong>{mood.notes}</p>
            <p className='time-distance'>{formatDistanceToNow(new Date(mood.createdAt), { addSuffix: true })}</p>
        </div>
    );
};

export default MoodDetails;