const express = require ("express");
const router = express.Router();
const mainController = require("../controllers/usersController")
const {body} = require('express-validator')

const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/usersAvatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

const uploadFile = multer({ storage });



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

router.get('/', mainController.users)
router.get("/registrarse", mainController.register);
router.post("/registrarse", uploadFile.single('avatar'), validations, mainController.processRegister);


router.get("/login", mainController.login);

module.exports = router;