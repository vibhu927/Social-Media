const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function createUser(req, res, next) {
    try {
        console.log("Entered Create User function");
        console.log(req.body)
        const newUser = await User.create(req.body);
        res.status(201).json(newUser);
        console.log("User created successfully");
      } catch (error) {
        res.status(400).json({ error: 'Failed to create user' });
      }
}

async function loginUser(req, res, next) {
  try {
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ error: 'Missing username or password' });
    }

    const user = await User.findOne({ username: req.body.username });

    if (!user || req.body.password != user.password) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    const responseData = {
      user: {
        id: user._id,
        username: user.username,
      },
      token,
    };

    res.status(200).json(responseData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to login user' });
  }
}

module.exports = {
    createUser,
    loginUser
}