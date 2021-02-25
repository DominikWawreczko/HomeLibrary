var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController')

router.get('/', indexController.indexGet );

module.exports = router;
