const {Router} = require ("express");
const roles = require ('../middleware/roles')


const router = Router();

const {AddProducts, GetProducts} = require('../controllers/product.controller')
router.post("/addproduct", AddProducts);
router.get("/getproduct", GetProducts);

module.exports = router;