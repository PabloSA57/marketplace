const {Store, Product,Category, Productstore, Order, Detailorder, Op, conn} = require('../db.js');

const AddProductToStore = async (req, res) => {
    const {productos, tiendaId} = req.body;
    try {
        const products = await Product.findAll({
            where: {
                id: productos
            }
        })

        const store = await Store.findByPk(tiendaId);
        await store.addProducts(products);
        res.json(products);
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

const UpdateProduct =  async (req, res) => {
    const {precio, stock, id} = req.body;

    //hacer que solo se actualice uno de los datos
    try {
        const product = await Productstore.update({precio:precio, stock:stock}, {
            where: {
                id: id
            }
        })
        res.json(product);
    } catch (error) {
        res.send(error);
    }
}

//Delete
const DeleteProduct = async (req, res) => {
    try {
        const deleteProd = await Productstore.destroy({
            where: {id: req.params.id}
        });

        res.send("listo");
    } catch (error) {
        res.send(error);
    }
}


const getAllProductoToTienda = async (idStore) => {
    const store = await Store.findByPk(idStore);
    const products = await store.getProducts();
    console.log(products)
    const idProducts= products.map(e => e.id);
    /*const newp = productos.map(e => {
        return {
            id: e.id,
            name: e.name,
            imgurl: e.imgurl,
            precio: e.productotienda.precio,
            stock: e.productotienda.stock,
            }
    })*/

    return idProducts;
}   


const ProductToAdd = async (req, res) => {
    //Productos que no esten agregados a la tienda
    //buscar los productos que ya estan agregados a la tienda

    console.log(req.params.idstore)

    try {
        const productos = await getAllProductoToTienda(req.params.idstore); 

        //const idProductos = [];
        console.log(productos)
        const condition = productos.length > 0
        ? { where:{id: {[Op.notIn]: productos}}, 
            include: [{
            model: Category,
            attributes: ['id','name']
            }],
            attributes: ['id', 'name', 'imgurl']
        }
        :{ include: [{
            model: Category,
            attributes: ['id','name']
            }],
            attributes: ['id', 'name', 'imgurl', 'unit']

        }

        const productToShow = await Product.findAll(
            condition
        )
        
        const nP = productToShow.map(e => {
            return {
                product:{id: e.id,
                name: e.name,
                imgurl: e.imgurl,
                unit: e.unit,
                categoria: e.category.name}
                }
        })
        res.json(nP);
    } catch (error) {

        res.send(error);
    }
}

//Productos más vendidos
const BestSellingProducts = async (req, res) => {
    const {storeId} = req.params;

    //problema de from
    //agregar otra relacion
    try {
        /*const resp = await Detailorder.findAll({
            group: [ 'detailorder.productId'],
            attributes: [
                [ conn.fn('sum', conn.col('detailorder.quantity')), 'sumQuan']
            ],
            include: {
                model: Order,
                attributes: [
                    'amount'
                ],
                right: true,
                required: true,
                group: ['order.id'],
            },
            

        })*/
        const idOrders = await Order.findAll({where: {storeId, state: 'approved'}})
        
        const idOrdersToArray = idOrders.map(e => e.id);
        console.log(idOrdersToArray)
        const numFromProduct = await Detailorder.findAll({
            where: {orderId: idOrdersToArray},
            include: [{
                model: Product,
                }
            
            ],
            attributes: [
                [ conn.fn('sum', conn.col('quantity')), 'sumQuan']
            ],
            group: 'product.id',
        })

        //console.log(numFromProduct)

        res.json(numFromProduct)
    } catch (error) {
        res.status(500).json({error})
        console.log(error)
    }

    /*try {
        const resp = await Order.findAll({
            where: {storeId, state: 'approved'},
            group: 'order.id',
            include: {
                    model: Detailorder,
                    attributes: [
                        'quantity',
                        [ conn.fn('sum', conn.col('quantity')), 'sumQuan']
                    ],
                    include:{
                        model: Product,
                        attributes: [
                            'name'
                        ]
                    },
                    required: true,
                    right: true ,
                    group: 'detailorders.id'
                },
                attributes: [
                    'id',
                    'amount',
                ],
                
        }
        
        )

        res.json({resp})
    } catch (error) {
        console.log(error)
        res.status(500).json({err: error})
    }*/
}




//Client
const getProductOfStore = async (condition) => {
    const getProduct =  await Productstore.findAll({
    where: condition,
    include: [{
        model:Product,
        attributes:["id", "name", "imgurl"],
        include: {
            model:Category,
            attributes: ["id","name"]
        },
    },
    {model: Store,
    attributes: ["id","name", "imgurl", "lat", "lon"]
    }
],
    attributes:["id", "precio", "stock"]
})


const productsOrganize = getProduct.map(e => {
    return {
        id: e.id,
        product:{
            id:e.product.id,
            name: e.product.name,
            precio: e.precio,
            imgurl: e.product.imgurl,
            categoria: e.product.category.name,
            stock: e.stock
        },
        almacen: {
            id: e.store.id,
            name: e.store.name,
            imgurl: e.store.imgurl,
            lat: e.store.lat,
            lon: e.store.lon
        }
    }
})

return productsOrganize;
}


const GetProductOfStore = async (req, res) => {
    const {idstore} = req.params;
    console.log(idstore)
    const condition = {
        storeId: idstore,
        stock: "stock"
        };
    try {
        const getProduct = await getProductOfStore(condition);
        res.send(getProduct);
    } catch (error) {
        console.log("getp",error)
        res.send(error)
    }
}

const AllProductOfStore = async (req, res) => {
    const {idstore} = req.params;
    const condition = {
        storeId: idstore,
        };
    try {
        const getProduct = await getProductOfStore(condition);
        res.send(getProduct);
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    AddProductToStore,
    UpdateProduct,
    DeleteProduct,
    ProductToAdd,
    GetProductOfStore,
    AllProductOfStore,
    BestSellingProducts
}