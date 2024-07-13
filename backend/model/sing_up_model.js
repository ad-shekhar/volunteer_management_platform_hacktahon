const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const OrganizationSchema = new mongoose.Schema({
    username: { type: String, required: true },
    organizationName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const Volunteer = mongoose.model("Volunteer", VolunteerSchema);
const Organization = mongoose.model("Organization", OrganizationSchema);

module.exports = { Volunteer, Organization };
