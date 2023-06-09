require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//Handlebas
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

// Servir contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", { nombre: "Carlos Vallejo", titulo: "Curso de node" });
});

app.get("/generic", (req, res) => {
  res.render("generic", { nombre: "Carlos Vallejo", titulo: "Curso de node" });
  //res.sendFile(__dirname + "/public/generic.html");
});

app.get("/elements", (req, res) => {
  res.render("elements", { nombre: "Carlos Vallejo", titulo: "Curso de node" });
  //res.sendFile(__dirname + "/public/elements.html");
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log("Listening in port: ", port);
});
