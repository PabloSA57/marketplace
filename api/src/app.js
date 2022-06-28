const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');

const cors = require('cors')

//require('./db.js');

const server = express();

server.name = 'API';

server.use(cors({origin: true, credentials:true}));
server.use(express.urlencoded({extended: true}))
server.use(express.json());
server.use(cookieParser())
server.use(morgan('dev'));
server.use((req, res, next) => {
    //res.header('Access-Control-Allow-Origin', 'http://localhost:19006');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//static files
server.use(express.static(path.join(__dirname, 'upload')))

//Routes



server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});

module.exports = server;