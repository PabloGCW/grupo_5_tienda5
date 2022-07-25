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
    const UserCategory = sequelize.define(alias, cols, config);

    UserCategory.associate = function (models) {
        UserCategory.hasMany(models.User, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "users",
            foreignKey: 'usersCategoriesId',
            timestamps: false
        })
    }
    return UserCategory
}