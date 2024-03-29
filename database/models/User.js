// const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = 'User'
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userCategoryId: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: true
        },
        cp:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        mobile:{
            type: DataTypes.INTEGER,
            allowNull: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        dni:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        avatar:{
            type: DataTypes.STRING,
            allowNull: true
        }
    }
    let config = {
        tableName: 'users',
        timestamps: false
    }
    const User = sequelize.define(alias, cols, config);

    User.associate = function (models) {
        User.belongsTo(models.UserCategory, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "usersCategories",
            foreignKey: 'userCategoryId',
            timestamps: false
        })

        User.belongsToMany(models.Product, { // models.Movie -> Movies es el valor de alias en movie.js
            as: "products",
            through: 'productsusers',
            foreignKey: 'userId',
            otherKey: 'productId',
            timestamps: false
        })
        
    }
    return User
}
