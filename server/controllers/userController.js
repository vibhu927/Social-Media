const User = require('../models/User');

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
    console.log(req.body);
    const response = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (response) {
      res.status(200).json(response);
    } else {
      res.status(401).json({ error: 'Invalid username or password' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to login user' });
  }
}

module.exports = {
    createUser,
    loginUser
}