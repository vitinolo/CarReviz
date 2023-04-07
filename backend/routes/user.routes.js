const express = require("express");
const {signup, login, getAllUser, getOneUser } = require('../controllers/user.controller');
const router = express.Router();

const password = require("../middleware/password");
//const auth = require("../middleware/auth");

router.post("/signup", password,  signup);
router.post("/login", login);
router.get("/", getAllUser);
router.get("/:id", getOneUser);

module.exports = router;