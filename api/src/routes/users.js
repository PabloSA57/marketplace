const {Router} = require ("express");


const router = Router();

const {Register, Login, Authentication} = require('../controllers/user.controller');
const routerPrivate = require('../middleware/routePrivate');

router.post('/register', Register);
router.post('/login', Login);
router.get('/auth', routerPrivate,  Authentication)

module.exports = router;