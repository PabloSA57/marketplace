const { Order, Detailorder, User, Store, Product, Infoclient, conn, Op} = require('../db.js');

const GetOrderAux = (id, type) => {

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
    
    let condition; 
    if(type === "storeId") condition = {where: {storeId: id}, ...find}  
    if(type === "id") condition = {where: {id}, ...find} 
    if(type === "userId") condition = {where: {userId:id, state:{[Op.or]: ['Aprovada', 'Pendiente']}}, ...find} 

    return condition
}

const GetOrder = async (req, res) => {
    const {id, type}  = req.query;
    if(id !== undefined){
        try {
            let condition; 
            if(type === 'storeId') condition = GetOrderAux(id, "storeId")
            if(type === 'userId') condition = GetOrderAux(id, "userId")
            if(type === 'id') condition = GetOrderAux(id, "id")
            
            const resp = await Order.findAll({...condition, order: [['id', 'DESC']]})
            
            res.json(resp)
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: error})
        }
    }
    
}

const CreateOrder = async (req, res) => {
    
    
        try {
            const orderCreated = await Order.findAll(req.body)
    
            res.send(orderCreated)
        } catch (error) {
            res.status(500).json({msg: error})
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

const UpdateStateOrder = async (req, res) => {
    const {id} = req.params;
    const {state} = req.body;

    try {
        await Order.update({state}, {where:{id}})
        res.json({message: `Orden ${state}`})
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
    UpdateStateOrder,
    InfoSele,
    CreateOrder
}