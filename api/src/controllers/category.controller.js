const {Category} = require('../db.js');

const AddCategory = async (req, res) => {
    const bodyRes = req.body;

    try {
        const categoryCreate = await Category.bulkCreate(bodyRes);

        res.send(categoryCreate)
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    AddCategory
}