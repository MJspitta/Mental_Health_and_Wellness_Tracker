const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalSchema = new Schema({
    goalType: { type: String, required: true },
    target: { type: String, required: true },
    description: { type: String },
    user_id: { type: String, required: true}
}, { timestamps: true });

module.exports = mongoose.model('Goal', goalSchema);