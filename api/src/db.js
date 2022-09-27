require('dotenv').config();
const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');
const InfoClient = require('./models/InfoClient');

const {
    DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/marketplace`, {
    logging: false,
    native: false,
})
const basename = path.basename(__filename);

const modelDefiners = [];


// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, '/models', file)));
    });

  // Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const {User, Cart, Product, Store, Productstore, Category, Token, Order, Detailorder, Infoclient} = sequelize.models;

//Asocia una tienda con un usuario
User.hasOne(Store);
Store.belongsTo(User);

//Asocia un producto con la Tienda
Store.belongsToMany(Product, {through: Productstore});
Product.belongsToMany(Store, {through: Productstore});
Store.hasMany(Productstore);
Productstore.belongsTo(Store);
Product.hasMany(Productstore);
Productstore.belongsTo(Product);

//Token from store
Store.hasOne(Token);
Token.belongsTo(Store);

//Asocia una categoria a un producto
Category.hasMany(Product);
Product.belongsTo(Category);


//Asocia un token a un usuario
//Usuarios.hasOne(Tokens);
//Tokens.belongsTo(Usuarios);

//Cart
Productstore.belongsToMany(User, {through: Cart});
User.belongsToMany(Productstore, {through: Cart});
Productstore.hasMany(Cart);
Cart.belongsTo(Productstore);
User.hasMany(Cart);
Cart.belongsTo(Productstore);

//ORDER
Product.hasMany(Detailorder);
Detailorder.belongsTo(Product);

Order.hasMany(Detailorder)
Detailorder.belongsTo(Order)
////
User.hasMany(Order)
Order.belongsTo(User)

Store.hasMany(Order)
Order.belongsTo(Store)

Order.hasOne(Infoclient);
Infoclient.belongsTo(Order);

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,
    Op     // para importart la conexión { conn } = require('./db.js');
};