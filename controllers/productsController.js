const mainController = {

    productCart:(req, res)=>{
        res.render ("products/productCart")
    },
    productDetail:(req, res)=>{
        res.render ("products/productDetail")
    },
    productSend:(req, res)=>{
        res.render ("products/productSend")
    },
    productCreate:(req, res)=>{
        res.render ("products/productCreate")
    },
    productEdition:(req, res)=>{
        res.render ("products/productEdit")
    }
}

module.exports = mainController