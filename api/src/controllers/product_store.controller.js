const {Store, Product,Category, Productstore, Op} = require('../db.js');

const AddProductToStore = async (req, res) => {
    const {productos, tiendaId} = req.body;
    try {
        const products = await Product.findAll({
            where: {
                id: productos
            }
        })

        const store = await Store.findByPk(tiendaId);
        await store.addProductos(products);
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
    const products = await store.getProductos();

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

    console.log(req.params.tiendaId)

    try {
        const productos = await getAllProductoToTienda(req.params.tiendaId); 

        //const idProductos = []; 

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
            }]
        }

        const productToShow = await Product.findAll(
            condition
        )
        
        const nP = productToShow.map(e => {
            return {
                id: e.id,
                name: e.name,
                imgurl: e.imgurl,
                categoria: e.categorium.name
                }
        })
        res.json(nP);
    } catch (error) {
        res.send(error);
    }
}






//Client
const getProductOfStore = async (condition) => {
    const getProduct =  await Productotienda.findAll({
    where: condition,
    include: {
        model:Product,
        attributes:["id", "name", "imgurl"],
        include: {
            model:Category,
            attributes: ["name"]
        }
    },
    attributes:["id", "precio", "stock"]
})


const newp = getProduct.map(e => {
    return {
            id: e.id,
            name: e.producto.name,
            imgurl: e.producto.imgurl,
            precio: e.precio,
            stock: e.stock,
            categoria: e.producto.categorium.name
        }
})

return newp;
}


const GetProductOfStore = async (req, res) => {
    const {idstore} = req.params;
    const condition = {
        tiendaId: idstore,
        stock: "true"
        };
    try {
        const getProduct = await getProductOfStore(condition);
        res.send(getProduct);
    } catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports = {
    AddProductToStore,
    UpdateProduct,
    DeleteProduct,
    ProductToAdd,
    GetProductOfStore
}