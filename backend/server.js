const express = require("express");
const port = 5000;

const app = express();

//midleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/car", require("./routes/car.routes"));

//lancer le serveur
app.listen(port, () => console.log("le serveur à démaré au port " + port))