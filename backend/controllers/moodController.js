const Mood = require('../models/Mood');

// get all moods for a user
const getMoods = async (req, res) => {
    try {
        const moods = await Mood.find({ user: req.user._id });
        res.status(200).json(moods);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch moods' });
    }
};

// add new mood entry
const addMood = async (req, res) => {
    const { moodType, intensity, notes } = req.body;

    try {
        const mood = await Mood({ user: req.user._id, moodType, intensity, notes });
        await mood.save();
        res.status(201).json(mood);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add mood' });
    }
};

module.exports = { getMoods, addMood };