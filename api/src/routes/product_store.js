const {Router} = require ("express");


const router = Router();

router.post('/addproductstore');
router.put('/updatestore');
router.delete('/deleteproduct');

router.get('/getproductstore/:idstore');

module.exports = router;