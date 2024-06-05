import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Welcome username.</h1>
            <nav>
                <ul>
                    <li><Link to="/mood">Moods</Link></li>
                    <li><Link to="/activity">Activities</Link></li>
                    <li><Link to="/goal">Goals</Link></li>
                </ul>
            </nav>
            <button type="button">Logout</button>
        </div>
    );
};

export default Dashboard;