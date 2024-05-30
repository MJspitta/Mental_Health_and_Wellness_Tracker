import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import '../styles/Register.css';
import background from '../../images/ment.jpg';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { register } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register({ username, email, password });
            navigate('/dashboard');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    return (
        // <form onSubmit={handleSubmit}>
        //     <h2>Register</h2>
        //     <label>Username</label>
        //     <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        //     <label>Email</label>
        //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        //     <label>Password</label>
        //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        //     <button type="submit">Register</button>
        // </form>
        <div className="register-page">
            <header style={{ backgroundImage: `url(${background})` }}>
                <nav className="navbar">
                    <h2 className="nav-logo">norm</h2>
                    <div className="nav-links">
                        <Link to="/" className="navlink home">Home</Link>
                        <Link to="/login" className="navlink login">Login</Link>
                    </div>
                </nav>
                <div className='registration-main'>
                    <form onSubmit={handleSubmit} className='registration-container'>
                        <h1>Create free account</h1>
                        <div className="input-field">
                            <input placeholder='Username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <input placeholder='E-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="signup-btn">Register</button>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                    </form>
                </div>
            </header>
        </div>
    );
};

export default Register;