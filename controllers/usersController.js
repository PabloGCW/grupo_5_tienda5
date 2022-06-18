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
        res.redirect('/')
    }
}

module.exports = mainController