const {Store, User} = require('../db.js');
const { v4: uuidv4 } = require('uuid');
const {newStore_ALG, storeAround_ALG} = require('../lib/algolia/algolia')
const {cloudinary} = require('../lib/cloudinary');
const {RegisterAux} = require('../controllers/user.controller')

const CreateStore =  async (req, res) => {
    const {name_local, lat, lng, location, number_phone, photoStore, ...rest} = req.body;

        
      
            try {
                if(true){
                    /*const imageResp = await cloudinary.uploader.upload(photoStore, {
                        resoruce_type: "image",
                        discard_original_filename: true,
                        width: 500,
                    })*/
                    const user = await RegisterAux(rest);
                const imgurl = ''
                const store = await Store.create({
                    name: name_local,
                    lat,
                    lon: lng,
                    imgurl: imgurl/*imageResp.secure_url*/,
                    location,
                    number_phone
                });
                
                await store.setUser(user.user);
        
                const objectID = uuidv4();
        
                /*const newStore = {
                    name: name_local,
                    imgurl: imageResp.secure_url,
                    _geoloc: {
                        lat,
                        lng
                    },
                    location,
                    number_phone,
                    userId: user.id,
                    id: store.id,
                    objectID
                }*/
        
                //const newStoreAL = await newStore_ALG(newStore);
        
                res.status(200).json({postgres: user, angolia: store});
                }else{
                    console.log('no hay imagen')
                }
            } catch (error) {
                console.log(error)
                res.status(500).json({Erroruser: error})
            }
    }



const GetStores = async (req, res) => {
    try {
        const allStore = await Store.findAll();
        res.send(allStore)
    } catch (error) {
        res.status(404).send('No hay tiendas');
    }
}

const GetStoresAround = async (req, res) => {
    const { lat, lng } = req.query;
    try {
        const resStore = await storeAround_ALG(lat, lng);
        const orderStore = resStore.length > 0 ? resStore?.map(e => {
            return {
                    id: e.id, 
                    name: e.name,
                    imgurl: e.imgurl,
                    location: e.location,
                    number_phone: e.number_phone
                }
            })
        : []
        res.json(orderStore);
    } catch (error) {   
        res.status(500).json({message: error.message})
    }
}

const HasStore = async (req, res) => {
    const {user} = req._user;
    console.log("hasStore", user.id)
    try {
        const resStore = await Store.findOne({where: {userId: user.id}, include: [{model: User, attributes:["id", "name", "lastname", "email"]}]});
        res.json({store: resStore ,hasStore: true})
    } catch (error) {
        res.status(500).json({error, hasStore: false})
    }
}

const UpdateStore = async (req, res) => {
    const {idStore, newImage, ...rest} = req.body;

    const store = await Store.findByPk(idStore);

    console.log(store.id)
    const newObj = {...rest}
    if(newImage){
        const imageResp = await cloudinary.uploader.upload(newImage, {
            resoruce_type: "image",
            discard_original_filename: true,
            width: 500,
        })
            newObj = {
            ...newObj,
            imgurl: imageResp.secure_url
        }
    }


    try {
        const update = await Store.update({newObj,
            where:{id: idStore}
        })

        res.send("update")
    } catch (error) {
        res.status(500).send(error)
    }
}

module.exports = {
    CreateStore,
    GetStores,
    HasStore,
    GetStoresAround,
    UpdateStore
}