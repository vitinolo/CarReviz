const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({   
    make: { type: String, required: false },
    model: { type: String,Number, required: false  },
    year: { type: Number, required: false },
    numberplate: { type: String, required: true },
    repairs: { type: [String], required: false },
    ctdate: { type: String, required: false },
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('car', carSchema);