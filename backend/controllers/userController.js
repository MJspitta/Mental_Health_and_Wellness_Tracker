const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Create JWT token
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' });
}

// Controller function to register a new user
const registerUser = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    try {
        // Register user
        const user = await User.register(firstName, lastName, email, password);

        // Create a JWT token for the user
        const token = createToken(user._id);

        // Send response with user details and token
        res.status(200).json({firstName, lastName, email, token});
    } catch (error) {
        // Error response
        res.status(400).json({error: error.message});
    }
};

// Controller function to login a user
const loginUser = async (req, res) => {

    const {email, password} = req.body;

    try {
        // User authentication
        const user = await User.login(email, password);

        // Create a JWT token for the user
        const token = createToken(user._id);

        // Send response with user email and token
        res.status(200).json({email, token});
    } catch (error) {
        // Error response
        res.status(400).json({error: error.message});
    }
};

module.exports = { registerUser, loginUser };