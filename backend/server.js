require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user');
const moodRoutes = require('./routes/mood');
const activityRoutes = require('./routes/activity');
const goalRoutes = require('./routes/goal');

const app = express();

// Allow requests from specific origins
const allowedOrigins = ['https://norm-gy40.onrender.com'];
// http://localhost:3000

// Configure CORS
app.use(cors({
    origin: function (origin, callback) {
        if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/user', userRoutes);
app.use('/api/moods', moodRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/goals', goalRoutes);


// connect to db and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listening for requests
        app.listen(process.env.PORT, () => {
            console.log('connected to db and listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });

