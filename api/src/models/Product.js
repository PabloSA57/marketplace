const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
        sequelize.define('product', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imgurl:{
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}