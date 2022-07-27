const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = 'Products'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        SKU: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ProductsCategory_id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true
        },
        features:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false
        },
        price:{
            type: DataTypes.DECIMAL(8,2),
            allowNull: false
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        offer:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        discount:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }
    let config = {
        tableName: 'Products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.ProductCategory, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "productsCategories",
            foreignKey: 'productCategoryId',
            timestamps: false
        })

        Product.belongsToMany(models.User, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "users",
            through: 'productsusers',
            foreignKey: 'productId',
            otherKey: 'userId',
            timestamps: false
        })
        
    }

    

    return Product
}

