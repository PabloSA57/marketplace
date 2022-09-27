const {Router} = require ("express");


const router = Router();
const {GetOrder, CancelOrder, InfoSele} = require('../controllers/order.controller');


router.get('/getorder/:storeId', GetOrder)
router.put('/cancelorder/:id', CancelOrder)
router.get('/infosel/:storeId', InfoSele)

module.exports = router;