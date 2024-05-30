import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Navbar from '../Navbar';


const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="dashboard">
            <Navbar />
            <h1>Welcome, {user?.username}</h1>
            <nav>
                <ul>
                    <li><Link to="/moods">Moods</Link></li>
                    <li><Link to="/activities">Activities</Link></li>
                    <li><Link to="/goals">Goals</Link></li>
                </ul>
            </nav>
            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Dashboard;