var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

// display books page
router.get('/', function(req, res, next) {

    dbConn.query('SELECT * FROM Ksiazki ORDER BY id desc',function(err,rows)     {

        if(err) {
            // render to views/books/index.ejs
            res.render('index');
        } else {
            // render to views/books/index.ejs
            res.send({data:rows});
        }
    });
});


module.exports = router;