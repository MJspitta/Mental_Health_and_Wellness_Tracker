const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moodSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    moodType: { type: String, required: true },
    intensity: { type: Number, required: true },
    notes: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Mood', moodSchema);