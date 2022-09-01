const bcryptjs = require('bcryptjs')
const db = require('../database/models');
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

        let userEmail = req.body.email
        Users.findOne({where: {email: userEmail}})
		.then( user => {
            if (user!==null) {
                return res.render('users/register', {
                    errors: {
                        email: {
                            msg: 'Este email ya está registrado'
                        }
                    },
                    oldData: req.body
                });
            } else {
                Users.create({
                    ...req.body,
                    password: bcryptjs.hashSync(req.body.password,12),
                    avatar: req.file.filename                 
                })
        
                    .then( () => {
                        res.redirect("/Usuarios/login")
                    })
                    .catch(function(err) {
                        console.log(err);
                    });

            }
    })
       
    },


    loginProcess: (req, res) => {
        let userEmail = req.body.email
		Users.findOne({where: {email: userEmail}})
            .then( user => {
                if(user) {
                let isOkThePassword = bcryptjs.compareSync(req.body.password, user.password);
                if (isOkThePassword) {
                    delete user.password;
                    req.session.userLogged = user;
    
                    if(req.body.remember_user) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
                    }
                    
                        return res.redirect('/Usuarios/perfil');
                   
                    
                } 
                return res.render('users/login', {
                    errors: {
                        email: {
                            msg: 'La contraseña es inválida'
                        }
                    }
                    
                });
            }
                return res.render('users/login', {
                errors: {
                    email: {
                        msg: 'Este email no se encuentra registrado'
                    }
                }
                
            });
        })
        .catch(function(err) {
            // print the error details
            console.log(err);
        });

    },


    profile: (req, res)=>{
		
        res.render ("users/profile", {user: req.session.userLogged})

    },

	logout: (req, res)=>{
        res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
    }
}

module.exports = mainController