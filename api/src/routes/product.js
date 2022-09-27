const {Router} = require ("express");
const roles = require ('../middleware/roles')


const router = Router();

const {AddProducts, GetProducts} = require('../controllers/product.controller')
router.post("/addproduct",roles('comerciante'), AddProducts);
router.get("/getproduct", GetProducts);

module.exports = router;