const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
        sequelize.define('detailorder', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        precio:{
            type: DataTypes.INTEGER
        },
        quantity: {
            type: DataTypes.FLOAT
        }
    })
}