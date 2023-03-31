const express = require('express');
const { setCars } = require('../controllers/car.controller');
const router = express.Router();


router.get("/", (req,res) => {
    res.json({ message: "voici les données" });
});
router.post("/", setCars);

router.put("/:id", (req,res) => {
    res.json({ messageId: req.params.id });
});
router.delete("/:id", (req,res) => {
    res.json({ message: "Car supprimé id : " +req.params.id });
});


module.exports = router