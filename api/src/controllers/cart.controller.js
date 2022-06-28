const {User, Cart, Productstore, Product, Store} = require('../db.js');

const addToCart = async (req, res) => {
    const {idCliente, idProductos} = req.body;

    try {
        const user  = await User.findByPk(idCliente);
        const products = await Productstore.findAll({
            where: {id: idProductos}
        });
        await user.addProductstores(products);

        res.send('listo')
            
    } catch (error) {
        console.error(error)
        res.send(error)
    }
}

const organizeDate =(products) => {
    const productsOrganize = products.map(e => {
        return {
            id: e.id,
            product:{
                id:e.productotienda.id,
                name: e.productotienda.producto.name,
                precio: e.productotienda.precio,
                imgurl: e.productotienda.producto.imgurl
            },
            almacen: {
                id: e.productotienda.tienda.id,
                name: e.productotienda.tienda.name
            }
        }
    })
    return productsOrganize;
}


const getProductCart = async (req, res) => {
    const {idCliente} = req.params;
    console.log(idCliente)
    try {
        const products = await Cart.findAll({
            where: {usuarioId: idCliente},
            include:[
                {model: Productotienda,
                    include: [Store, Product]
                }
            ]
        })

        const organizeProduct = organizeDate(products);
        res.send(organizeProduct)
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}


module.exports = {
    addToCart,
    getProductCart
}