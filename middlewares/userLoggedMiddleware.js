// const User = require('../models/User');
const db = require('../database/models');

const Users = db.User;

function userLoggedMiddleware (req, res, next){
    res.locals.isLogged = false;

	if(req.cookies.userEmail){
	let emailInCookie = req.cookies.userEmail;
	console.log(emailInCookie)


	Users.findOne({where: {email: emailInCookie}})
		.then( userFromCookie => {
			if (userFromCookie) {
				req.session.userLogged = userFromCookie;
			}
		
			if (req.session.userLogged) {
				res.locals.isLogged = true;
				res.locals.userLogged = req.session.userLogged;
			}
		})
		.catch(function(err) {
			console.log(err);
		})

	
}
next();
}

module.exports = userLoggedMiddleware;


