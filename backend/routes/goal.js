const express = require('express');

const router = express.Router();

const { getGoals, addGoal } = require('../controllers/goalController');
const requireAuth = require('../middleware/requireAuth');

// middleware to require authentication
router.use(requireAuth);

// get all goals for user
router.get('/', getGoals);

// add new goal
router.post('/', addGoal);

module.exports = router;