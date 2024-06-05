import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const ActivityDetails = ({ activity }) => {
    return (
        <div className="activity-details">
            <h4><strong>Activity: </strong>{activity.activityType}</h4>
            <p><strong>Duration: </strong>{activity.duration}</p>
            <p><strong>Description: </strong>{activity.description}</p>
            <p>{formatDistanceToNow(new Date(activity.createdAt), { addSuffix: true })}</p>
        </div>
    );
};

export default ActivityDetails;