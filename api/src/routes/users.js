const {Router} = require ("express");


const router = Router();

const {Register, Login} = require('../controllers/user.controller')

router.post('/register', Register);
router.get('/login', Login);

module.exports = router;