const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('store', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        ubicacion: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgurl: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}