const express = require('express');
const router = express.Router();
const usersAPIController = require('../../controllers/api/usersAPIController');

//Rutas
//Listado de todos los usuarios
router.get('/', usersAPIController.list);
//Detalle del usuario
router.get('/:id', usersAPIController.detail);
//En que peliculas trabajo el actor con id tal ???????????????????????????????????
//router.get('/:id', usersAPIController.userCategory);

module.exports = router;

