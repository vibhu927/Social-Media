const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const userController = require("./controllers/userController");
const db = require('./config/database');
const userRoutes = require('./routes/userRoutes');

app.use(cors());
app.use(bodyParser.json());
app.use('/users', userRoutes);

app.get('/', (req, res)=>{
   res.json({message:"Home route loaded successfully"})
})

app.listen(8080, ()=>{
    console.log("listening");
});

