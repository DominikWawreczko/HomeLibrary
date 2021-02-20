var express = require('express');
var router = express.Router();
var dbConn  = require('../lib/db');

// display books page
router.get('/', function(req, res, next) {

    dbConn.query('Select Ksiazki.ID,ISBN, AUTOR, Tytul, Wypozyczajacy  From Ksiazki LEFT JOIN Wypozyczenia ON Ksiazki.ID = Wypozyczenia.ID ORDER BY ID desc',function(err,rows)     {

        if(err) {
            // render to views/books/index.ejs
            res.render('index');
        } else {
            // render to views/books/index.ejs
            res.render('katalog',{data:rows});
        }
    });
});


module.exports = router;