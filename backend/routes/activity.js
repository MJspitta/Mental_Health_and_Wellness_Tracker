const express = require('express');

const router = express.Router();

const { getActivities, addActivity } = require('../controllers/activityController');
const requireAuth = require('../middleware/requireAuth');

// middleware to require authentication
router.use(requireAuth);

// get all activities for user
router.get('/', getActivities);

// add new activity log
router.post('/', addActivity);

module.exports = router;