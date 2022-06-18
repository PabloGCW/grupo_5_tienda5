const path = require('path');
const {body} = require('express-validator');

const validations = [
    body('address').notEmpty().withMessage('Debes llenar este campo'),
    body('CP').notEmpty().withMessage('Debes llenar este campo'),
    body('email').notEmpty().withMessage('Debes llenar este campo').bail()
                 .isEmail().withMessage('No es un correo válido'),
    body('mobile').notEmpty().withMessage('Debes llenar este campo'),
    body('name').notEmpty().withMessage('Debes llenar este campo'),
    body('lastName').notEmpty().withMessage('Debes llenar este campo'),
    body('DNI').notEmpty().withMessage('Debes llenar este campo'),
    body('password').notEmpty().withMessage('Debes llenar este campo'),
]


module.exports = validations;