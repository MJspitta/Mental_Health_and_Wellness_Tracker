const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define schema for mood
const moodSchema = new Schema({
    moodType: { type: String, required: true },
    intensity: { type: Number, required: true },
    notes: { type: String },
    user_id: { type: String, required: true}
}, { timestamps: true });

module.exports = mongoose.model('Mood', moodSchema);