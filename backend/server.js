require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const connectDB = require('./config/connect');
connectDB();


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

app.get(["/", "/home"], (req, res) => {

    res.send("Connected");
})

app.listen(3000, () => {
    console.log("Listening at port 3000");
})