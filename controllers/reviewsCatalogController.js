const dbConn  = require('../config/db');


exports.opinionCatalogGet = function(req, res, next) {

    dbConn.query('Select Author, Title, Review, Writer  From Reviews LEFT JOIN Books ON Books.ISBN = Reviews.ISBN ORDER BY Title asc',function(err,rows)     {

        if(err) {
            res.render('index',{problem: "Ups pojawił się jakiś problem \!"});
        } else {
            res.render('reviewsCatalog',{data:rows});
        }
    });
};