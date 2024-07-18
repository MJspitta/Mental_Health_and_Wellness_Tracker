import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';

const GoalDetails = ({ goal }) => {
    return (
        <div className="goal-details">
            <p className='goal-timing'>{format(new Date(goal.createdAt), "h:mmaaa - EEEE, do MMMM yyyy")}</p>
            <h4><strong>Goal: </strong><span className="goal-display">{goal.goalType}</span></h4>
            <p><strong>Target: </strong><span className="goal-display">{goal.target}</span></p>
            <p><strong>Description: </strong>{goal.description}</p>
            <p className="time-distance">{formatDistanceToNow(new Date(goal.createdAt), { addSuffix: true })}</p>
        </div>
    );
};

export default GoalDetails;