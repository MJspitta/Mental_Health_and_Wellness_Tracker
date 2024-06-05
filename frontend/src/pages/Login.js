import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import background from "../images/ment.jpg";
import '../styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error, isLoading} = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await login(email, password);
    }

    return (
        <div className="login-page">
            <header style={{ backgroundImage: `url(${background})` }}>
                <div className='login-main'>
                    <form onSubmit={handleSubmit} className='login'>
                        <h1>Login</h1>
                        <div className="input-field">
                            <input placeholder='E-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" disabled={isLoading} className="login-btn">Login</button>
                        <Link to="/register">Register here</Link>
                        {error && <div className="error">{error}</div>}
                    </form>
                </div>
            </header>
        </div>
    );
};

export default Login;