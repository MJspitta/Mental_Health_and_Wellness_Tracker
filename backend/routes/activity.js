const express = require('express');
const { getActivities, addActivity } = require('../controllers/activityController');
const requireAuth = require('../middleware/requireAuth');


const router = express.Router();

// require auth for all activity routes
router.use(requireAuth);

router.get('/', getActivities);

router.post('/', addActivity);

module.exports = router;