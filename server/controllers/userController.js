const User = require('../models/User');

async function createUser(req, res, next) {
    try {
        console.log("Entered Create User function");
        console.log(req)
        const newUser = await User.create(req.query);
        res.status(201).json(newUser);
      } catch (error) {
        res.status(400).json({ error: 'Failed to create user' });
      }
}

module.exports = {
    createUser
}