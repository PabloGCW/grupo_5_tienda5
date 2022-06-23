const path = require('path');


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
    body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];
		
		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]
module.exports = validations;