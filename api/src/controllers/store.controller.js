const {Store, User} = require('../db.js');

const AddStore =  async (req, res) => {
    const {name, ubicacion, imgurl, userId} = req.body;     

    try {
        const store = await Store.create({
            name,
            ubicacion,
            imgurl
        });

        const user = await User.findByPk(userId);

        await store.setUsuario(user);

        res.json(store);

    } catch (error) {
        res.send(error)
    }
}

const GetStore = async (req, res) => {
    try {
        const allStore = await Store.findAll();
        res.send(allStore)
    } catch (error) {
        res.status(404).send('No hay tiendas');
    }
}

module.exports = {
    AddStore,
    GetStore
}