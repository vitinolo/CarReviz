const express = require("express");
const router = express.Router();
const password = require("../middleware/password");
const auth = require("../middleware/auth");
const {signup, login, getAllUser, getOneUser } = require('../controllers/user.controller');

router.post("/signup",password, signup);
router.post("/login", login);
router.get("/",auth, getAllUser);
router.get("/:id", auth, getOneUser);

module.exports = router;