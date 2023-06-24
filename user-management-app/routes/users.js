// routes/users.js
const express = require('express');
const router = express.Router();
const axios = require('axios');
const User = require('../models/User');

// Fetch users from the external API and save them to the database
router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://gorest.co.in/public-api/users', {
      headers: {
        Authorization: 'Bearer acbcee0eca3621aa6173d7be8c0441a0fc63d89fd8bccfcc458939c96a416795',
      },
    });

    const users = response.data.data;
    const savedUsers = [];
    await User.deleteMany({});
    for (const user of users) {
      const existingUser = await User.findOne({ id: user.id });

      if (existingUser) {
        // User already exists, update their data
        existingUser.name = user.name;
        existingUser.email = user.email;
        existingUser.gender = user.gender;
        existingUser.status = user.status;

        const updatedUser = await existingUser.save();
        savedUsers.push(updatedUser);
      } else {
        const newUser = new User({
          id: user.id,
          name: user.name,
          email: user.email,
          gender: user.gender,
          status: user.status,
        });

        const savedUser = await newUser.save();
        savedUsers.push(savedUser);
      }
    }

    res.json(savedUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

router.post('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;
      // Find the user by ID
      const user = await User.findOne({ id });
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update the user data
      user.name = updatedData.name;
      user.email = updatedData.email;
      user.gender = updatedData.gender;
      user.status = updatedData.status;
  
      const updatedUser = await user.save();
  
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred' });
    }
  });
  
  
  

module.exports = router;
