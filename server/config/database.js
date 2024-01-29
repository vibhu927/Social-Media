const mongoose = require("mongoose");
const url = "mongodb+srv://admin:admin123*@app.s8jolhu.mongodb.net/";

  
  mongoose.connect(url)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
  
  module.exports = mongoose;
