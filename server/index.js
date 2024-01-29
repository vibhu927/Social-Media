const express = require("express");
const app = express();
require("dotenv").config();//NEED TO ADD TO ACCESS ENV VARIBALES

const db = require('./config/database');

app.listen(process.env.PORT, ()=>{
    console.log("listen");
});

