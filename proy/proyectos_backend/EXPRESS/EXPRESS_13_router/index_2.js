const express = require("express");

const app = express();

const HomeRoutes = require("./home_2");
const UserRoutes = require("./users_2");

app.use(HomeRoutes);
app.use(UserRoutes);

app.listen(3000);
console.log("Servidor no porto 3000");
