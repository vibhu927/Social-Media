const mongoose = require("mongoose");
  mongoose.connect(process.env.Database_URL)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
  
  module.exports = mongoose;
