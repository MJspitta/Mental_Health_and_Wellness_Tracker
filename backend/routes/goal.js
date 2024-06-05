const express = require('express');
const { getGoals, addGoal } = require('../controllers/goalController');
const requireAuth = require('../middleware/requireAuth');


const router = express.Router();

// require auth for all goal routes
router.use(requireAuth);

router.get('/', getGoals);

router.post('/', addGoal);

module.exports = router;