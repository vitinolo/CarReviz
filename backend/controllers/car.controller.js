const CarModel = require('../models/car.model');

module.exports.getCars = async (req, res) => {
  const cars = await CarModel.find();
  res.status(200).json(cars); 
};
module.exports.setCars = async (req, res) => {
    if (!req.body.numberplate){
        res.status(400).json({ message: "Merci de rentrer le numéro d'immatriculation"});
    }
    const car = await CarModel.create({
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        numberplate: req.body.numberplate,
        repairs: req.body.repairs,
        nextrevision: req.body.nextrevision,
    })
    res.status(200).json(car); 
};
module.exports.editCar = async (req, res) => {
    const car = await CarModel.findById(req.params.id)
    if(!car) {
        res.status(400).json({ message: "véhicule non trouvé" });
    }
    const updateCar = await CarModel.findByIdAndUpdate(
        car, 
        req.body,
        {new: true}
    )
    res.status(200).json(updateCar);
};
module.exports.deleteCar = async (req,res) => {
    const car = await CarModel.findById(req.params.id)
    if(!car) {
        res.status(400).json({ message: "véhicule non trouvé" });
    }
    await car.deleteOne();
    res.status(200).json("Véhivule supprimé: " + req.params.id);
};
module.exports.repairsCar = async (req, res) => {
    try {
        await CarModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { repairs: req.body.repairs}},
            { new: true}
        ).then((data) => res.status(200).send(data));
    } catch (err) {
        res.status(400).json(err);
    }
};
        


