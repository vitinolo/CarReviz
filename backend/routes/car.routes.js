const express = require('express');
const { setCars, getCars, editCar, deleteCar, repairsCar } = require('../controllers/car.controller');
const router = express.Router();


router.get("/", getCars);
router.post("/", setCars);
router.put("/:id", editCar);
router.delete("/:id", deleteCar);
router.patch("/repairs-car/:id", repairsCar)

module.exports = router