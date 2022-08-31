const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');


//Aqui tienen otra forma de llamar a cada uno de los modelos
const Products = db.Product;
//const ProductsCategories = db.ProductCategory;

//---------------------------
//Dentro del usersAPIController uso las dos forma de poder llamar a nuestros modelo
//----------------------------------
const productsAPIController = {
    'list': (req, res) => {
        db.Product.findAll()
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,

                    url: '/api/products'
                },
                data: products
            }
                res.status(200).json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id)
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/:id'
                    },
                    data: product
                }
                res.status(200).json(respuesta);
            });
    },

    'productCategory': (req, res) => {
        db.Product.findByPk(req.params.id,{
            include: ['productsCategories']
        })
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/:id'
                    },
                    data: product
                }
                res.status(200).json(respuesta);
            });
    }

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

module.exports = productsAPIController;