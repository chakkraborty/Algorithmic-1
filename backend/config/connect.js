// require('dotenv').config();
const mongoose = require('mongoose');

module.exports = () => {
    const uri = "mongodb+srv://" + process.env.DB_username + ":" + process.env.DB_pass + "@cluster0.f2ykzwq.mongodb.net/ToDoListDB?retryWrites=true&w=majority";
    console.log("Connected to MongoDB");
    return mongoose.connect(uri, { useNewUrlParser: true });
}




