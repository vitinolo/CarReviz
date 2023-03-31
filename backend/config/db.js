const mongoose = require("mongoose");

async function connectDB () {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connecté");
    } catch (err) {
        console.log(err);
        process.exit();
    }
};

module.exports = connectDB;