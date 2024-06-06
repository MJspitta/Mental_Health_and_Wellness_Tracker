import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import '../styles/Navbar.css';
import { useAuthContext } from '../hooks/useAuthContext';



const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();

    const handleClick = () => {
        logout();
    }

    return (
        <div className='nav-bar'>
            <Link to="/"><h1 className="nav-logo">norm</h1></Link>
            {user && (
                <nav className="nav-links">
                    <Link to="/" className="nav-link">Dashboard</Link>
                    <Link to="/mood" className="nav-link">Mood</Link>
                    <Link to="/activity" className="nav-link">Activity</Link>
                    <Link to="/goal" className="nav-link">Goals</Link>
                </nav>
            )}
            
            <div className="nav-profile">
                {/* <Link to="/landingPage">Landing Page</Link> */}
                {!user && (
                    <div className="nav-auth">
                        <Link to="/register" className="nav-link">Register</Link>
                        <Link to="/login" className="nav-link">Login</Link>
                    </div>
                )}
                
                {user && (
                    <div className="nav-auth">
                        <span>{user.email}</span>
                        <button onClick={handleClick} type="button" className="logout">Logout</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;