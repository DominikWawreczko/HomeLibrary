var express = require('express');
var router = express.Router();
var dbConn  = require('../config/db');
var addBookController = require('../controllers/addBookController');



module.exports = router;
router.get('/', addBookController.addBookGet);


router.post('/', addBookController.addBookPost)
module.exports = router;

