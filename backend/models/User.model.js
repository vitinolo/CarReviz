const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: false },
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    created_at : { type: Date, required: true, default: Date.now() },
    isAdmin: { type: Boolean, required: false, default: false}
});

module.exports = mongoose.model('User', userSchema);