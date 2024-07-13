const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const routing = require('./routes/routing');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json()); // To parse incoming JSON requests

// Routes
app.use('/api/users', routing);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/volunteerApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Root Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Starting the Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
