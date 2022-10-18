const {Router} = require ("express");


const router = Router();
const {GetOrder, CancelOrder, InfoSele, UpdateStateOrder, CreateOrder} = require('../controllers/order.controller');


router.get('/getorder/:storeId', GetOrder)
router.put('/updateorder/:id', UpdateStateOrder)
router.get('/infosel/:storeId', InfoSele)
router.post('/createorder', CreateOrder)

module.exports = router;