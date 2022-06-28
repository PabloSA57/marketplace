const {Router} = require ("express");


const router = Router();

router.post("/addproduct");
router.get("/getproduct");

module.exports = router;