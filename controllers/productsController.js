const mainController = {

    productCart:(req, res)=>{
        res.render ("products/productCart")
    },
    productDetail:(req, res)=>{
        res.render ("products/productDetail")
    },
    productSend:(req, res)=>{
        res.render ("products/productSend")
    }
}

module.exports = mainController