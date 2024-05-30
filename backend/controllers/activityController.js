const Activity = require('../models/Activity');

// get all activities for user
const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find({ user: req.user._id });
        res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch activities' });
    }
};

// add new activity log
const addActivity = async (req, res) => {
    const { activityType, duration, description } = req.body;

    try {
        const activity = new Activity({ user: req.user._id, activityType, duration, description });
        await activity.save();
        res.status(201).json(activity);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add activity' });
    }
};

module.exports = { getActivities, addActivity };