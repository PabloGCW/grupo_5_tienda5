const express = require ("express");
const router = express.Router();
const mainController = require("../controllers/mainController")

router.get("/", mainController.index);

router.get("/carrito", mainController.productCart);

router.get("/productSend", mainController.productSend);

router.get("/detalleProducto", mainController.productDetail);

// router.post("/", mainController.post);

router.get("/registrarse", mainController.register);

router.get("/login", mainController.login);

module.exports = router;
