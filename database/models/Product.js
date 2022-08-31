// const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = 'Product'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: true
        },
        productCategoryId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: true
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true
        },
        feature:{
            type: DataTypes.TEXT,
            allowNull: true
        },
        image:{
            type: DataTypes.STRING,
            allowNull: true
        },
        price:{
            type: DataTypes.DECIMAL(8,2),
            allowNull: true
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: true
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
        tableName: 'products',
        timestamps: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function (models) {
        Product.belongsTo(models.ProductCategory, { 
            as: "productsCategories",
            foreignKey: 'productCategoryId',
            timestamps: false
        })

        Product.belongsToMany(models.User, { 
            as: "users",
            through: 'productsusers',
            foreignKey: 'productId',
            otherKey: 'userId',
            timestamps: false
        })
        
    }

    

    return Product
}

