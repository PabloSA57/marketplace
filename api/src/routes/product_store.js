const {Router} = require ("express");


const router = Router();

const {
        AddProductToStore,
        UpdateProduct, 
        DeleteProduct, 
        GetProductOfStore,
        AllProductOfStore,
        ProductToAdd,
        BestSellingProducts
        } = require ('../controllers/product_store.controller');

router.post('/addproductstore', AddProductToStore);
router.put('/updateproduct', UpdateProduct);
router.delete('/deleteproduct/:id', DeleteProduct);
router.get('/bestproducts/:storeId', BestSellingProducts)

router.get('/getproductstore/:idstore', GetProductOfStore);
router.get('/allproductstore/:idstore', AllProductOfStore);

router.get('/producttoadd/:idstore', ProductToAdd)

module.exports = router;