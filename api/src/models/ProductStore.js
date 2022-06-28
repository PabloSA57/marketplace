const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('productstore', {
        id:{
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        stock: {
            type: DataTypes.STRING,
            allowNull: true
        },
        precio: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}