const express = require('express');

const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// register new user
router.post('/register', registerUser);

// login user
router.post('/login', loginUser);

module.exports = router;