const express = require('express');
   const mongoose = require('mongoose');
   const cors = require('cors');

   const app = express();
   const PORT = process.env.PORT || 5000;

   app.use(cors());
   app.use(express.json());

   mongoose.connect('mongodb://localhost:27017/', { useNewUrlParser: true, useUnifiedTopology: true })
     .then(() => console.log('MongoDB connected'))
     .catch(err => console.log(err));

   app.get('/', (req, res) => {
     res.send('Hello World');
   });

   const userRoutes = require('./routes/users');

   app.use('/api', userRoutes);
   


   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`);
   });
   
