const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve("./public")));

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.get("/", (req, res) =>{
    res.sendFile(path.resolve("./views/index.html"));
})

app.post("/", (req, res) => {
    res.sendFile(path.resolve("./views/index.html"));
})

app.get("/Registrarse", (req, res) => {
    res.sendFile(path.resolve("./views/register.html"));
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve("./views/login.html"));
})

app.get("/Carrito", (req, res) => {
    res.sendFile(path.resolve("./views/productCart.html"));
})

app.get("/DetalleProducto", (req, res) => {
    res.sendFile(path.resolve("./views/productDetail.html"))
})

