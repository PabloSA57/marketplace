const {Router} = require ("express");

const {addToCart, getProductCart, deleteCartProduct} = require ('../controllers/cart.controller');
const router = Router();


router.post('/addtocart', addToCart);
router.get('/getproductcart/:idCliente', getProductCart);
router.delete('/delete/:id', deleteCartProduct);

module.exports = router;