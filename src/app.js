const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/userdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('MongoDB connection failed:', err));

// User model
const User = require('./models/user');

// Route to create a user
app.post('/users', async (req, res) => {
    const { name, email } = req.body;
    const user = new User({ name, email });
    await user.save();
    res.status(201).send(user);
});

app.listen(3000, () => console.log('Server running on port 3000'));
