const Goal = require('../models/Goal');

// get all goals for user
const getGoals = async (req, res) => {
    try {
        const goals = await Goal.find({ user: req.user._id });
        res.status(200).json(goals);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch goals' });
    }
};

// add new goal
const addGoal = async (req, res) => {
    const { goalType, target, description } = req.body;

    try {
        const goal = new Goal({ user: req.user._id, goalType, target, description });
        await goal.save();
        res.status(201).json(goal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add goal' });
    }
};

module.exports = { getGoals, addGoal };