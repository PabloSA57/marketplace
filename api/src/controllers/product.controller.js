const {Product, Category, Order, Detailorder} = require('../db.js');

const AddProducts = async (req, res) => {
    const {productos, categoria} = req.body;

    try {
        const products = await Product.bulkCreate(productos);

        const typeCategory = await Category.findAll({
            where:{name: categoria}
        })

        await typeCategory[0].addProducts(products);

        res.json(products);

    } catch (error) {
        res.send(error)
    }
}

const GetProducts = async (req, res)  => {
    try {
        const products = await Product.findAll({
            include: [{
                model: Category
            }]
        })

        res.json(products)
    } catch (error) {
        res.send(error)
    }
}



module.exports = {
    AddProducts,
    GetProducts
}