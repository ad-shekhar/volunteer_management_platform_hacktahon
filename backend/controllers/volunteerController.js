const { Volunteer, Organization } = require('../model/sing_up_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

const registerOrganization = async (req, res) => {
    const { username, organizationName, email, password } = req.body;

    try {
        const existingOrganization = await Organization.findOne({ email });
        if (existingOrganization) return res.status(400).json({ message: 'Organization already exists' });

        const hashedPassword = await bcrypt.hash(password, 12);

        const newOrganization = await Organization.create({
            username,
            organizationName,
            email,
            password: hashedPassword
        });

        res.status(201).json(newOrganization);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};

const loginUser = async (req, res) => {
    const { email, password, userType } = req.body;

    try {
        const User = userType === 'volunteer' ? Volunteer : Organization;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ email: user.email, id: user._id, userType }, 'test', { expiresIn: '1h' });

        res.status(200).json({ result: user, token });
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

module.exports = { registerVolunteer, registerOrganization, loginUser, getVolunteers };
