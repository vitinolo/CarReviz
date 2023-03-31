const CarModel = require('../models/car.model');

module.exports.setCars = async (req, res) => {
    
    const car = await CarModel.create({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        repairs: req.body.repairs,
    })
    res.status(200).json(car);

    
};
