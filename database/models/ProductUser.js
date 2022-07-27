// const { DataTypes } = require("sequelize/types");

// module.exports = (sequelize, DataTypes) => {
//     let alias = 'Products_Users'
//     let cols = {
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true,
//             allowNull: false
//         },
//         Products_Id:{
//             type: DataTypes.INTEGER,
//             foreignKey: true,
//             allowNull: false
//         },
//         Users_Id:{
//             type: DataTypes.INTEGER,
//             foreignKey: true,
//             allowNull: false
//         },
//         Cant:{
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         Sale:{
//             type: DataTypes.DATE,
//             allowNull: false
//         }
//     }
//     let config = {
//         tableName: 'Products_Users',
//         timestamps: false
//     }
//     const Products_Users = sequelize.define(alias, cols, config);
//     return Products_Users
// }