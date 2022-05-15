const path = require("path");

const mainController = {
    index: (req, res) => {
        res.render("index")
    },
    productCart:(req, res)=>{
        res.render ("productCart")
    },
    productDetail:(req, res)=>{
        res.render ("productDetail")
    },
    productSend:(req, res)=>{
        res.render ("productSend")
    },
    login: (req, res)=>{
        res.render ("login")
    },
    register: (req, res)=>{
        res.render ("register")
    },
    // post:(req, res)=>{
    //     res.sendFile (path.resolve ("/views/home.html"))
    // }
}

module.exports = mainController