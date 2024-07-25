const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

// Define Schema for User
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { timestamps: true });

// Static method to register a new user
userSchema.statics.register = async function(firstName, lastName, email, password) {

    // Input validation
    if (!firstName || !lastName || !email || !password) {
        throw new Error('All fields must be filled');
    }
    if (!validator.isEmail(email)) {
        throw new Error('Email is not valid');
    }
    if (!validator.isStrongPassword(password)) {
        throw new Error('Password not strong enough');
    }

    // Check if email already exists
    const exists = await this.findOne({ email });
    if (exists) {
        throw new Error('Email already in use');
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create and return a new user
    const user = await this.create({ firstName, lastName, email, password: hash });

    return user;
};

// Static method to login a user
userSchema.statics.login = async function(email, password) {

    // Input validation
    if (!email || !password) {
        throw new Error('All fields must be filled');
    }

    // Find user by email
    const user = await this.findOne({ email });
    if (!user) {
        throw new Error('Incorrect email');
    }

    // Check if password matches
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
        throw new Error('Incorrect password');
    }

    return user;
}

module.exports = mongoose.model('User', userSchema);