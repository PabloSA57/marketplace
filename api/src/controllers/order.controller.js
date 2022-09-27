const { Order, Detailorder, User, Store, Product, Infoclient, conn} = require('../db.js');

const GetOrderAux = (id, type) => {

    console.log(type, id)
    const find = {  include: [
        {model:User,
        attributes: ['id','name', 'lastname', 'email']
        },
        {model:Store,
            attributes: ['id','name', 'number_phone']
            },
        {
            model: Detailorder,
            include: {
                model: Product,
            },
            attributes: ['id', 'precio', 'quantity', 'productId']
        },

        {
            model: Infoclient,
            attributes: ['id', 'direction','number_phone','lat', 'lon']
        }
    ],
    attributes: ['id', 'amount', 'state', 'date', 'type_payment']}
    const condition = type === "storeId" ? {where: {storeId: id}, ...find} : {where: {id}, ...find} 

    return condition
}

const GetOrder = async (req, res) => {
    const {storeId}  = req.params;
    console.log('order store id', storeId)
    if(storeId !== undefined){
        console.log('en el if',storeId)
        try {
            const condition = GetOrderAux(storeId, "storeId")
            const resp = await Order.findAll(condition)
    
            res.send(resp)
        } catch (error) {
            console.log('Order',error)
        }
    }
    
}


//Count 
const getOrderAproved = async (req, res) => {
    const {idStore} = req.params;
    try {
        const resp = await Order.findAll({
            where: {state: 'aproved', idStore},
            
        })

        res.json(resp)
    } catch (error) {
        res.status(500).send(error)
    }
}

const CancelOrder = async (req, res) => {
    const {id} = req.params;
    try {
        await Order.update({state: 'cancelada'}, {where:{id}})
        res.json({message: 'Order canceled'})
    } catch (error) {
        res.send(error)
    }
}

//Numero de ventas y monto total
const InfoSele = async (req, res) => {
    const {storeId} = req.params;
    try {

        const resp = await Order.findAll({
            where:{state: 'approved',  storeId},
            attributes: [[conn.fn('count', conn.col('id')), 'count'], [conn.fn('sum', conn.col('amount')), 'amount']]
        }
            )
        //const count = await Order.count({where: {state: 'approved',  storeId}})
        //Routesconst amount = await Order.sum('amount', {where: {state: 'approved'}})
        res.json(resp)
    } catch (error) {
        res.status(500).json({err: error})
        console.log(error)
    }
}

module.exports = {
    GetOrder,
    GetOrderAux,
    CancelOrder,
    InfoSele
}