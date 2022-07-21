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
    const ProductsCategories = sequelize.define(alias, cols, config);
    return ProductsCategories
}