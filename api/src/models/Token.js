const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('token', {
        access_token:{
            type: DataTypes.STRING,
        },
        refresh_token: {
            type: DataTypes.STRING
        },
        public_key: {
            type: DataTypes.STRING
        }
    })
}