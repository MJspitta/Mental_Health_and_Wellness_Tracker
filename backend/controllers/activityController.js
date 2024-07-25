const Activity = require('../models/activityModel');


// get all activities for user
const getActivities = async (req, res) => {
    const user_id = req.user._id; // get user id from auth req
    // find and sort activities by creation date in desc order
    const activities = await Activity.find({ user_id }).sort({createdAt: -1});

    res.status(200).json(activities);
};

// add new activity log
const addActivity = async (req, res) => {
    const { activityType, duration, description } = req.body;

    try {
        const user_id = req.user._id; // get user id from auth req
        // create new activity log
        const activity = await Activity.create({activityType, duration, description, user_id});
        res.status(200).json(activity);
    } catch (error) {
        // handle errors
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getActivities, addActivity };