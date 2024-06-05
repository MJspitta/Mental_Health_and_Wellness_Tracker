const Mood = require('../models/moodModel');


// get all moods for a user
const getMoods = async (req, res) => {
    const user_id = req.user._id;
    const moods = await Mood.find({ user_id }).sort({createdAt: -1});
    
    res.status(200).json(moods);
};

// add new mood entry
const addMood = async (req, res) => {
    const { moodType, intensity, notes } = req.body;

    try {
        const user_id = req.user._id;
        const mood = await Mood.create({moodType, intensity, notes, user_id});
        res.status(200).json(mood);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { getMoods, addMood };