const express = require("express");
const connectDB = require("./config/db");
const dotenv = require('dotenv').config();
const port = 5000;
const app = express();
//connexion à la db
connectDB();

// cors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});



//midleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/car", require("./routes/car.routes"));
app.use("/user", require("./routes/user.routes"));


//lancer le serveur
app.listen(port, () => console.log("le serveur à démarré au port " + port))