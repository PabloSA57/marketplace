const {Router} = require ("express");


const router = Router();

router.post('/addtocart');
router.get('/getproductcart/:idCliente');

module.exports = router;