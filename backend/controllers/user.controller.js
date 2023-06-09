const User = require('../models/User.model');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//création fiche utilisateur
exports.signup = (req, res, next) => {
  bcrypt
    .hash(req.body.password, 10)
    .then((hash) => {
      const user = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hash,
      });
      user
        .save()
        .then(() => res.status(201).json({ message: "Utilisateur créé !" }))
        .catch((error) => res.status(400).json({ error }));
    })
};

//identification
module.exports.login = (req, res, next) => {
User.findOne({ email: req.body.email })
    .then((user) => {
    if (!user) {
        return res.status(401).json({ error: "Utilisateur non trouvé !" });
    }
    bcrypt
        .compare(req.body.password, user.password)
        .then((valid) => {
            if (!valid) {
            return res.status(401).json({ error: "Mot de passe incorrect !" });
            }
            res.status(200).json({
                userId: user._id,
                isAdmin: user.isAdmin,
                token: jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
                expiresIn: "24h",
                }),
            })    
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(500).json({ error }));
};

//voir toutes les users
module.exports.getAllUser = (req, res, next) => {
    User.find()
      .then((users) => {
        res.status(200).json(users);
      })
      .catch((error) => {
        res.status(400).json({ error });
      });
};

//sélection d'un user
module.exports.getOneUser = (req, res, next) => {
    User.findOne({ _id: req.params.id })
        .then((user) => {
        res.status(200).json(user);
        })
        .catch((error) => {
        res.status(404).json({ error });
        });
};