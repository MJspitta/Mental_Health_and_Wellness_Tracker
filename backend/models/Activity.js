const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    activityType: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Activity', activitySchema);
