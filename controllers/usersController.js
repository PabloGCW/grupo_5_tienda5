const mainController = {
    
    login: (req, res)=>{
        res.render ("users/login")
    },
    register: (req, res)=>{
        res.render ("users/register")
    },
    processRegister: (req, res)=>{
        return res.send("Ok, viniste por POST")
    }
}

module.exports = mainController