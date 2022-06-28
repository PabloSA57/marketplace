const {Router} = require ("express");

const router = Router();

const {GetStore, AddStore} = require ('../controllers/store.controller')

router.post('/createstore', AddStore);
router.get('/getstore', GetStore);

module.exports = router;