import '../styles/Scroll.css';

const Scroll = () => {
    return (
        <div className="scroll">
            <h2>About the Author</h2>
            <p>
                My name is Madu Jang and I am the creator of Norm which is a Mental Health and Wellness Tracker.
                It is my Portfolio Project for
                <a href='https://www.holbertonschool.com/' target='_blank'> Holberton School</a>.
                Creating the Norm app, I used a MERN stack.
                Before I started this project I only knew React.js but on
                the line I had to learn the other technologies to make it 
                interactive. It was a really tough run, and I wished I had
                an app that could keep track of my moods and activities so
                I could refer the routines that kept me in a great mood to
                perform certain duties. This kept me motivated all through
                the process and I plan on expanding on this and implement
                new features that will be very helpful to your mental health and well-being.
            </p>
            <p>You can contact me on <a href='https://www.linkedin.com/in/madu-jang/' target='_blank'>LinkedIn</a> & <a href='https://x.com/madu_jang' target='_blank'>Twitter / X</a>.</p>
            <p>Click <a href='https://github.com/MJspitta/Mental_Health_and_Wellness_Tracker' target='_blank'>Github Link</a> for the project repository.</p>
        </div>
    );
};

export default Scroll;