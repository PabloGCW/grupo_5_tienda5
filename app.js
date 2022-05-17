const express = require("express");
const app = express();
const mainRoutes = require("./routes/main.js");
const usersRoutes = require("./routes/users.js");
const productsRoutes = require("./routes/products.js");

app.use(express.static("public"));


app.set("view engine", "ejs");

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.use("/", mainRoutes)
app.use("/users", usersRoutes)
app.use("/products", productsRoutes)



