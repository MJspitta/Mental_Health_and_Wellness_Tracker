const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    goalType: { type: String, required: true },
    target: { type: String, required: true },
    description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalSchema);