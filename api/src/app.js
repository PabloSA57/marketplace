const express = require('express');
const http = require('http');
const sockeIo = require("socket.io");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const Socket = require('./lib/socket')
const app = express();
const server = http.createServer(app);

const io = sockeIo(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

Socket(io)
const cors = require('cors')

//require('./db.js');


app.name = 'API';

app.use(cors({origin: true, credentials:true}));
app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(cookieParser())
app.use(morgan('dev'));
app.use((req, res, next) => {
    //res.header('Access-Control-Allow-Origin', 'http://localhost:19006');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//static files
app.use(express.static(path.join(__dirname, 'upload')))

const UserRoute = require('./routes/users');
const ProductRoute = require('./routes/product');
const StoreRoute = require('./routes/store');
const ProductStoreRoute = require('./routes/product_store');
const CategoryRoute = require('./routes/category');
const CartRoute = require('./routes/cart');
const MercadopagoRoute = require('./routes/mercadopago');
const OrderRoute = require('./routes/order');
const { functionSocket } = require('./controllers/mercadopago.controller');

//Routes
app.use('/user', UserRoute);
app.use('/product', ProductRoute);
app.use('/store', StoreRoute);
app.use('/product-store', ProductStoreRoute);
app.use('/category', CategoryRoute);
app.use('/cart', CartRoute);
app.use('/order', OrderRoute);
app.use('/mercadopago', MercadopagoRoute);

//shocket
    /*const func = (socket) => {

        socket.emit("Saludo", "Hola Mundo de Pablo")
    }
    
        io.on("connection", (socket) => {
            console.log('a user connected');
            //func(socket)
            functionSocket(socket)
        });*/


app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    res.status(status).send(message);
});

module.exports = {server, io};