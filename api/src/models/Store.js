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
        lat: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        lon: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        imgurl: {
            type: DataTypes.STRING,
            allowNull: true
        },
        number_phone: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        }
    })
}