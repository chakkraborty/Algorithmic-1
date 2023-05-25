const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const connect = require("./config/connect");
const problemRoutes = require("./routes/problemRoutes");
connect();
app.use(express.json());
app.get(["/"], (req, res) => {
  res.send("Connected");
});
app.use("/api", problemRoutes);

app.listen(5000, () => {
  console.log("Listening at port 5000");
});
