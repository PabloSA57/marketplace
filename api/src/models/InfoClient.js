const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('infoclient', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        direction: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lat: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        lon: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        number_phone: {
            type: DataTypes.STRING,
        }
    })
}