const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const carSchema = Schema({ 
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: false
      },  
    make: { type: String, required: false },
    model: { type: String,Number, required: false  },
    release: { type: String, required: false },
    numberplate: { type: String, required: true },
    repair: { type: String, required: false},
    repairs: { type: [String], required: false },
    ctdate: { type: String, required: false },
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('Car', carSchema);