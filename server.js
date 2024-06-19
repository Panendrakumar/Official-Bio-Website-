// server.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Sample database (for demonstration purposes)
let users = [];

// Route to handle signup
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Check if email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
    }

    // If email doesn't exist, create new user
    const newUser = { name, email, password };
    users.push(newUser);

    // In a real application, you would save newUser to your database

    res.status(200).json({ message: 'Account created successfully', user: newUser });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
