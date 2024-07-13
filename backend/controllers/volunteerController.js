const Volunteer = require('../model/sing_up_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const registerVolunteer = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const existingVolunteer = await Volunteer.findOne({ email });
        if (existingVolunteer) return res.status(400).json({ message: 'Volunteer already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newVolunteer = await Volunteer.create({
            username,
            email,
            password: hashedPassword
        });

        res.status(201).json(newVolunteer);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const loginVolunteer = async (req, res) => {
    const { email, password } = req.body;

    try {
        const volunteer = await Volunteer.findOne({ email });
        if (!volunteer) return res.status(404).json({ message: 'Volunteer not found' });

        const isPasswordCorrect = await bcrypt.compare(password, volunteer.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ email: volunteer.email, id: volunteer._id, username: volunteer.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ result: volunteer, token });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const getVolunteers = async (req, res) => {
    try {
        const volunteers = await Volunteer.find();
        res.status(200).json(volunteers);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

module.exports = { registerVolunteer, loginVolunteer, getVolunteers };
