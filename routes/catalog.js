var express = require('express');
var router = express.Router();
var catalogController = require('../controllers/catalogController');

router.get('/', catalogController.catalogGet );


router.get('/zwroc/(:ID)', catalogController.returnBookGet);

router.get('/wypozycz/(:ID)', catalogController.rentBookGet);


router.post('/wypozycz/(:ID)', catalogController.rentBookPost);



module.exports = router;