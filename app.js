const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve("./public")));

app.listen(3000, () => console.log("Servidor corriendo en el puerto 3000"));

app.get("/", (req, res) =>{
    res.sendFile(path.resolve("./views/home.html"));
})

