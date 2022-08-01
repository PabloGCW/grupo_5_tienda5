const bcryptjs = require('bcryptjs')
const db = require('../models/User');
const {validationResult} = require('express-validator')


const Products = db.Product;
const Users = db.User;
const UsersCategories = db.UserCategory;

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

        // let userInDB = User.findByField('email', req.body.email);
        let userEmail = req.body.email
        let userInDB = Users.findOne({where: {email: userEmail}})
        
        
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

        // let userToCreate = {
		// 	...req.body,
		// 	password: bcryptjs.hashSync(req.body.password,12),
		// 	avatar: req.file.filename
		// }

		// let userCreated = User.create(userToCreate);

        Users.create({
            password: bcryptjs.hashSync(req.body.password,12),
		    avatar: req.file.filename,
            ...req.body
        })

		    .then( user => {
                res.redirect("/Usuarios/login")
            })
	

		// return res.redirect('/Usuarios/login');

    },


//     loginProcess: (req, res) => {
// 		let userToLogin = User.findByField('email', req.body.email);
		
// 		if(userToLogin) {
// 			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
// 			if (isOkThePassword) {
// 				delete userToLogin.password;
// 				req.session.userLogged = userToLogin;

// 				if(req.body.remember_user) {
// 					res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
// 				}

// 				return res.redirect('/Usuarios/perfil');
// 			} 
// 			return res.render('users/login', {
// 				errors: {
// 					email: {
// 						msg: 'La contraseña es inválida'
// 					}
// 				}
                
// 			});
// 		}

// 		return res.render('users/login', {
// 			errors: {
// 				email: {
// 					msg: 'Este email no se encuentra registrado'
// 				}
// 			}
// 		});
// 	},


//     profile: (req, res)=>{
		
//         res.render ("users/profile", {user: req.session.userLogged})

//     },

// 	logout: (req, res)=>{
//         res.clearCookie('userEmail');
// 		req.session.destroy();
// 		return res.redirect('/');
//     }
}

module.exports = mainController