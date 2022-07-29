const fs = require('fs');
const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");

// const productsFilePath = path.resolve('./data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const Products = db.Product;
const Users = db.User;
const ProductsCategories = db.ProductCategory;


const mainController = {

    productMain: (req, res) => {
        Products.findAll()
            .then(products => {
                res.render("products/products", {products})
            })
            // .catch(error => {
            //     res.render("products/products", {products})
            // })
    },
    productCart:(req, res)=>{
        res.render ("products/productCart")
    },

    productDetail:(req, res)=>{
        Products.findByPk(req.params.id)
            .then(productoSeleccionado => {
                res.render ("products/productDetail", {productoSeleccionado});
            });
    },
    productSend:(req, res)=>{
        res.render ("products/productSend")
    },
    productCreate:(req, res)=>{
        res.render ("products/productCreate")
    },
    productEdition:(req, res)=>{
        let productId = req.params.id;
        let promiseProduct = Products.findByPk(productId, {include: ["productsCategories"]})
        let promiseProductCategory = ProductsCategories.findAll()

        Promise.all([promiseProduct, promiseProductCategory])

                .then(([product, productCategory]) => {
                    res.render ("products/productEdit", {product, productCategory})
                })
    },

    productUpdate:(req,res) => {

        let productId = req.params.id
        Products.update({
            ...req.body
        },{
            where: {id: productId}
        })

             .then( () => {
                res.redirect("/Productos")
             })

    },
    store: (req, res) => {

		Products.create({
            ...req.body
        })

		    .then( movie => {
                res.redirect("/Productos")
            })
	},

    productDelete: (req,res) => {

        let productId = req.params.id;
        Products.findByPk(productId)

             .then( (productoSeleccionado) => {
                res.render ("products/productDelete", {productoSeleccionado})
            })
    },

    productDeleted: (req,res) => {
        let productId = req.params.id
        Products.destroy({
            where: {id: productId}
        })
        .then( () => {
            res.redirect("/Productos")
        })
        }


}

module.exports = mainController