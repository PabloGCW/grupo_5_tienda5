const express = require ("express");
const router = express.Router();

// Controlador
const mainController = require("../controllers/usersController")

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');


// Página de Usuarios
// router.get('/', mainController.users)

// // Formulario de Registro
// router.get("/registrarse", mainController.register);

// // Procesar el registro
// router.post("/registrarse", uploadFile.single('avatar'), validations, mainController.processRegister);

// // Formulario de login
// router.get("/login", guestMiddleware,mainController.login);

// // Procesar el login
// router.post('/login', mainController.loginProcess);

// // Perfil de Usuario
// router.get("/perfil", authMiddleware, mainController.profile);

// // Logout
// router.get('/logout/', mainController.logout);

// module.exports = router;