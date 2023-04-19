const express = require('express');
const { setCars, getCars, getOneCar, editCar, deleteCar, repairsCar } = require('../controllers/car.controller');
const router = express.Router();

//profiles voitures
router.post("/", setCars);
router.get("/", getCars);
router.get("/:id", getOneCar);
router.put("/:id", editCar);
router.delete("/:id", deleteCar);

//données réparations
router.patch("/:id/repairs", repairsCar);

module.exports = router