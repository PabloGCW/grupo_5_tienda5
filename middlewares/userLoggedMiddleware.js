// const User = require('../models/User');
const db = require('../database/models');

const Users = db.User;

function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;

	// let emailInCookie = req.cookies.userEmail;
    // let userFromCookie = 
	Users.findOne({where: {email: req.cookies.userEmail}})
		.then( userFromCookie => {
			if (userFromCookie) {
				req.session.userLogged = userFromCookie;
			}
		
			if (req.session.userLogged) {
				res.locals.isLogged = true;
				res.locals.userLogged = req.session.userLogged;
			}
		})

	next();
}

module.exports = userLoggedMiddleware;


