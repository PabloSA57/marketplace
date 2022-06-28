const {Router} = require ("express");


const router = Router();

const {AddCategory} = require('../controllers/category.controller')
router.post('/addcategory', AddCategory);

module.exports = router;