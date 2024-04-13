const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render('index', {
    pessoas: [{id:1, nome:"pepe", idade:'12'}, {id:2, nome:"pepa", idade:'14'}]
  })
});

app.listen(3000);
console.log("Servidor no porto 3000");