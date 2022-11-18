const {Token, Order, Detailorder, Infoclient} = require('../db.js');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const { GetOrderAux } = require('./order.controller.js');

const accessToken = 'TEST-1379032387256720-080420-4a966f80395867818aa7b0b56313aeb9-1173470303';
const publicToken = '';
const clientId = "1379032387256720";
const clienSecret = 'HmcO8uuPPGyeDuC8SpLG4CxAq4cXgE68';


const GetRedirect = async (req, res) => {
    res.cookie('code', req.query.code)
    console.log(req.query)
    res.redirect('http://localhost:3000/response-mp')
}


const postResponse = async (code) => {
        const resMp = await axios.post(`https://api.mercadopago.com/oauth/token?client_id=${clientId}&client_secret=${clienSecret}&code=${code}&grant_type=authorization_code&redirect_uri=http://localhost:3001/mercadopago/redirect`, {}, 
        {headers: {
            'Authorization': `${accessToken}`,
            'Content-Type': 'application/json'
    }});

        console.log("postRespose: " , resMp.data)
        return resMp;
}   

const PostCode = async (req, res) => {
    const {code, storeId} = req.body;
    console.log(code)

    if(code){
        try {
            const resMp = await postResponse(code)

            const {access_token, refresh_token, public_key} = resMp.data;

            const addToken = await Token.create({
                access_token,
                refresh_token,
                public_key,
                storeId
            })


            res.json(addToken);
        } catch (error) {
            console.log(error)
            res.status(500).json(error)
        }
    }
}

const Checkout = async (req, res) => {
    const {products, storeId, amount, infoClient, typePayment, delivery} = req.body;

    console.log(delivery, storeId, typePayment)
    const {id:idclient,lng:lon, ...restClient} = infoClient;
    const objOrder = {storeId, amount, type_payment:typePayment, state: 'Pendiente', userId: idclient, delivery }

    if(typePayment === "ef"){

        try {
            const createOrder = await Order.create({
                ...objOrder,
                id: uuidv4(),
                num_voucher: uuidv4(),
            })
    
            await Infoclient.create({...restClient, orderId: createOrder.id, lon})
    
            const detailsOrder = products.map(e => {
                return {
                    precio: e.product.precio,
                    quantity: e.product.quantity,
                    productId: e.product.id,
                    orderId: createOrder.id
                }
            })
            await Detailorder.bulkCreate(detailsOrder)

            const condition = GetOrderAux(createOrder.id, "id")
            const resp = await Order.findAll(condition)
            res.json(resp)
        } catch (error) {
            console.log(error)
            res.status(500).send(error)
        }
        
    }
    
    const token = await Token.findOne({where: {storeId}})

    if(token.access_token && typePayment === "mp"){
        console.log(token.access_token)
        const items = products.map(e => {
            return{
                    id: e.product.id,
                    title: e.product.name,
                    description: "Verduras",
                    picture_url:e.product.imgurl,
                    category_id: e.product.categoria,
                    quantity: e.product.quantity,
                    currency_id: "ARS",
                    unit_price: parseInt(e.product.precio)
                }
            
            }
        )
    let preference = {
            items: items,
            auto_return: "all",
            back_urls: {
                success: "http://localhost:3001/mercadopago/notification",
                failure: "http://localhost:3001/mercadopago/notification",
                pending: "http://localhost:3001/mercadopago/notification"
            },
            marketplace_fee: 10,
            //notification_url: "http://192.168.252.200:3001/mercadopago/notification"
        }
    
        const headers = {
            'Authorization': `Bearer ${token.access_token}` ,
            'Content-Type': 'application/json'
        }
        
        //crear un orden como pedido
        try {
            const response = await axios.post("https://api.mercadopago.com/checkout/preferences",
                preference,
                {headers: headers}
            )

            const {id, items } =  response.data;

            const createOrder = await Order.create({
                    ...objOrder,
                    id: id,
                    num_voucher: 'sd'
            })
            
            await Infoclient.create({...restClient, orderId: createOrder.id, lon})

            const detailsOrder = items.map(e => {
                return {
                    precio: e.unit_price,
                    quantity: e.quantity,
                    productId: e.id,
                    orderId: createOrder.id
                }
            })
            
            await Detailorder.bulkCreate(detailsOrder)

            const condition = GetOrderAux(createOrder.id, "id")

            const resp = await Order.findAll(condition)
            res.json(resp)

        } catch (error) {
            console.log(error)
            res.status(500).send(error);
        }
    }

}

const Notification = async (req, res) => {
    const {status, preference_id, payment_id} = req.query;

    if(status === 'approved'){
        console.log(preference_id)
        
        await Order.update({state: 'approved'}, {where:{id:preference_id}})
        res.redirect('http://localhost:3000/inicio')
    }
    
    /*if(status === 'approved'){
        const resp = await axios.get(`https://api.mercadopago.com/v1/payments/${payment_id}`)

        console.log(resp)
    }*/ 
}

const routePrueba = (req, res) => {

}

module.exports = {
    GetRedirect,
    PostCode,
    Checkout, 
    Notification
}