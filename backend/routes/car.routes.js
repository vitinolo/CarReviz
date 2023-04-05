const express = require('express');
const { setCars, getCars, getOneCar, editCar, deleteCar, repairsCar } = require('../controllers/car.controller');
const router = express.Router();

router.post("/", setCars);
router.get("/", getCars);
router.get("/:id", getOneCar);
router.put("/:id", editCar);
router.delete("/:id", deleteCar);
router.patch("/repair-car/:id", repairsCar);

module.exports = router