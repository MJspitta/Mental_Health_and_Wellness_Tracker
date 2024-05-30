require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const moodRoutes = require('./routes/mood');
const activityRoutes = require('./routes/activity');
const goalRoutes = require('./routes/goal');

const app = express();

// middleware to parse JSON
app.use(cors());
app.use(express.json());

// middleware to log requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/user', userRoutes);
app.use('/api/moods', moodRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/goals', goalRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Start server if database connection is successful
        app.listen(process.env.PORT, () => {
            console.log('Connected to MongoDB and listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.error('Failed to connect to MongoDB:', error);
    });

