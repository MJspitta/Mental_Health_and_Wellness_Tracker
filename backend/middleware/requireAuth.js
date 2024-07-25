const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {

    // verify authorization header exists
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({error: 'Authorization token required'});
    }

    // extract token from authorization header
    const token = authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({error: 'Token not found'});
    }
    console.log('Recieved Token:', token);

    try {
        // verify the token and extract user ID
        const {_id} = jwt.verify(token, process.env.SECRET);

        // find user with id and attach user info to req obj
        req.user = await User.findOne({ _id }).select('_id');
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error: 'Request is not authorized'});
    }
};

module.exports = requireAuth;