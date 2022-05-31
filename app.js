const express = require("express");
const app = express();
const mainRoutes = require("./routes/main.js");
const usersRoutes = require("./routes/users.js");
const productsRoutes = require("./routes/products.js");
const { json } = require("express/lib/response");

app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));
app.use(express.json());


app.set("view engine", "ejs");

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.use("/", mainRoutes)
app.use("/users", usersRoutes)
app.use("/products", productsRoutes)



