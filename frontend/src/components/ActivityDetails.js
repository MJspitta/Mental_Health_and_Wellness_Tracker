import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';

const ActivityDetails = ({ activity }) => {
    return (
        <div className="activity-details">
            <p className='activity-timing'>{format(new Date(activity.createdAt), "h:mmaaa - EEEE, do MMMM yyyy")}</p>
            <h4><strong>Activity: </strong><span className="activity-display">{activity.activityType}</span></h4>
            <p><strong>Duration: </strong><span className="activity-display">{activity.duration}</span></p>
            <p><strong>Description: </strong>{activity.description}</p>
            <p className='time-distance'>{formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}</p>
        </div>
    );
};

export default ActivityDetails;