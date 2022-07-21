const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) => {
    let alias = 'Users'
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
        UsersCategory_Id: {
            type: DataTypes.INTEGER,
            foreignKey: true,
            allowNull: false
        },
        CP:{
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
        DNI:{
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
        tableName: 'Users',
        timestamps: false
    }
    const Users = sequelize.define(alias, cols, config);
    return Users
}