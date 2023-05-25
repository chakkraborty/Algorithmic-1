// const express = require("express");
// const app = express();

// app.get(["/"], (req, res) => {
//   res.send("Hello");
// });

// app.listen(5000, () => {
//   console.log("Listening at port 5000");
// });

const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const dotenv = require("dotenv");

const connectDB = require("./config/db");
dotenv.config();
app.use(express.json());
app.listen(PORT, console.log(`server is running on port no. ${PORT}`));
connectDB();
app.get("/", (req, res) => {
  res.send("api is running here...");
});
