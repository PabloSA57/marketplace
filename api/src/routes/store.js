const {Router} = require ("express");


const router = Router();

router.post('/createstore');
router.get('/getstore');

module.exports = router;