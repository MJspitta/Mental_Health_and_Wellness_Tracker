const express = require('express');
const { getMoods, addMood } = require('../controllers/moodController');
const requireAuth = require('../middleware/requireAuth');


const router = express.Router();

// require auth for all mood routes
router.use(requireAuth);

// get all moods
router.get('/', getMoods);

// post new mood
router.post('/', addMood);

module.exports = router;