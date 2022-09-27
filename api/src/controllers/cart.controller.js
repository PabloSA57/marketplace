const {
  User,
  Cart,
  Productstore,
  Product,
  Store,
  Category,
} = require("../db.js");
const { orderProductCart } = require("../utils/index.js");

const addToCart = async (req, res) => {
    const { idCliente, idProductos } = req.body;
    console.log(idProductos);
    try {
        const user = await User.findByPk(idCliente);
        const products = await Productstore.findAll({
        where: { id: idProductos },
        });
        await user.addProductstores(products);

        res.send("listo");
    } catch (error) {
        console.log(error);
        res.send(error);
    }
    };

    const organizeDate = (products) => {
    const productsOrganize = products.map((e) => {
        return {
        id: e.id,
        product: {
            id: e.productstore.id,
            name: e.productstore.product.name,
            precio: e.productstore.precio,
            imgurl: e.productstore.product.imgurl,
            unit: e.productstore.product.unit,
            categoria: e.productstore.product.category.name,
        },
        almacen: {
            id: e.productstore.store.id,
            name: e.productstore.store.name,
            location: e.productstore.store.location,
        },
        };
    });
    return productsOrganize;
    };

    const getProductCart = async (req, res) => {
    const { idCliente } = req.params;
    console.log("");
    console.log(idCliente);
    try {
        const products = await Cart.findAll({
        where: { userId: idCliente },
        include: [
            {
            model: Productstore,
            include: [
                { model: Store, attributes: ["id", "name", "location", "imgurl"] },
                {
                model: Product,
                include: { model: Category, attributes: ["id", "name"] },
                attributes: ["id", "name", "imgurl", "unit"],
                },
            ],
            },
        ],
        });

    const organizeProduct = organizeDate(products);
   /*let resProduct =    organizeProduct.length > 0 
                            ?   orderProductCart(organizeProduct)
                            : []*/
    //console.log(resProduct)
    res.send(organizeProduct);
    } catch (error) {
    console.log(error);
    res.send(error);
    }
};

const deleteCartProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await Cart.destroy({ where: { id: id } });
    res.send("Product delete");
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  addToCart,
  getProductCart,
  deleteCartProduct,
};
