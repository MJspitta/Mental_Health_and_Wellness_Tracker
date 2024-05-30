import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import background from '../../images/ment.jpg';
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login({ email, password });
            navigate('/dashboard');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        // <form onSubmit={handleSubmit}>
        //     <h2>Login</h2>
        //     <label>Email</label>
        //     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        //     <label>Password</label>
        //     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        //     <button type="submit">Login</button>
        // </form>
        <div className="login-page">
            <header style={{ backgroundImage: `url(${background})` }}>
                <nav className="navbar">
                    <h2 className="nav-logo">norm</h2>
                    <div className="nav-links">
                        <Link to="/" className="navlink home">Home</Link>
                        <Link to="/register" className="navlink signup">Sign Up</Link>
                    </div>
                </nav>
                <div className='login-main'>
                    <form onSubmit={handleSubmit} className='login-container'>
                        <h1>Login</h1>
                        <div className="input-field">
                            <input placeholder='E-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div className="input-field">
                            <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" className="login-btn">Login</button>
                        <Link to="/register">Register here</Link>
                    </form>
                </div>
            </header>
        </div>
    );
};

export default Login;