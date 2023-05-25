const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const connect = require('./config/connect');

connect();

app.get(["/"], (req, res) => {
    res.send("Connected");
})

app.listen(3000, () => {
    console.log("Listening at port 3000");
})