const express = require('express');
const { registerVolunteer, registerOrganization, loginUser, getVolunteers } = require('../controllers/volunteerController');

const router = express.Router();

router.post('/register/volunteer', registerVolunteer);
router.post('/register/organization', registerOrganization);
router.post('/login', loginUser);
router.get('/volunteers', getVolunteers);

module.exports = router;
