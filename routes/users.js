const express = require ("express");
const router = express.Router();

// Controlador
const mainController = require("../controllers/usersController")

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');


// Página de Usuarios
router.get('/', mainController.users)

// Formulario de Registro
router.get("/registrarse", mainController.register);

// Procesar el registro
router.post("/registrarse", uploadFile.single('avatar'), validations, mainController.processRegister);

// Formulario de login
router.get("/login", mainController.login);

module.exports = router;