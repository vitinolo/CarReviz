const CarModel = require('../models/Car.model');

//création fiche véhicule
module.exports.setCars = async (req, res) => {
    if (!req.body.numberplate){
        res.status(400).json({ message: "Merci de rentrer le numéro d'immatriculation"});
    }
    const car = await CarModel.create({
        user: req.body.userId,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        numberplate: req.body.numberplate,
        repairs: req.body.repairs,
        ctdate: req.body.ctdate,
    })
    res.status(201).json(car); 
};
//voir tous les véhicules
module.exports.getCars = async (req, res) => {
  const cars = await CarModel.find();
  res.status(200).json(cars); 
};
//voir un véhicule en particulier
module.exports.getOneCar = async(req, res, next) => {
    CarModel.findOne({ _id: req.params.id })
      .then((car) => {
        res.status(200).json({car});
      })
      .catch((error) => {
        res.status(404).json({ error });
      });
  };
  //modifier fiche d'un véhicule
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
//supprimer la fiche d'un véhicule
module.exports.deleteCar = async (req,res) => {
    const car = await CarModel.findById(req.params.id)
    if(!car) {
        res.status(400).json({ message: "véhicule non trouvé" });
    }
    await car.deleteOne();
    res.status(200).json("Véhivule supprimé: " + req.params.id);
};

//ajouter des révisions sur la fiche d'un véhicule     
module.exports.repairsCar = (req, res) => {
    CarModel.findOne({ _id: req.params.id })
    .then((car) => {
      const {repair} = ({
      repair: req.body.repair,
      })
      car.repairs.push(repair);
      console.log(car);
      car.save();
      res.status(200).json({ car })
      })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

