const Goal = require('../models/goalModel');


// get all goals for user
const getGoals = async (req, res) => {
    const user_id = req.user._id; // get user id from auth req

    // find and sort goals by creation date in descending order
    const goals = await Goal.find({ user_id }).sort({createdAt: -1});

    res.status(200).json(goals);
};

// add new goal
const addGoal = async (req, res) => {
    const { goalType, target, description } = req.body;

    try {
        const user_id = req.user._id; // get user id from auth request
        // create new goal entry
        const goal = await Goal.create({goalType, target, description, user_id});
        res.status(200).json(goal);
    } catch (error) {
        // handle errors
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getGoals, addGoal };