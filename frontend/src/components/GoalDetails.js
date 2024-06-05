import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const GoalDetails = ({ goal }) => {
    return (
        <div className="goal-details">
            <h4><strong>Goal: </strong>{goal.goalType}</h4>
            <p><strong>Target: </strong>{goal.target}</p>
            <p><strong>Description: </strong>{goal.description}</p>
            <p>{formatDistanceToNow(new Date(goal.createdAt), { addSuffix: true })}</p>
        </div>
    );
};

export default GoalDetails;