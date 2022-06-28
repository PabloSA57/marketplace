const express = require('express');
const jwt = require('jsonwebtoken');

const routerPrivate = express.Router();

routerPrivate.use((req, res, next) => {
    const token = req.headers['access-token'];
	console.log(token)
    if (token) {
    jwt.verify(token, 'pepe', (err, decoded) => {      
        if (err) {
        return res.status(404).json({ mensaje: 'Token inválida', err });    
        } else {
            console.log('correctoo jwt')
            req.decoded = decoded;    
            next();
        }
    });
    } else {
        res.send({ 
            mensaje: 'Token no proveída.' 
        });
    }
 });

module.exports = routerPrivate;