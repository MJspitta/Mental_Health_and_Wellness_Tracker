require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const moodRoutes = require('./routes/mood');
const activityRoutes = require('./routes/activity');
const goalRoutes = require('./routes/goal');

const app = express();

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


// connect to db
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

