import React from 'react';
import { Link } from 'react-router-dom';
import background from '../images/ment.jpg';
import smiley from '../images/smiley.png';
import './styles/LandingPage.css';


const LandingPage = () => {
    return (
        <div className="landing-page">
            <header style={{ backgroundImage: `url(${background})` }}>
                <nav className="navbar">
                    <h2 className="nav-logo">norm</h2>
                    <div className="nav-links">
                        <Link to="/" className="navlink home">Home</Link>
                        <Link to="/login" className="navlink login">Login</Link>
                        <Link to="/register" className="navlink signup">Sign Up</Link>
                    </div>
                </nav>
                <div className="header-text">
                    <h1>Every step counts on your path to mental wellness.</h1>
                    <p>Start this journey with us, let us help you track your mood, log your activities & set your daily goals towards improving and maintaining good mental health.</p>
                    <Link to="/register" className="get-started-btn">Get Started</Link>
                </div>
            </header>

            <main>
                <div className="main-content-img">
                    <img src={smiley} alt="smiley face" />
                </div>
                <div className="main-content-text">
                    <h2>What do you get?</h2>
                    <div className="content-list-box">
                        <img className="content-list-img" alt="icon" />
                        <div className="content-list-text">
                            <h3>Mood Tracking</h3>
                            <p>Track your emotions, gain insights, and take control of your mental well-being.</p>
                        </div>
                    </div>
                    <div className="content-list-box">
                        <img className="content-list-img" alt="icon" />
                        <div className="content-list-text">
                            <h3>Activity Logging</h3>
                            <p>Record your daily activities, stay organized, and track your progress towards a healthier lifestyle.</p>
                        </div>
                    </div>
                    <div className="content-list-box">
                        <img className="content-list-img" alt="icon" />
                        <div className="content-list-text">
                            <h3>Goal setting</h3>
                            <p>Set meaningful goals, track your achievements, and unlock your full potential.</p>
                        </div>
                    </div>
                    <div className="content-list-box">
                        <img className="content-list-img" alt="icon" />
                        <div className="content-list-text">
                            <h3>Resources</h3>
                            <p>Access a wealth of curated resources, from articles to support hotlines, to support your mental health journey.</p>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <Link to="/register" className="get-started-btn">Get Started</Link>
                <h2>Contact Us</h2>
                <p className="footer-addy"><span className="bold-footer">Address:</span> B32 His Grace Pavilion Centre, Wumba District, Apo, Abuja, Nigeria.</p>
                <p className="footer-email"><span className="bold-footer">Email:</span> contactusatnorm@norm.com</p>
                <p className="footer-number"><span className="bold-footer">Phone No.:</span> (+234) - 912 - 295 - 9033</p>
                <div className="copyright">
                    <p>Copyright &copy; 2024 Sytrix Labs.</p>
                </div>

            </footer>
        </div>
    );
};

export default LandingPage;