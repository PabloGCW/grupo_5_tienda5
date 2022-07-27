const fs = require('fs');
const path = require('path');

// const productsFilePath = path.resolve('./data/productsDataBase.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const mainController = {
    
    index: (req, res) => {
        res.render("main/index")
}
}
module.exports = mainController