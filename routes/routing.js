const express = require('express');
const { registerVolunteer, loginVolunteer, getVolunteers } = require('../controllers/volunteerController');

const router = express.Router();

router.post('/register', registerVolunteer);
router.post('/login', loginVolunteer);
router.get('/', getVolunteers);

module.exports = router;