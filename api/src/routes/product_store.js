const {Router} = require ("express");


const router = Router();

const {
        AddProductToStore,
        UpdateProduct, 
        DeleteProduct, 
        GetProductOfStore,
        ProductToAdd
        } = require ('../controllers/product_store.controller');

router.post('/addproductstore', AddProductToStore);
router.put('/updatestore', UpdateProduct);
router.delete('/deleteproduct', DeleteProduct);

router.get('/getproductstore/:idstore', GetProductOfStore);

router.post('/producttoadd/:idstore', ProductToAdd)

module.exports = router;