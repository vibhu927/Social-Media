const mongoose = require("mongoose");
const options = {
     dbName:process.env.DATABASE_NAME,
}
  mongoose.connect(process.env.Database_URL, options)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
  
  module.exports = mongoose;
