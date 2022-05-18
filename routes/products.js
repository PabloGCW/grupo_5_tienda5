const express = require ("express");
const router = express.Router();
const mainController = require("../controllers/productsController")


router.get("/carrito", mainController.productCart);

router.get("/productSend", mainController.productSend);

router.get("/detalleProducto", mainController.productDetail);

router.get("/creacionProducto", mainController.productCreate);

router.get("/edicionProducto", mainController.productEdition);



module.exports = router;