const { Router } = require('express');

const router = Router();

const routerBazar = require('./routesBazar');

router.use('/bazar', routerBazar);

module.exports = router;