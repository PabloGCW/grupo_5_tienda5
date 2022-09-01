const express = require('express');
const router = express.Router();
const categoryAPIController = require('../../controllers/api/categoryAPIController');

//Rutas
//Listado de todos los usuarios
router.get('/', categoryAPIController.list);
//Detalle del usuario
//router.get('/:id', usersAPIController.detail);
//En que peliculas trabajo el actor con id tal ???????????????????????????????????
//router.get('/:id', usersAPIController.userCategory);

module.exports = router;

