const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Users = db.User;
//const UserCategories = db.UserCategory;

//---------------------------
//Dentro del usersAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const usersAPIController = {
    'list': (req, res) => {
        db.User.findAll()
        .then(users => {
            
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: '/api/users'
                },
                data: users.map((user, i) => {
                    return ("id" + ": " + user.id + "   " +
                    "nombre" + ": " + user.name + "   " +
                    "email" + ": " + user.email + "   " +
                    "link" + ": " + "http://localhost:3000/APIUsuarios/"+user.id)}),

            }
                res.status(200).json(respuesta);
        })
    },
    
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        url: '/api/users/:id'
                    },
                    data: "id" + ": " + user.id + "   " + "nombre" + ": " + user.name + "   " + "email" + ": " + user.email + "   " + "avatar" + ": " + __dirname+user.avatar
                }
                res.status(200).json(respuesta);
            });
    }

    // 'userCategory': (req, res) => {
    //     db.User.findByPk(req.params.id,{
    //         include: ['users']
    //     })
    //         .then(user => {
    //             let respuesta = {
    //                 meta: {
    //                     status: 200,
    //                     total: user.length,
    //                     url: '/api/users/:id'
    //                 },
    //                 data: user
    //             }
    //             res.status(200).json(respuesta);
    //         });
    // },
    // create: (req,res) => {
    //     Users
    //     .create(
    //         {
    //             first_name: req.body.first_name,
    //             last_name: req.body.last_name,
    //             rating: req.body.rating,
    //             favorite_movie_id: req.body.favorite_movie_id
    //         }
    //     )
    //     .then(confirm => {
    //         let respuesta;
    //         if(confirm){
    //             respuesta ={
    //                 meta: {
    //                     status: 200,
    //                     total: confirm.length,
    //                     url: 'api/actors/create'
    //                 },
    //                 data:confirm
    //             }
    //         }else{
    //             respuesta ={
    //                 meta: {
    //                     status: 200,
    //                     total: confirm.length,
    //                     url: 'api/actors/create'
    //                 },
    //                 data:confirm
    //             }
    //         }
    //         res.json(respuesta);
    //     })    
    //     .catch(error => res.send(error))
    // },
    // update: (req,res) => {
    //     let actorId = req.params.id;
    //     Actors.update(
    //         {
    //             first_name: req.body.first_name,
    //             last_name: req.body.last_name,
    //             rating: req.body.rating,
    //             favorite_movie_id: req.body.favorite_movie_id,
    //         },
    //         {
    //             where: {id: actorId}
    //     })
    //     .then(confirm => {
    //         let respuesta;
    //         if(confirm){
    //             respuesta ={
    //                 meta: {
    //                     status: 200,
    //                     total: confirm.length,
    //                     url: 'api/actors/update/:id'
    //                 },
    //                 data:confirm
    //             }
    //         }else{
    //             respuesta ={
    //                 meta: {
    //                     status: 204,
    //                     total: confirm.length,
    //                     url: 'api/actors/update/:id'
    //                 },
    //                 data:confirm
    //             }
    //         }
    //         res.json(respuesta);
    //     })    
    //     .catch(error => res.send(error))
    // },
    // destroy: (req,res) => {
    //     let actorId = req.params.id;
    //     Actors
    //     .destroy({where: {id: actorId}, force: true}) // force: true es para asegurar que se ejecute la acción
    //     .then(confirm => {
    //         let respuesta;
    //         if(confirm){
    //             respuesta ={
    //                 meta: {
    //                     status: 200,
    //                     total: confirm.length,
    //                     url: 'api/actors/delete/:id'
    //                 },
    //                 data:confirm
    //             }
    //         }else{
    //             respuesta ={
    //                 meta: {
    //                     status: 204,
    //                     total: confirm.length,
    //                     url: 'api/actors/delete/:id'
    //                 },
    //                 data:confirm
    //             }
    //         }
    //         res.json(respuesta);
    //     })    
    //     .catch(error => res.send(error))
    // }
    
}

module.exports = usersAPIController;