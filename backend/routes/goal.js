const express = require('express');
const { getGoals, addGoal } = require('../controllers/goalController');
const requireAuth = require('../middleware/requireAuth');


const router = express.Router();

// require auth for all goal routes
router.use(requireAuth);

// get all goals for user
router.get('/', getGoals);

// add a new goal for user
router.post('/', addGoal);

module.exports = router;