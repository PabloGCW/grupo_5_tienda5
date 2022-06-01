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
    },
    productUpdate:(req,res) => {

        let id = req.params.id;
        let productEdited = products.find(element => element.id == id)

        let image
        if(req.files[0] != undefined){
			image = req.files[0].filename
		}
        else{
			image = productEdited.image
		}

        productEdited = {
            id: productEdited.id,
            ...req.body,
            image: image
        }

        let arrayEdited = products.map( element => {
            if(element.id == productEdited.id){
                return element = {...productEdited};
            }
            return element
        })

        fs.writeFileSync(productsFilePath, JSON.stringify(arrayEdited))

        res.redirect("/" + productEdited.id)

    },

    store: (req, res) => {

		let image
		if(req.files[0] != undefined){
			image = req.files[0].filename
		}
        // else{
		// 	image = "default-image.png"
		// }

		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body, 
			image: image
		}

		products.push(newProduct)

		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ''));
		
		res.redirect("/")

	}
}

module.exports = mainController