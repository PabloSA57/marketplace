const { Router } = require('express');


const axios = require('axios');
// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agrega credenciales
    /*mercadopago.configure({
        access_token: 'TEST-3623746131554031-050705-a105c66fac0a53271e79bf5e18cb424d-582661966'
    });*/

const {GetRedirect, PostCode, Checkout, Notification} = require('../controllers/mercadopago.controller');

const router = Router();

router.get('/redirect', GetRedirect);

router.post('/postcode', PostCode)

router.post('/checkout', Checkout)

router.get('/notification', Notification)

router.post('/pruebacheck')
module.exports = router;
