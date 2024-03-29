const express = require("express");
const mainRoutes = require("./routes/main.js");
const usersRoutes = require("./routes/users.js");
const productsRoutes = require("./routes/products.js");

// agregué la api
const usersAPIRoutes = require("./routes/api/users.js");
const productsAPIRoutes = require("./routes/api/products.js");
const productsCategoriesAPIRoutes = require("./routes/api/productsCategories.js");

const { json, cookie } = require("express/lib/response");
const methodOverride = require("method-override")
const session = require('express-session');
const cookies = require('cookie-parser');

const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');




// app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({
	secret: "Es una palabra secreta",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());
app.use(userLoggedMiddleware);
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));




app.set("view engine", "ejs");

app.listen(3002, () => console.log("Servidor corriendo en el puerto 3002"));

app.use("/", mainRoutes)
app.use("/Usuarios", usersRoutes)
app.use("/Productos", productsRoutes)

// acá agregué lo de la api
app.use("/APIUsuarios", usersAPIRoutes)
app.use("/APIProductos", productsAPIRoutes)
app.use("/APICategoriaProductos", productsCategoriesAPIRoutes)


