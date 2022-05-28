const fs = require('fs');
const path = require('path');

const productsFilePath = path.resolve('./data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainController = {

    productCart:(req, res)=>{
        res.render ("products/productCart")
    },
    productDetail:(req, res)=>{
        let id = req.params.id;
        let productoSeleccionado = products.find( element => element.id == id)


        res.render ("products/productDetail", {productoSeleccionado})
    },
    productSend:(req, res)=>{
        res.render ("products/productSend")
    },
    productCreate:(req, res)=>{
        res.render ("products/productCreate")
    },
    productEdition:(req, res)=>{
        let id = req.params.id;
        let productoSeleccionado = products.find( element => element.id == id)

        res.render ("products/productEdit", {productoSeleccionado})
    }
}

module.exports = mainController