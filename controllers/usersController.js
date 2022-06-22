const bcryptjs = require('bcryptjs')
const User = require('../models/User');
const {validationResult} = require('express-validator')

const mainController = {
    users: (req, res)=>{
        res.render ("users/users")
    },
    login: (req, res)=>{
        res.render ("users/login")
    },
    register: (req, res)=>{
        res.render ("users/register")
    },
    processRegister: (req, res)=>{
        const resultValidation = validationResult(req)
        if (resultValidation.errors.length > 0 ){
            return res.render('users/register', {
                errors:resultValidation.mapped(), 
                oldData:req.body
            })
        }

        let userInDB = User.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('users/register', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

        let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password,12),
			avatar: req.file.filename
		}

		let userCreated = User.create(userToCreate);

		return res.redirect('/Usuarios/login');

    }
}

module.exports = mainController