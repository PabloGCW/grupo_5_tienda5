const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = 'ProductsCategories'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        }

    }
    let config = {
        tableName: 'ProductsCategories',
        timestamps: false
    }
    const ProductCategory = sequelize.define(alias, cols, config);

    ProductCategory.associate = function (models) {
        ProductCategory.hasMany(models.Product, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "products",
            foreignKey: 'productCategoryId',
            timestamps: false
        })
    }
    return ProductCategory
}