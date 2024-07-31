import { format } from 'date-fns';

const ActivityBar = ({ activity }) => {

    const barTime = format(new Date(activity.createdAt), "h:mmaaa");
    const barDate = format(new Date(activity.createdAt), "EEEE, do MMMM yyyy");


    return (
        <div className="activity-bar">
            <p className="ab-date">{barDate}</p>
            <div className="ab-data">
                <h4>{activity.activityType}</h4>
                <p>{activity.duration}</p>
                <p>{barTime}</p>
            </div>
        </div>
    );
};

export default ActivityBar;