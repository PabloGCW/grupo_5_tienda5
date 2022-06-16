const express = require ("express");
const router = express.Router();
const mainController = require("../controllers/usersController")
const {body} = require('express-validator')

const validations = [
    body('address').notEmpty().withMessage('Debes llenar este campo'),
    body('CP').notEmpty().withMessage('Debes llenar este campo'),
    body('email').notEmpty().withMessage('Debes llenar este campo'),
    body('mobile').notEmpty().withMessage('Debes llenar este campo'),
    body('name').notEmpty().withMessage('Debes llenar este campo'),
    body('lastName').notEmpty().withMessage('Debes llenar este campo'),
    body('DNI').notEmpty().withMessage('Debes llenar este campo'),
    body('password').notEmpty().withMessage('Debes llenar este campo'),
]

router.get("/registrarse", mainController.register);
router.post("/registrarse", validations, mainController.processRegister);


router.get("/login", mainController.login);

module.exports = router;