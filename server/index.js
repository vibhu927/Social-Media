const express = require("express");
const app = express();

const db = require('./config/database');

app.listen(8080, ()=>{
    console.log("listening");
});

