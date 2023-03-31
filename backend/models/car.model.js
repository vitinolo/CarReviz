const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
    {
        make: {
            type: String,
            required: true,
        },
        model: {
            type: String,Number,
            required: true,
        },
        year: {
            type: Number,
            required: true,
        },
        repairs: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: false,
    }
);

module.exports = mongoose.model('car', carSchema);