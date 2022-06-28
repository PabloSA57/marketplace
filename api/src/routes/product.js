const {Router} = require ("express");


const router = Router();

const {AddProducts, GetProducts} = require('../controllers/product.controller')
router.post("/addproduct", AddProducts);
router.get("/getproduct", GetProducts);

module.exports = router;