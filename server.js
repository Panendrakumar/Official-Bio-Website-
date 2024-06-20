// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/User');

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = 'mongodb+srv://panendra:<password>@atlascluster.losyfcv.mongodb.net/'; // Replace with your MongoDB connection URI

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Bodyparser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Route to handle user signup
app.post('/signup', (req, res) => {
  const { name, email, password } = req.body;

  // Simple validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  // Check for existing user
  User.findOne({ email })
    .then(user => {
      if (user) return res.status(400).json({ msg: 'User already exists' });

      const newUser = new User({
        name,
        email,
        password,
      });

      // Create salt & hash for password before saving in DB (bcrypt recommended)

      newUser.save()
        .then(user => res.json({ user }))
        .catch(err => console.log(err));
    });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
