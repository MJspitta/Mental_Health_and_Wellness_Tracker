import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './styles/Navbar.css';


const Navbar = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div className='nav-bar'>
            <h1 className="nav-logo">norm</h1>
            <nav className="nav-links">
                <Link to="/" className="nav-link">Dashboard</Link>
                <Link to="/moods" className="nav-link">Mood</Link>
                <Link to="/activities" className="nav-link">Activity</Link>
                <Link to="/goals" className="nav-link">Goals</Link>
                {/* <Link to="/resources" className="nav-link">Resources</Link>
                <Link to="/preferences" className="nav-link">Preferences</Link> */}
            </nav>
            <div className="nav-profile">
                <button onClick={logout} className="logout">Logout</button>
                <div className='nav-profile-img'></div>
            </div>
        </div>
    );
};

export default Navbar;