const {Router} = require ("express");

const router = Router();

const {GetStores, CreateStore, HasStore, GetStoresAround, UpdateStore} = require ('../controllers/store.controller');
const routerPrivate = require('../middleware/routePrivate');

router.post('/create', CreateStore);
router.get('/getstore', GetStores);
router.put('/updatestore', UpdateStore)
router.get('/getstoresaround', GetStoresAround)
router.get('/hasstore', routerPrivate, HasStore);


module.exports = router;