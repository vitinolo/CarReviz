const mongoose = require("mongoose");

const carSchema = mongoose.Schema(
    {
        make: {
            type: String,
            required: false,
        },
        model: {
            type: String,Number,
            required: false,
        },
        year: {
            type: Number,
            required: false,
        },
        numberplate: {
            type: String,
            required: true,
        },
        repairs: {
            type: [String],
        },
        nextrevision: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('car', carSchema);