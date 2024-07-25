const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// define schema for activity
const activitySchema = new Schema({
    activityType: { type: String, required: true },
    duration: { type: String, required: true },
    description: { type: String },
    user_id: { type: String, required: true}
}, { timestamps: true });

module.exports = mongoose.model('Activity', activitySchema);
