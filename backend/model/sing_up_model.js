const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const VolunteerModel = mongoose.model('Volunteer', VolunteerSchema);

module.exports = VolunteerModel;
