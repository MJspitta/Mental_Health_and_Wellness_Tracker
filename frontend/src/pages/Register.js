import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useRegister } from '../hooks/useRegister';
import background from "../images/ment.jpg";
import '../styles/Register.css';

const Register = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {register, error, isLoading} = useRegister();

    const handleSubmit = async (e) => {
        e.preventDefault();

        await register(firstName, lastName, email, password);
    }

    return (
        <div className="register-page">
            <header style={{ backgroundImage: `url(${background})` }}>
                <div className='registration-main'>
                    <form onSubmit={handleSubmit} className='register'>
                        <h1>Create free account</h1>
                        <div className="input-field">
                            <input placeholder='First name' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder='Last name' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder='E-mail' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" disabled={isLoading} className="register-btn">Register</button>
                        <p>Already have an account? <Link to="/login">Login</Link></p>
                        
                        {error && <div className='error'>{error}</div>}
                    </form>
                </div>
            </header>
        </div>
    );
};

export default Register;