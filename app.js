const express = require("express");
const mainRoutes = require("./routes/main.js");
const usersRoutes = require("./routes/users.js");
const productsRoutes = require("./routes/products.js");
const { json, cookie } = require("express/lib/response");
const methodOverride = require("method-override")
const session = require('express-session');
const cookies = require('cookie-parser');

const app = express();

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');




app.use(express.json());
app.use(methodOverride("_method"));
app.use(session({
	secret: "Es un palabra secreta",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies())


app.use(userLoggedMiddleware);
app.use(express.urlencoded({extended: false}));
app.use(express.static("public"));




app.set("view engine", "ejs");

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.use("/", mainRoutes)
app.use("/Usuarios", usersRoutes)
app.use("/Productos", productsRoutes)



