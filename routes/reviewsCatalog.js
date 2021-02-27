var express = require('express');
var router = express.Router();
var dbConn  = require('../config/db');
var opinionsCatalogController = require('../controllers/reviewsCatalogController')

router.get('/', opinionsCatalogController.opinionCatalogGet);

module.exports = router;
