const express = require('express');

const router = express.Router();

const { getMoods, addMood } = require('../controllers/moodController');
const requireAuth = require('../middleware/requireAuth');

// middleware to require authentication
router.use(requireAuth);

// get all moods for user
router.get('/', getMoods);

// add new mood entry
router.post('/', addMood);

module.exports = router;