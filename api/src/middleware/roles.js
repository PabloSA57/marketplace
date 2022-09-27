const express = require('express');
const jwt = require('jsonwebtoken');

const roles = express.Router();

module.exports =  (role) => async (req, res) => {
    const user = req._user.user;

    if(user.role === role) {
        return next()
    }
    return res.status(403).json({msg: "You do not have authorization to access"})
}

