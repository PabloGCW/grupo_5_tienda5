const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = 'UsersCategories'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        UsersType:{
            type: DataTypes.STRING,
            allowNull: false
        }

    }
    let config = {
        tableName: 'UsersCategories',
        timestamps: false
    }
    const UsersCategories = sequelize.define(alias, cols, config);
    return UsersCategories
}