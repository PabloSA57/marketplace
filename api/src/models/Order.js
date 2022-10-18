const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
        sequelize.define('order', {
        id:{
            type: DataTypes.STRING,
            primaryKey: true,
        },
        date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        amount:{
            type: DataTypes.DOUBLE
        },
        state: {
            type: DataTypes.STRING
        },
        num_voucher: {
            type: DataTypes.STRING,
            allowNull: false
        },
        type_payment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        delivery: {
            type: DataTypes.BOOLEAN,

        }
    })
}