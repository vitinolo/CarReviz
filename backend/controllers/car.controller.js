const CarModel = require('../models/Car.model');

//création fiche véhicule
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
/*
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
*/ 
//ajouter des révisions sur la fiche d'un véhicule     
module.exports.repairsCar = async (req, res) => {
    const cars = await CarModel.find();
    res.status(200).json(cars); 
    Post.findOne({ _id: req.params.id })
      .then((post) => {
          const userId = req.body.userId;
          const userHasAlreadyLiked = post.usersLiked.includes(userId);
  
          if (!userHasAlreadyLiked) {
            post.usersLiked.push(userId);
          }else{
            const index = post.usersLiked.findIndex(a => a == userId);
            post.usersLiked.splice(index, 1)
          }
          post.likes = post.usersLiked.length;
          post.save();
          res.status(200).json({ post })
      })
      .then((post) => res.status(200).json(post))
      .catch((error) => {
        res.status(500).json({ error });
      });
  };

