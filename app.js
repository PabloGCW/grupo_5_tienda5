const express = require("express");
const app = express();
const mainRoutes = require("./routes/main.js")

app.use(express.static("public"));


app.set("view engine", "ejs");

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.use("/", mainRoutes)


