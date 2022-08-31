const express = require('express');
const router = express.Router();
const productsAPIController = require('../../controllers/api/productsAPIController');

//Rutas
//Listado de todos los productos
router.get('/', productsAPIController.list);
//Detalle de un producto
router.get('/:id', productsAPIController.detail);
//En que peliculas trabajo el actor con id tal ???????????????????????????????????
//router.get('/:id', productsAPIController.userCategory);

module.exports = router;
