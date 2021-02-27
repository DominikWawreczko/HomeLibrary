var express = require('express');
var router = express.Router();
var dbConn  = require('../config/db');
var addOpinionController = require('../controllers/addReviewController');



module.exports = router;



router.get('/', addOpinionController.addOpinionGet );

router.post('/', addOpinionController.addOpinionPost);


module.exports = router;
